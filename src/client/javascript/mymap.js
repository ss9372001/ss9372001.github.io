function initMap(){
    var options = {
        zoom: 13,
        center: new google.maps.LatLng(28.538,77.385)
    };
    var map = new google.maps.Map(document.getElementById('map'), options);
}