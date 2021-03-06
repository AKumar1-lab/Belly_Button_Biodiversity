function init() {
    data = [{
        x: [1, 2, 3, 4, 5],
        y: [1, 2, 4, 8, 16]
    }];
    Plotly.newPlot("plot", data);
};

d3.selectAll("#dropdownMenu").on("change", updatePlotly);
function updatePlotly() {
    var dropdownMenu = d3.select("#dropdownMenu");
    var dataset = dropdownMenu.property("value");

    var xData = [1, 2, 3, 4, 5];
    var yData = [];

    if (dataset === 'dataset1') {
        yData = [1, 2, 4, 8, 16];
    };

    if (dataset === 'dataset2') {
        yData = [1, 10, 100, 1000, 10000];
    };

    var trace = {
        x: [xData],
        y: [yData],
    };
    Plotly.restyle("plot", trace);
};

init();







// d3.json("samples.json").then(function(data){
//     console.log("hello");
// });

// d3.json("samples.json").then(function(data){
//     console.log(data);
// });

//  Weekly frequency of washing
// d3.json("samples.json").then(function(data){
//     wfreq = data.metadata.map(person => person.wfreq);
//     console.log(wfreq);
// });

//  Sort data in descending order
// d3.json("samples.json").then(function(data){
//     wfreq = data.metadata.map(person =>
// person.wfreq).sort((a,b) => b - a);
//     console.log(wfreq);
// });

//  remove null values
// d3.json("samples.json").then(function(data){
//     wfreq = data.metadata.map(person =>
// person.wfreq).sort((a,b) => b - a);
//     filteredWfreq = wfreq.filter(element => element !=
// null);
//     console.log(filteredWfreq);
// });

// d3.json("samples.json").then(function(data){
//     firstPerson = data.metadata[1];
//     Object.entries(firstPerson).forEach(([key, value]) =>
//       {console.log(key + ': ' + value);});
// });

