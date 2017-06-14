var YQL = require('yql');

var query = new YQL('select * from weather.forecast where woeid in (SELECT woeid FROM geo.places WHERE text=\'(28.304406,-16.566504)\') and u=\'c\'');

query.exec(function(err, data) {
    var location = data.query.results.channel.location;
    //var condition = data.query.results.channel.item.condition;

    console.log(data.query.results.channel.wind);//viento

    console.log(data.query.results.channel.atmosphere); //humedad

    console.log(data.query.results.channel.item.condition.temp); //temperatura

    console.log(data.query.results.channel.item.condition.text); //Nubes


    //console.log('The current weather in ' + location.city + ', ' + location.region + ' is   degrees.');
});