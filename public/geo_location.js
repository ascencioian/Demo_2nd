
document.getElementById('geoButton').addEventListener('click', triggeredEventListenerThree)


//function 
function triggeredEventListenerThree (){

    
    //clears the dom
    document.querySelector('#address').innerHTML =''

    // grabs input value
    let address = document.querySelector('#address').value

    //API Keys
    let api_KeyThree = "cd1311c819mshfff11c704f49342p101b79jsn522fd0046c5c"

    //fetch syntax
    fetch(`https://google-maps-geocoding.p.rapidapi.com/geocode/json?address=${address}&language=en`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "google-maps-geocoding.p.rapidapi.com",
            "x-rapidapi-key": `${api_KeyThree}`
        }
    })
    .then(res => res.json())
    .then(result => {
        console.log(result);
        console.log(result.results[0].geometry.location.lat) //console.log latitude
        console.log(result.results[0].geometry.location.lng) //console.log longitude

        let lat = result.results[0].geometry.location.lat
        let lon = result.results[0].geometry.location.lng
        
        // call back functions for other API's
        getParks (lat, lon)
        getWeather(lat, lon)
        getRestaurants(lat, lon)
        showMap(lat, lon)
        
        
    })
    .catch(err => {
        console.log(`Error: ${err}`)
    });

    
  
}

