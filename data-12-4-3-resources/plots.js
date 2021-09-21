function init() {
    // Initiate the reference to dropdown selection of a sample number
        var selector = d3.select("#selDataset");

    // Use the selector to make a selection
    d3.json("samples.json").then((data) => {
        console.log(data);
        var sampleNames = data.names;
        sampleNames.forEach((sample) => {
            selector
                .append("option")
                .text(sample)
                .property("value", sample)
        })
        // Use the first sample from the list to build the initial plots
        var firstSample = sampleNames[0];
        buildCharts(firstSample);
        buildMetadata(firstSample);
    })
}

//  Initialize dashboard
init();

// function optionChanged(newSample) {
//     console.log(newSample);
// }

function optionChanged(newSample) {
    buildMetadata(newSample);
    buildCharts(newSample);
}

// Build MetaData for each sample filtered
function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
        var metadata = data.metadata;
        var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
        var result = resultArray[0];
        var PANEL = d3.select("#sample-metadata");

        // Use Html to clear existing data each time a selection is made
        PANEL.html("");
        // PANEL.append("h6").text(result.location);
        // Use Object entries to add each key and value pair

        Object.entries(result).forEach(([key, value]) => {
            PANEL.append("h6").text(`${key.toUpperCase()}:${value}`);
        });
        //  Build Gauge
        // var metadata = data.metadata;
        // var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
        // var result = resultArray[0];
        var wFreq = parseFloat(result.wfreq);

        var gaugeData = {
            domain: { x: [0, 1], y: [0, 1] },
            type:"indicator",
            value: wFreq,
            mode: "gauge+number",
            gauge:{
                axis:{range: [null,10], dtick:"2"},
                bar: {color: "black"},
                borderwidth: 2,
                bordercolor: "gray",
                threshold: {
                    line: { color: "darkblue", width: 4 },
                    thickness: 0.75,
                    value: wFreq,
                    },   
                steps:[
                    {'range': [0,2], 'color': "lightcyan"},
                    {'range': [2,4], 'color': "cyan"},
                    {'range': [4,6], 'color': "mediumturquoise"},
                    {'range': [6,8], 'color': "cadetblue"},
                    {'range': [8,10], 'color': "teal"},
                    // {range: [0,2], color: "light blue"},
                    // {range: [2,4], color: "sky blue"},
                    // {range: [4,6], color: "strong blue"},
                    // {range: [6,8], color: "dark blue"},
                    // {range: [8,10], color: "very dark blue"},
                ],
            }
        };
        var gaugeLayout = { 
            title: {text: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week"},
            margin: { t: 0, b: 0},
            margin: {width: 600, height: 600},
        };
        Plotly.newPlot("gauge", [gaugeData], gaugeLayout);
    });
}
// Create Charts
function buildCharts(sample) {
    d3.json("samples.json").then(function (data) {
        var samples = data.samples;
        var resultArray = samples.filter(function (data) {
            return data.id == sample;
        });
        var result = resultArray[0];
        console.log(result);

// Create variables for otu_ids, otu_labels, and sample_values;
        var otu_ids = result.otu_ids;
        var otu_labels = result.otu_labels;
        var sample_values = result.sample_values;
    // console.log(otu_ids);
    // console.log(otu_labels);    
    // console.log(sample_values);


//  Build Bubble Chart
        var bubbleLayout = {
        title: {text: "<b>Bacteria Cultures Per Sample</b>"},
        hovermode: "closest",
        xaxis: { title: "<b>OTU ID</b>" },
        margin: { t: 30 },
}
//  Set Up the trace for the bubble
        var bubbleData = [
    {
        x: otu_ids,
        y: sample_values,
        text: otu_labels,
        mode: "markers",
        marker: {
            size: sample_values,
            color: otu_ids,
            colorscale: "Earth"
        }
    }
];
// Initiate Plotly Bubble Chart
    Plotly.newPlot("bubble", bubbleData, bubbleLayout);

//  Build Bar Chart
// Create yticks for the bar chart
// var yticks = id.map(sampleObj => sampleObj.id == sample);
        var yticks = otu_ids.slice(0, 10).map(function (otuID) {
        return `OTU ${otuID}`;
}).reverse()
// console.log(yticks);
// 
    var barData = [
    {
        y: yticks,
        x: sample_values.slice(0, 10).reverse(),
        text: otu_labels.slice(0, 10).reverse(),
        type: "bar",
        orientation: "h"
    }
];

    var barLayout = {
    title: {text:"<b>Top 10 Bacteria Cultures Found</b>"},
    margin: { t: 30, l: 150 },
};

    Plotly.newPlot("bar", barData, barLayout);
});

}
