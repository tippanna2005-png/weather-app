async function getWeather() {
    let city = document.getElementById("city").value;

    // If input is empty
    if (city === "") {
        document.getElementById("result").innerText = "Please enter a city!";
        return;
    }

    let apiKey = "e49415cc5f4dd59a41945f1bdd7b802b";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        if (data.cod == 200) {
            document.getElementById("result").innerHTML =
                "<h3>" + city + "</h3>" +
                "🌡 Temperature: " + data.main.temp + "°C <br>" +
                "🌥 Weather: " + data.weather[0].description + "<br>" +
                "💧 Humidity: " + data.main.humidity + "%<br>" +
                "<img src='https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png'>";
        } else {
            document.getElementById("result").innerText = "City not found!";
        }

    } catch (error) {
        document.getElementById("result").innerText = "Error fetching data!";
    }
}