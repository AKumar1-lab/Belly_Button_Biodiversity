const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));

d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0].location.latitude));
    // var topFiveCityNames = topFiveCities.map(city => city.City);
d3.json(url).then(spaceXResults =>
        console.log(spaceXResults[0].location.longitude));

d3.json(url).then(spaceXResults => console.log
    (spaceXResults.map(spaceXResults.location.latitude.longitude)));