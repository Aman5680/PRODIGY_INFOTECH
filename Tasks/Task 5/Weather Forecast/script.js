var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')

apik = '23e05f6b96ed322ba1396b41c646c547'

function convertion(val) {
    return (val - 273).toFixed(3)
}

btn.addEventListener('click', function() {
    // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' +inputvalue.value+'&appid='+apik)
    .then(res => res.json())

    .then(data => {
        var nameval = data['name']
        var descrip = data['weather']['0']['description']
        var temperature = data['main']['temp']
        var wndspeed = data['wind']['speed']

        city.innerHTML = `Weather of <span>${nameval}<span>`
        temp.innerHTML = `Temperature: <span>${ convertion(temperature)} C</span>`
        description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
        wind.innerHTML = `Wind Speed: <span>${wndspeed} km/h <span>`
    })

    .catch(err => alert('You entered Wrong City Name'))
})

document.addEventListener('DOMContentLoaded', function () {
    // Get the input and submit button elements
    var inputElement = document.querySelector('.inputs input[type="text"]');
    var submitButton = document.querySelector('.inputs input[type="submit"]');

    // Add an event listener to the input for the "Enter" key
    inputElement.addEventListener('keyup', function (event) {
        // Check if the pressed key is "Enter" (key code 13)
        if (event.key === 'Enter') {
            // Trigger the click event on the submit button
            submitButton.click();
        }
    });
});