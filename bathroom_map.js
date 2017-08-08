
   var x = document.getElementById("demo");
   var latitude1 = 0;
   var longitude1 = 0;

   function setLocation(lat,lng) {
       latitude1 = lat;
       longitude1 = lng;
      initMap(bathrooms);
   }
   function getInitialLocation() {
       if (navigator.geolocation) {
           navigator.geolocation.getCurrentPosition(showPosition);
       } else {
           x.innerHTML = "Geolocation is not supported by this browser.";
       }
   }
  function showPosition(position) {
     latitude1 = position.coords.latitude;
     longitude1 = position.coords.longitude;
     initMap(bathrooms);
  }

var latitudeArray = [];
var longitudeArray = [];
var nameArray = [];

  function listOut() {
    for(var i = 0; i < bathrooms.length; i++) {
      var lat1 = bathrooms[i].latitude;
      var long1 = bathrooms[i].longitude;
      var name1 = bathrooms[i].name;
      var count = i + 1;
        latitudeArray[latitudeArray.length] = lat1;
        longitudeArray[longitudeArray.length] = long1;
        nameArray[nameArray.length] = name1;
    }
  }

function initMap(bathroomArray) {
    listOut();
    var uluru = {lat:latitude1, lng:longitude1};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        icon: 'blue_markerA.png'
      });
    var infoWindow = new google.maps.InfoWindow({
      content: 'Your location'
    });
    marker.addListener('click', function() {
      infoWindow.open(map, marker);
    });

    var markers = [];
    for (var i = 0; i < bathroomArray.length; i++) {
      var one = {lat: bathroomArray[i].latitude, lng:bathroomArray[i].longitude}
      markers[i] = new google.maps.Marker({
        position: one,
        map: map
      });
      createInfoWindow(bathroomArray,bathroomArray[i].name,markers[i], i);
    }

}
function createInfoWindow(bathroomArray,name,marker2, s) {
      var street = bathroomArray[s].street;
      var city = bathroomArray[s].city;
      var state = bathroomArray[s].state;
      var unisex1;
      var accessible1;
      var changing_table1;
      if(bathroomArray[s].unisex == false)  unisex1 = "no";
      else  unisex1 = "YES!";
      if(bathroomArray[s].accessible == false)  accessible1 = "no";
      else  accessible1 = "YES!";
      if(bathroomArray[s].changing_table == false)  changing_table1 = "no";
      else  changing_table1 = "YES!";

    var infoWindow = new google.maps.InfoWindow({
      content: name + "<br>" + s + "<br>" + street + " " + city + " " + state +
               "<br>Unisex: " + unisex1 + "<br>Wheelchair-Accessible: " +
               accessible1 + "<br>Changing tables available: " + changing_table1
    });
    marker2.addListener('click', function() {
      infoWindow.open(map, marker2);
    });

}
