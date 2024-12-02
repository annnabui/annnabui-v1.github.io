// set up map
var map = L.map('map').setView([42.343, -83.037], 14)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// set up colors for each area category
function getColor(t) {
    return t === 1 ? 'red' :
           t === 2  ? 'blue' :
           t === 3  ? 'maroon' :
           t === 4  ? '#FF10F0' :
                    'gray';
}

// color settings
function style(feature) {
    return {
        fillColor: getColor(feature.properties.Type),
        weight: 2,
        opacity: 1,
        color: getColor(feature.properties.Type),
        fillOpacity: 0.7,
    };
}

// update site information when the corresponding polygon is selected
function updateDivText(properties) {
    let nameDiv = document.getElementById('name');
    let descriptionDiv = document.getElementById('description');
    nameDiv.innerHTML = `${properties.Site}`;
    descriptionDiv.innerHTML = ` ${properties.Additional_Info_1} <br><br> ${properties.Additional_Info_2} <br><br> ${properties.Additional_Info_3}`;
}

// zoom to polygon when selected
function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

// apply info update and zoom to each site
function onEachFeature(feature, layer) {
    layer.on('click', function(e) {
        updateDivText(feature.properties);
        zoomToFeature(e);
    }); 
}

// apply everything to map
L.geoJson(urData, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(map);

// create legend on map
var legend = L.control({ position: "bottomright" });

legend.onAdd = function(map) {
  var div = L.DomUtil.create("div", "legend");
  div.innerHTML += "<h4>Site type</h4><br>";
  div.innerHTML += '<i style="background: red"></i><span>Museums (2)</span><br>';
  div.innerHTML += '<i style="background: blue"></i><span>Religious Sites (8)</span><br>';
  div.innerHTML += '<i style="background: maroon"></i><span>Private Houses (4)</span><br>';
  div.innerHTML += '<i style="background: #FF10F0"></i><span>Landmarks (7)</span><br>';

  return div;
};

legend.addTo(map);
