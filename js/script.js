function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.8781, lng: -87.6298},
    zoom: 10,
    mapId: '684f0b988910820c'
    });
      
    const marker = new google.maps.Marker({
      position: {lat:  42.01376708919888, lng: -87.68298102057864},
      map,
      title: "home",
      });
    
      const infowindow = new google.maps.InfoWindow({
        content: "This is where I live",
      });

      marker.addListener("click", () => {
        infowindow.open(map, marker);
        });
}