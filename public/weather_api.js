//weather
const currentTempEl = document.getElementById('current-temp');
const dayTwoTempEl = document.getElementById('dayTwo-temp');
const dayThreeTempEl = document.getElementById('dayThree-temp');
const dayFourTempEl = document.getElementById('dayFour-temp');


//call function 
//getWeather()

function getWeather (lat, lon){

    //interface
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=imperial&appid=4bfd65b4b2682bd239ed32890bf9b0e4`
    //Fetch Syntax
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        showWeatherData(data) 
        
    })
    .catch(err => {
        console.log(`Error: ${err}`)

    });
}

function showWeatherData(data){
    // let {humidity, pressure, sunrise, sunset, wind_speed} = data.current
    // console.log(humidity, '%')
    // console.log(pressure)
    // console.log(sunrise)  //in unix time code
    // console.log(sunset)  // in unix time code
    // console.log(wind_speed, 'mph')

    
    data.daily.forEach((day, idx) => {
        if(idx == 0){
            currentTempEl.innerHTML = `
            <img src="http://openweathermap.org/img/wn//${day.weather[0].icon}@4x.png" alt="weather icon" class="w-icon">
            <div class="other">
                <div class="day">${window.moment(day.dt*1000).format('dddd')}</div>
                <div class="temp">Day - ${day.temp.day}&#176;F</div>
                <div class="temp">Night - ${day.temp.night}&#176;F</div>
                
            </div>
            
            `
        }else if( idx == 1){
            dayTwoTempEl.innerHTML = `
            <div class="weather-forecast-item">
                <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png" alt="weather icon" class="w-icon">
                <div class="day">${window.moment(day.dt*1000).format('ddd')}</div>
                <div class="temp">Day - ${day.temp.day}&#176;F</div>
                <div class="temp">Night - ${day.temp.night}&#176;F</div>
                
            </div>
            
            `
        }else if( idx == 2){
            dayThreeTempEl.innerHTML = `
            <div class="weather-forecast-item">
                <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png" alt="weather icon" class="w-icon">
                <div class="day">${window.moment(day.dt*1000).format('ddd')}</div>
                <div class="temp">Day - ${day.temp.day}&#176;F</div>
                <div class="temp">Night - ${day.temp.night}&#176;F</div>
               
            </div>
            
            `
        }else if( idx == 3){
            dayFourTempEl.innerHTML = `
            <div class="weather-forecast-item">
                <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png" alt="weather icon" class="w-icon">
                <div class="day">${window.moment(day.dt*1000).format('ddd')}</div>
                <div class="temp">Day - ${day.temp.day}&#176;F</div>
                <div class="temp">Night - ${day.temp.night}&#176;F</div>
                
            </div>
            
            `
        }
    })
    
}
