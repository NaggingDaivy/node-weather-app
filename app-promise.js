const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }



    })
    .help()
    .alias('help', 'h')
    .argv;


var encodedAddress = encodeURIComponent(argv.address);

var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl).then((response) => {
    if (response.data.status === 'ZERO_RESULTS')
        throw new Error('Unable to find that address');


    console.log('Address : ', response.data.results[0].formatted_address);
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/73a2eed5203701814568b9616072e821/${lat},${lng}`;

    return axios.get(weatherUrl);

}).then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log('Temperature : ', temperature);
    console.log('Apparent temperature : ', apparentTemperature);
}).catch((e) => {

    if (e.code === 'ENOTFOUND') {
        console.log('Unable to fetch to API servers.')
    } else {
        console.log(e.message)
    }

})