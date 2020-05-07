const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoicjR1bDkwIiwiYSI6ImNrOWtidHFteTF0amMzZW52ODkxamNwbTAifQ.XrTBFS0OGrGsC7zHC2FkJw&limit=1'

    request({ url, json: true }, (error, { body }) => {
        if (error)
            callback('Unable to connect to location services')
        else if (body.features.length === 0) {
            callback('Unable to fetch geodata for that location.', undefined)
        }
        else {
            callback(undefined, {
                location: body.features[0].place_name,
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0]
            })
            //console.log('Latitude ' + coordinates[1] + ' Longitude ' + coordinates[0])
        }
    })
}

module.exports = geocode
