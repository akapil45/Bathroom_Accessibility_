
   var x = document.getElementById("demo");
   var latitude1 = 0;
   var longitude1 = 0;
   getInitialLocation();
   function setLocation() {
       if(!isNaN(document.getElementById("userInput").value) && !isNaN(document.getElementById("userInput2").value)) {
         latitude1 = parseInt(document.getElementById("userInput").value);
         longitude1 = parseInt(document.getElementById("userInput2").value);
         initMap();
       }
       else {
           alert('Sorry, "' + document.getElementById("userInput").value + '" and "'
                + document.getElementById("userInput2").value + '" are not valid inputs.');
       }
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
     x.innerHTML = "Current Latitude: " + latitude1 +
                   "<br>Current Longitude: " + longitude1;
     initMap();
  }

var latitudeArray = [];
var longitudeArray = [];
var nameArray = [];

  function listOut() {
    var out = "<dir><h4>List of available bathrooms</h4>";
    for(var i = 0; i < bathrooms.length; i++) {
      var lat1 = bathrooms[i].latitude;
      var long1 = bathrooms[i].longitude;
      var name1 = bathrooms[i].name;
      var count = i + 1;
        out += count + ".  " + name1 +"   :   " + lat1 + " , "+long1+ '</a><br>';
        latitudeArray[latitudeArray.length] = lat1;
        longitudeArray[longitudeArray.length] = long1;
        nameArray[nameArray.length] = name1;
    }
    document.getElementById("id01").innerHTML = out;
  }

function initMap() {
    listOut();
    alert("Hello");
    var uluru = {lat:latitude1, lng:longitude1};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        icon: 'blue_markerA.png'
      });
    var infoWindow = new google.maps.InfoWindow({
      content: '<h1>Your location: </h1>'
    });
    marker.addListener('click', function() {
      infoWindow.open(map, marker);
    });

    var markers = [];
    for (var i = 0; i < latitudeArray.length; i++) {
      var one = {lat: latitudeArray[i], lng: longitudeArray[i]}
      markers[i] = new google.maps.Marker({
        position: one,
        map: map
      });
    }

    for (var s = 0; s < bathrooms.length; s++) {
      var location = bathrooms[s].name;
      var street = bathrooms[s].street;
      var city = bathrooms[s].city;
      var state = bathrooms[s].state;
      //alert(location + " " + street + " " + city + " " + state);
      var infoWindow = new google.maps.InfoWindow({
          content: location
   });
   var x = markers[0];
      x.addListener('click', function(){
        infoWindow.open(map, x);
     });

  }

}
