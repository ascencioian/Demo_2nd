//restaurants
const RestaurantOneEl = document.getElementById('RestaurantOne');
const RestaurantTwoEl = document.getElementById('RestaurantTwo');
const RestaurantThreeEl = document.getElementById('RestaurantThree');
const RestaurantFourEl = document.getElementById('RestaurantFour');

// document.querySelectorAll("button").forEach((button) => button.addEventListener("click", function(e){
//     e.preventDefault()
// }))



//call function 
//getRestaurants()

//function 
function getRestaurants (lat, lon){

    //API Keys
    let api_KeyTwo = "cd1311c819mshfff11c704f49342p101b79jsn522fd0046c5c"

    //fetch syntax
    fetch(`https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?latitude=${lat}&longitude=${lon}&limit=30&currency=USD&distance=3&open_now=rue&lunit=mi&lang=en_US&min_rating=Min%203%20`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
            "x-rapidapi-key": `${api_KeyTwo}`
        }
    })
    .then(res => res.json())
    .then(result => {
        //console.log(result)
        // for(i=0 ; i<= result.data.length; i++){
        //     let restaurantName = result.data[i].name
        //     let restaurantAddress = result.data[i].address
            
        //     let cuisineDescription = result.data[i].cuisine
        //     let priceLevel = result.data[i].price_level
        //     document.querySelector('#restaurantResults').innerHTML += `${restaurantName} is located at ${restaurantAddress}. cuisine info: ${cuisineDescription}. price level: ${priceLevel} </br>`
        // }
        showRestaurantData(result)
         
    })
    .catch(err => {
        console.log(`Error: ${err}`)
    });
}


function showRestaurantData(result){
    // let {humidity, pressure, sunrise, sunset, wind_speed} = data.current
    // console.log(humidity, '%')
    // console.log(pressure)
    // console.log(sunrise)  //in unix time code
    // console.log(sunset)  // in unix time code
    // console.log(wind_speed, 'mph')

    
    result.data.forEach((restaurant, idx) => {
        if(idx == 0){
            RestaurantOneEl.innerHTML = `
            <img src="img/restaurant.png" alt="weather icon" class="w-icon p-3">
            <h3 class="card-title mb-3 ret">${restaurant.name}</h3>
            <div>${restaurant.address}</div>
            <i class="bi bi-star-fill"></i>
            <form action="/content" method="POST" id="RestaurantOneEl"> 
            <input class="d-none" type="text" name="name" placeholder="name" value="${restaurant.name}">
            <input class="d-none" type="text" name="address" placeholder="address" value="${restaurant.address}">
            <button class="btn btn-warning btn-lg mt-3 mb-3" type="submit">Bookmark</button>
            </form>
            
            `
            document.getElementById("RestaurantOneEl").addEventListener( "submit" , function(e){
            e.submitter.classList.remove('btn-warning')
            e.submitter.classList.add('btn-success')
            e.submitter.innerHTML+= "ed!"
            })
               
        }else if( idx == 1){
            RestaurantTwoEl.innerHTML = `
            <img src="img/restaurant.png" alt="weather icon" class="w-icon p-3">
            <h3 class="card-title mb-3 ret">${restaurant.name}</h3>
            <div>${restaurant.address}</div>
            <i class="bi bi-star-fill"></i>
            <form action="/content" method="POST"  id="RestaurantTwoEl"> 
            <input class="d-none" type="text" name="name" placeholder="name" value="${restaurant.name}">
            <input class="d-none" type="text" name="address" placeholder="address" value="${restaurant.address}">
            <button class="btn btn-warning btn-lg mt-3 mb-3" type="submit">Bookmark</button>
            </form>
            
            `
            document.getElementById("RestaurantTwoEl").addEventListener( "submit" , function(e){
                e.submitter.classList.remove('btn-warning')
                e.submitter.classList.add('btn-success')
                e.submitter.innerHTML+= "ed!"
            })

        }else if( idx == 2){
            RestaurantThreeEl.innerHTML = `
            <img src="img/restaurant.png" alt="weather icon" class="w-icon p-3">
            <h3 class="card-title mb-3 ret">${restaurant.name}</h3>
            <div>${restaurant.address}</div>
            <i class="bi bi-star-fill"></i>
            <form action="/content" method="POST" id="RestaurantThreeEl"> 
            <input class="d-none" type="text" name="name" placeholder="name" value="${restaurant.name}">
            <input class="d-none" type="text" name="address" placeholder="address" value="${restaurant.address}">
            <button class="btn btn-warning btn-lg mt-3 mb-3" type="submit">Bookmark</button>
            </form>
            
            `
            document.getElementById("RestaurantThreeEl").addEventListener( "submit" , function(e){
                e.submitter.classList.remove('btn-warning')
                e.submitter.classList.add('btn-success')
                e.submitter.innerHTML+= "ed!"
            })

        }else if( idx == 3){
            RestaurantFourEl.innerHTML = `
            <img src="img/restaurant.png" alt="weather icon" class="w-icon p-3">
            <h3 class="card-title mb-3 ret">${restaurant.name}</h3>
            <div>${restaurant.address}</div>
            <i class="bi bi-star-fill"></i>
            <form action="/content" method="POST" id="RestaurantFourEl"> 
            <input class="d-none" type="text" name="name" placeholder="name" value="${restaurant.name}">
            <input class="d-none" type="text" name="address" placeholder="address" value="${restaurant.address}">
            <button class="btn btn-warning btn-lg mt-3 mb-3" type="submit">Bookmark</button>
            </form>
            `
            document.getElementById("RestaurantFourEl").addEventListener( "submit" , function(e){
                e.submitter.classList.remove('btn-warning')
                e.submitter.classList.add('btn-success')
                e.submitter.innerHTML+= "ed!"
            })
        }
    })
    
}
