const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=959eaf8d18d076fc32cd61c8bc711056&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true }, (error, { body }) => {
        if (error)
            callback('Unable to connect to weather service.')
        else if (body.error) {
            callback('Unable to find location')
        }
        else {
            const current = body.current
            callback(undefined, current.weather_descriptions[0] + '. It currently is ' + current.temperature + ' degrees out. It feels like ' + current.feelslike + ' degrees out. Humidity is: ' + current.humidity + '%')
        }
    })
}

module.exports = forecast
