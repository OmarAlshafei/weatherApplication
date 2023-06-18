var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var button = document.querySelector('.submit');
var myApi = config.MY_API_KEY;
process.env.MY_API_KEY;
button.addEventListener('click', function() {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=' + myApi)
    .then(response => response.json())
    .then(data => {
      var tempValue = data['main']['temp'];
      var nameValue = data['name'];
      var descValue = data['weather'][0]['description'];
      var fTemp = Math.round(1.8 * (tempValue - 273) + 32);
      main.innerHTML = nameValue;
      desc.innerHTML = "" + descValue;
      temp.innerHTML = fTemp + "\u00B0F";
      input.value = "";
    })
    .catch(err => alert("City Name Not Recognized!"));
});
