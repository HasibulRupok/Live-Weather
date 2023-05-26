# Weather App

This is a simple web application that retrieves current weather information based on a given place name using the OpenWeather free API. It utilizes the latitude and longitude data provided by the API to fetch the weather details.

## Features

- **Weather Information:** Enter a place name in the search field, and the app will retrieve the current weather details for that location.
- **Temperature Unit Conversion:** The temperature is displayed in both Celsius and Fahrenheit units for convenience.
- **Responsive Design:** The web app is designed to be responsive, ensuring optimal viewing experience across various devices.

## Technologies Used

- HTML, CSS, and JavaScript for the frontend.
- OpenWeather free API for weather data retrieval.
- Fetch API for making HTTP requests to the API.
- Bootstrap for responsive design and styling.

## Usage

1. Clone the repository:

```bash
git clone <https://github.com/HasibulRupok/Live-Weather.git>
```

2. Open the project in your preferred code editor.

3. Obtain an API key from the [OpenWeather website](https://openweathermap.org/).

4. In the `weather.js` file, replace `'YOUR_API_KEY'` with your actual API key obtained from OpenWeather:

```javascript
const APIkey = 'YOUR_API_KEY';
```

5. Save the changes.

6. Open the `index.html` file in a web browser or set up a local development server to run the web app.

7. Enter a place name in the search field and click the "Search" button to retrieve the current weather information for that location.

## Demo

You can find a live demo of the Weather App [here](https://your-demo-link.com).

## License

This project is licensed under the [Creative Commons Attribution License](https://creativecommons.org/licenses/by/4.0/). You are free to download and use this application, but you must provide appropriate credit to the original authors.


## Acknowledgements

- [OpenWeather](https://openweathermap.org/) for providing the weather data API.
