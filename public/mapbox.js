function showMap(lat, lon){
    mapboxgl.accessToken = 'pk.eyJ1IjoiYXNjZW5jaW9pIiwiYSI6ImNrdzJ0NjM4bTF2ZXQzMW1xMmNuODNmbWsifQ.WXJMvGuaiVaPu358NcD-1w';
    const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [lon, lat], // starting position [lng, lat]
    zoom: 15 // starting zoom
    });

    const marker = new mapboxgl.Marker() 
    .setLngLat([lon, lat]) // starting position [lng, lat]
    .addTo(map); // add the marker to the map

    const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        marker: {
        color: 'orange'
        },
        mapboxgl: mapboxgl
    });
         
    map.addControl(geocoder);

    map.addControl(
        new MapboxDirections({
        accessToken: mapboxgl.accessToken
        }),
        'top-left'
    );

    
}


