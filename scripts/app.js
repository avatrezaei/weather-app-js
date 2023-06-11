document.getElementById('searchButton').addEventListener('click', () => {
    let cityName = document.getElementById('searchBox').value;
    getWeatherData(cityName);
});

function getWeatherData(city) {
    let apiKey = '02d5a83f0206421e3e7f5d0d26bf3351';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('cityName').innerText = data.name;
            document.getElementById('weatherData').innerText = `Temperature: ${data.main.temp}K, Weather: ${data.weather[0].main}`;
        })
        .catch(error => {
            console.log(error);
        });
}
