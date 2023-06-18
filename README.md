# Weather App

This is a simple weather application that allows you to check the current weather conditions for a specific city. You can enter the name of the city and click the "Submit" button to fetch and display the weather information.


## Technologies Used

- HTML
- CSS
- JavaScript

## How to Use

1. Clone or download this repository.
2. Open the `index.html` file in your web browser.

## Preview

![Weather App Preview](preview.png)

## Live Demo

Check out the live demo of the Weather App [here](https://weather-app-by-omar-alshafei.vercel.app/).

## CSS Styles

The CSS code for styling the weather app interface is located in the `style.css` file. It includes styles for the app title, input field, card layout, and responsive design for different screen sizes.

## JavaScript Code

The JavaScript code for fetching weather data from the OpenWeatherMap API and updating the app interface is located in the `app.js` file. It listens for a click event on the "Submit" button and makes a GET request to the API based on the entered city name. The response is then parsed, and the relevant weather information is displayed in the app.


## API Key

Please note that this application uses the OpenWeatherMap API to fetch weather data. The API key used in this code is a sample key and may not work. You will need to sign up on the [OpenWeatherMap website](https://openweathermap.org/) to obtain your own API key. Replace the `API_KEY` placeholder in the API URL in the JavaScript code with your own API key.

## Author

This project is created by Omar Alshafei.

```javascript
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=API_KEY')

Make sure to keep your API key secure and avoid sharing it publicly.
