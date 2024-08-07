# Weather App

A simple web-based weather application that allows users to enter a location and retrieve the current weather conditions for that location. The app displays details such as temperature, weather description, and an icon representing the current weather.

## Features

- User input for city name
- Displays current temperature in Celsius
- Shows a description of the weather (e.g., "Sunny," "Cloudy," "Rainy")
- Displays an icon representing the current weather condition
- Error handling for invalid locations or API issues

## Technologies Used

- HTML for structuring the app
- CSS for styling and layout
- JavaScript for fetching weather data and interactivity
- OpenWeatherMap API for retrieving weather data

## Getting Started

### Prerequisites

- A modern web browser
- An OpenWeatherMap API key

### Installation

1. Clone the repository to your local machine:
    ```sh
    git clone https://github.com/yourusername/weather-app.git
    ```

2. Navigate to the project directory:
    ```sh
    cd weather-app
    ```

3. Open `index.html` in your preferred web browser.

### Setup

1. Replace `YOUR_API_KEY` in the `script.js` file with your actual OpenWeatherMap API key. You can obtain an API key by signing up at [OpenWeatherMap](https://openweathermap.org/).

    ```javascript
    const apiKey = 'YOUR_API_KEY';  // Replace with your OpenWeatherMap API key
    ```

### Usage

1. Enter the name of a city in the input field.
2. Click the "Submit" button.
3. The current weather data for the entered city will be displayed, including temperature, weather description, and an icon representing the weather condition.
4. If the city name is invalid or there is an issue with the API request, an error message will be displayed.

### File Structure

weather-app/
│
├── index.html
├── styles.css
└── script.js

### Screenshots

#### Initial View
![Initial View](screenshots/initial_view.png)

#### Weather Data Display
![Weather Data](screenshots/weather_data.png)
