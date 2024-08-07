document.getElementById('weather-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const apiKey = 'a82068678af10bcdf18d1fbf7d99ff1b';  // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Location not found');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('location').textContent = `${data.name}, ${data.sys.country}`;
            document.getElementById('icon').src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
            document.getElementById('description').textContent = data.weather[0].description;
            document.getElementById('temperature').textContent = `${data.main.temp} °C`;

            document.getElementById('weather-result').style.display = 'block';
            document.getElementById('error-message').textContent = '';
        })
        .catch(error => {
            document.getElementById('error-message').textContent = error.message;
            document.getElementById('weather-result').style.display = 'none';
        });
});