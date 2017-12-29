const request = require('request');

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/73a2eed5203701814568b9616072e821/${lat},${lng}`,
        json: true

    }, (error, response, body) => {
        if (response.statutsCode == 400 || error)
            callback('Unable to fetch weather.');
        else {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }

    });

}


module.exports = {
    getWeather
}