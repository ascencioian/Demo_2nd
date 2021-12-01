//weather
const parkOneEl = document.getElementById('parkOne');
const parkTwoEl = document.getElementById('parkTwo');
const parkThreeEl = document.getElementById('parkThree');
const parkFourEl = document.getElementById('parkFour');


//call function 
//getParks()

function getParks (lat, lon){

    //API Keys
    let api_KeyTwo = "cd1311c819mshfff11c704f49342p101b79jsn522fd0046c5c"

    fetch(`https://opentripmap-places-v1.p.rapidapi.com/en/places/radius?lat=${lat}&lon=${lon}&radius=1000&kinds=gardens_and_parks&rapidapi-key=${api_KeyTwo}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "opentripmap-places-v1.p.rapidapi.com",
            "x-rapidapi-key": `${api_KeyTwo}`
        }
    })
    .then(res => res.json())
    .then(data => {
        // console.log(response);
        // for(i=0 ; i<= response.features.length; i++){
         
           
        //     console.log(response.features[i].properties.name)
        //     console.log(response.features[i].geometry.coordinates[0]) //long
        //     console.log(response.features[i].geometry.coordinates[1]) //lat
            
        // }
        showParkData(data)

    })
    .catch(err => {
        console.error(err);
    });
}

function showParkData(data){


    
    data.features.forEach((park, idx) => {
        if(idx == 0){
            parkOneEl.innerHTML = `
            <img src="img/nature.png" alt="weather icon" class="w-icon p-3">
            <h3 class="card-title mb-3 ret">${park.properties.name}</h3>
            <div class="other">
                <div class="temp">lat: ${park.geometry.coordinates[1]}</div>
                <div class="temp">lon: ${park.geometry.coordinates[0]}</div>  
            </div>
            <i class="bi bi-star-fill"></i>
            <form action="/content" method="POST" id="parkOneEl"> 
            <input class="d-none" type="text" name="name" placeholder="name" value="${park.properties.name}">
            <input class="d-none" type="text" name="address" placeholder="address" value="${park.geometry.coordinates[1]}, ${park.geometry.coordinates[0]}">
            <button class="btn btn-warning btn-lg mt-3 mb-3" type="submit">Bookmark</button>
            </form>
            
            `
            document.getElementById("parkOneEl").addEventListener( "submit" , function(e){
                e.submitter.classList.remove('btn-warning')
                e.submitter.classList.add('btn-success')
                e.submitter.innerHTML+= "ed!"
            })
      
        }else if( idx == 1){
            parkTwoEl.innerHTML = `
            <img src="img/nature.png" alt="weather icon" class="w-icon p-3">
            <h3 class="card-title mb-3 ret">${park.properties.name}</h3>
            <div class="other">
                <div class="temp">lat: ${park.geometry.coordinates[1]}</div>
                <div class="temp">lon: ${park.geometry.coordinates[0]}</div>  
            </div>
            <i class="bi bi-star-fill"></i>
            <form action="/content" method="POST" id="parkTwoEl"> 
            <input class="d-none" type="text" name="name" placeholder="name" value="${park.properties.name}">
            <input class="d-none" type="text" name="address" placeholder="address" value="${park.geometry.coordinates[1]}, ${park.geometry.coordinates[0]}">
            <button class="btn btn-warning btn-lg mt-3 mb-3" type="submit">Bookmark</button>
            </form>
            
            `
            document.getElementById("parkTwoEl").addEventListener( "submit" , function(e){
                e.submitter.classList.remove('btn-warning')
                e.submitter.classList.add('btn-success')
                e.submitter.innerHTML+= "ed!"
            })

        }else if( idx == 2){
            parkThreeEl.innerHTML = `
            <img src="img/nature.png" alt="weather icon" class="w-icon p-3">
            <h3 class="card-title mb-3 ret">${park.properties.name}</h3>
            <div class="other">
                <div class="temp">lat: ${park.geometry.coordinates[1]}</div>
                <div class="temp">lon: ${park.geometry.coordinates[0]}</div>  
            </div>
            <i class="bi bi-star-fill"></i>
            <form action="/content" method="POST" id="parkThreeEl"> 
            <input class="d-none" type="text" name="name" placeholder="name" value="${park.properties.name}">
            <input class="d-none" type="text" name="address" placeholder="address" value="${park.geometry.coordinates[1]}, ${park.geometry.coordinates[0]}">
            <button class="btn btn-warning btn-lg mt-3 mb-3" type="submit">Bookmark</button>
            </form>
            
            `

            document.getElementById("parkThreeEl").addEventListener( "submit" , function(e){
                e.submitter.classList.remove('btn-warning')
                e.submitter.classList.add('btn-success')
                e.submitter.innerHTML+= "ed!"
            })

        }else if( idx == 3){
            parkFourEl.innerHTML = `
            <img src="img/nature.png" alt="weather icon" class="w-icon p-3">
            <h3 class="card-title mb-3 ret">${park.properties.name}</h3>
            <div class="other">
                <div class="temp">lat: ${park.geometry.coordinates[1]}</div>
                <div class="temp">lon: ${park.geometry.coordinates[0]}</div>  
            </div>
            <i class="bi bi-star-fill"></i>
            <form action="/content" method="POST" id="parkFourEl"> 
            <input class="d-none" type="text" name="name" placeholder="name" value="${park.properties.name}">
            <input class="d-none" type="text" name="address" placeholder="address" value="${park.geometry.coordinates[1]}, ${park.geometry.coordinates[0]}">
            <button class="btn btn-warning btn-lg mt-3 mb-3" type="submit">Bookmark</button>
            </form>
            
            `

            document.getElementById("parkFourEl").addEventListener( "submit" , function(e){
                e.submitter.classList.remove('btn-warning')
                e.submitter.classList.add('btn-success')
                e.submitter.innerHTML+= "ed!"
            })

        }
    })
    
}
