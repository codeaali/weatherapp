function populate(weatherdata) {
    let weather = weatherdata.weather[0].main
    let tempr = Math.ceil(weatherdata.main.temp)
    let realfeel = Math.ceil(weatherdata.main.feels_like)
    let description = weatherdata.weather[0].description
    let iconcode = weatherdata.weather[0].icon
    let windspeed  = weatherdata.wind.speed
    let windgust = weatherdata.wind.gust
    let humidity = Math.ceil(weatherdata.main.humidity)
    let city_name = city.value
    
  
        local.innerHTML = `Current Weather <b>${weather}</b`
        temp.innerHTML = `<h1 style="font-size:120px;font-family: Arial, Helvetica, sans-serif;">${tempr}&deg;<span style="color:grey;font-size:40px;margin-left:-40px;font-weight:200">C</span></h1>`
        nav_temp.innerHTML = `${tempr}&deg;C`
        feel.innerHTML = `Feels like <b>${realfeel}&deg;C</b> `
        desc.innerHTML =  description
        icon.innerHTML = `<img style="-webkit-user-select: none;margin: auto;background-color: rgb(157, 161, 143);transition: background-color 300ms;" src="https://openweathermap.org/img/wn/${iconcode}@2x.png" alt="">`
        //icon.innerHTML = ` <img src="https://openweathermap.org/img/wn/${iconcode}@2x.png" alt="">`
        wind.innerHTML = `Wind <b>NW ${windspeed} Km/h</b>`
        if(windgust == undefined){
            gust.innerHTML = `<p>Wind Gusts <span style="color:red">Not Available</span></p>`
        }else{
            
            gust.innerHTML = `Wind Gusts <b>${windgust} Km/h</b>`
        }
       
        humid.innerHTML = `Humidity <b>${humidity}</b>`
        header_city.innerHTML = city_name

}

function fetchWeather() {
    let city_name = city.value
   // let api_key = "1f575b01db5738c39e1fb949af11efe0"
    //alert(country_name)
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=1f575b01db5738c39e1fb949af11efe0&units=metric`
    //window.location.href = url

    fetch(url).then(res => res.json()).then(data => populate(data))
}

