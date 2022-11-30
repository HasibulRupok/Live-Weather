const APIkey = "775f29948015fe62bf670848aca552ca";
const limit = 1;

document.getElementById("searchButton").addEventListener("click", function () {
    const location = document.getElementById("inputField").value;
    document.getElementById("inputField").value = "";
    if (location == "") {
        document.getElementById("errorDiv").style.visibility = "visible";
        return;
    }
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=${limit}&appid=${APIkey}`;
    fetch(url)
        .then(res => res.json())
        .then(data => loadWeatherInfo(data[0].lat, data[0].lon, data[0].name))
        .catch(error => {
            document.getElementById("errorDiv").style.visibility = "visible";
            return;
        })
});

const loadWeatherInfo = async (lat, lon, city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        showWeatherInfo(data, city);
    }
    catch (error) {
        console.log("Can not load the weather info");
        console.log(error);
    }

}

const showWeatherInfo = (weather, city) => {
    document.getElementById("errorDiv").style.visibility = "hidden";
    const weatherContainer = document.getElementById("weatherContainer");
    const kelvin = weather.main.temp - 273.15;
    weatherContainer.innerHTML = `
        <h1>${city}</h1>
        <h3>${kelvin.toFixed(2)}</h3>
        <p>${weather.weather[0].main}</p>
    `;
}
