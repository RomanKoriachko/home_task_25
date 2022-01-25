let city = prompt("Введите название города?");
// if(city == ) {
//     alert("Такого города не существкет");
// }
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`)
.then((res) => res.json())
.then((data) => {
    let weatherImg = data.weather[0].icon;
    let temp = data.main.temp;
    let pressure = data.main.pressure;
    let humidity = data.main.humidity;
    let description = data.weather[0].description;
    let speed = data.wind.speed;
    let deg = data.wind.deg;
    
    let mainContent = document.querySelector(".content");
    let img = document.querySelector(".icon-img");
    mainContent.innerHTML = `
    <div class="left">
                <div class="pressure">Pressure: ${pressure} hPa</div>
                <div class="humidity">Humidity: ${humidity}%</div>
                <div class="speed">Speed of wind: ${speed} km/h</div>
                <div class="deg">Degrees: ${deg}°</div>
            </div>
            <div class="right">
                <div class="icon"><img alt="" class="icon-img" src="http://openweathermap.org/img/w/${weatherImg}.png"></div>
                <div class="description">${description}</div>
                <div class="temp">Temperature: ${Math.round(temp)}°С</div>
            </div>
    `

});