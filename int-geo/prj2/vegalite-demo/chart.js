vegaEmbed("#chart", {
    "$schema": 'https://vega.github.io/schema/vega-lite/v5.json',
    "description": "Chart title here",
    "data": {
        "url": "data.csv",
    },

"width": 900,
"height": 500,
"layer": [
    {
        "mark": {
            "type": "line",
            "strokewidth": 3,
            "tooltip": true,
        },
        "encoding": {
            "x": {
                "field": "Year",
                "type": "temporal",
                "title": "Year",
                "axis": {
                    "grid": true,
                    "tickCount": "Year",
                    "format": "%Y",
                    "labelAngle": 0,
                    "values": [
                        "1980", "1985", "1990", "1995", "2000"
                    ]
                }
            },
            "y": {
                "field": "NYC Consumption(Million gallons per day)",
                "type": "quantitative",
                "axis": {
                    "grid": false,
                },
                "scale": {
                    "domain": [900, 1600]
                }
            }
        }
    }, 
    {
        "mark": {
            "type": "point",
            "filled": true,
            "color": "blue",
            "size": 50,
            "tooltip": true,
        },
        "encoding": {
            "x": {
                "field": "Year",
                "type": "temporal",
            },
            "y": {
                "field": "NYC Water Consumption (Millions gallons/day)",
                "type": "quantitative"
            },
            "tooltip": [
                {
                    "field": "Year",
                    "type": "temporal",
                    "title": "Year",
                    "format": "%Y",
                },
                {
                    "field": "NYC Population",
                    "type": "quantitative",
                    "title": "NYC Population",
                },
                {
                    "field": "NYC Consumption(Million gallons per day)",
                    "type": "quantitative",
                    "title": "Consumption (Million gallons per day)",
                },
                {
                    "field": "Per Capita(Gallons per person per day)",
                    "type": "quantitative",
                    "title": "Per Capita (Gallons per person per day)",
                },
            ]
        }
    }
]
})