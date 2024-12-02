// Hierarchical edge bundling chart code
const width = 960;
const height = 860;
const svg = d3.select("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", `0 0 ${width} ${height}`)
    .attr("style", "max-width: 100%; height: auto; font: .75em sans-serif;")
    .style("max-width", "100%")
    .style("height", "auto");

const chartGroup = svg.append("g")
    .attr("transform", `translate(${width / 2}, ${height / 2})`);

let treeData, linkData;

// Load data files
Promise.all([
    d3.json("tree-3.json"),
    d3.json("links.json")
]).then(([tree, links]) => {
    treeData = tree;
    linkData = links;
    
    const root = d3.hierarchy(treeData);
    
    // Define cluster
    const cluster = d3.cluster()
        .size([2 * Math.PI, Math.min(width, height) / 2.8]);

    cluster(root);

    root.descendants().forEach(d => {
        if (d.depth === 1) {
            // Spread out first-level children slightly
            d.x *= 1.12; 
        } else if (d.depth === 2) {
            // Bring second-level children closer to their parents
            d.x = d.parent.x + (d.x - d.parent.x) * 0.65;
        }
    });

    // Lookup map for name-based linking
    const nodeByName = {};
    root.descendants().forEach(d => nodeByName[d.data.name] = d);

    // Create links
    const linksData = linkData.map(link => ({
        source: nodeByName[link.source],
        target: nodeByName[link.target]
    }));

    // Draw links
    const line = d3.lineRadial()
        .curve(d3.curveBundle.beta(.5))
        .radius(d => d.y)
        .angle(d => d.x);

    const link = chartGroup.append("g")
        .selectAll("path")
        .data(linksData)
        .enter()
        .append("path")
        .attr("d", d => {
            if (d.source.depth === 2 && d.target.depth === 2) {
                // Create control points for bundling effect
                const midAngle = Math.PI / 2;
                const distance = Math.abs(d.source.y - d.target.y);
                const midRadius = 0;
                return line([
                    d.source,
                    { x: midAngle, y: midRadius }, // Control point for bundling
                    d.target
                ]);
            }
            return null;
        })
        .style("fill", "none")
        .style("stroke", "#ccc")
        .style("mix-blend-mode", "multiply");

    // Highlight on hover
    function overed(event, d) {
        link.style("mix-blend-mode", null);

        d3.select(this).attr("font-weight", "bold").attr("fill", "blue");

        link.filter(l => l.source.data.name === d.data.name || l.target.data.name === d.data.name)
            .style("stroke", "blue")
            .raise();

        const connectedNodes = new Set(
            linkData
                .filter(l => l.source === d.data.name || l.target === d.data.name)
                .flatMap(l => [l.source, l.target])
        );
    
        d3.selectAll("text")
            .filter(t => connectedNodes.has(t.data.name) && t.data.name !== d.data.name)
            .attr("fill", "darkblue")
            .attr("font-weight", "bold");
    }

    function outed(event, d) {
        link.style("mix-blend-mode", "multiply");

        d3.select(this).attr("font-weight", null).attr("fill", null);
        link.style("stroke", "#ccc");
        d3.selectAll("text").attr("fill", null).attr("font-weight", null);
    }

    // Draw nodes
    chartGroup.append("g")
        .selectAll("circle")
        .data(root.descendants())
        .enter().append("circle")
        .filter(d => d.depth === 2)
        .attr("transform", d => `rotate(${d.x * 180 / Math.PI - 90}) translate(${d.y})`)
        .attr("r", 4)
        .style("fill", "#ffffff")
        .on("mouseover", overed)
        .on("mouseout", outed);

    // Add text labels to nodes
    chartGroup.append("g")
        .selectAll("text")
        .data(root.descendants())
        .enter().append("text")
        .filter(d => d.depth === 2)
        .attr("transform", d => `rotate(${d.x * 180 / Math.PI - 90}) translate(${d.y + 8}) ${d.x < Math.PI ? "" : "rotate(180)"}`)
        .style("text-anchor", d => d.x < Math.PI ? "start" : "end")
        .text(d => d.data.name)
        .on("mouseover", overed)
        .on("mouseout", outed);
          
}).catch(error => {
    console.error("Error loading the JSON files:", error);
});
