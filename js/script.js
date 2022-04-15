function initMap(){
    var options = {
        zoom: 8, 
        center:{lat:41.8781,lng:-87.6298}
    }

    var map = new google.maps.Map(document.getElementById("map"), options);
}