function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.8781, lng: -87.6298},
    zoom: 10,
    mapId: '684f0b988910820c'
    });
    
    const markers = [  
      [
        "home",
        42.012915866034945,
        -87.68261543069347
      ],  
      [
        "school", 
        41.835012030589525,
        -87.62708876535238
      ],  
      [
        "favorite restraunt",
        42.00677597210306, 
        -87.66064518232024      
    ]  
];
    for (let i = 0; i<markers.length; i++) {
        const currMarker = markers[i];

        const marker = new google.maps.Marker({
            position: {lat: currMarker[1], lng: currMarker[2]},
            map,
            title: currMarker[0],
            });
            
            const infowindow = new google.maps.InfoWindow({
                content: currMarker[0],
            });
        
            marker.addListener("click", () => {
                infowindow.open(map, marker);
            }); 
    }

}