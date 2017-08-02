
   var x = document.getElementById("demo");
   var latitude1 = 0;
   var longitude1 = 0;
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

function initMap() {
    listOut();
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
      content: 'Your location'
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


          /*var infoWindow = new google.maps.InfoWindow({
            content: nameArray[0]
          });
          markers[0].addListener('click', function() {
            infoWindow.open(map, markers[0]);
          });*/

}
