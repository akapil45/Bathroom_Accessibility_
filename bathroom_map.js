
   var x = document.getElementById("demo");
   var latitude1 = 0;
   var longitude1 = 0;
   function setLocation() {
       if(!isNaN(document.getElementById("userInput").value) && !isNaN(document.getElementById("userInput2").value)) {
         latitude1 = parseFloat(document.getElementById("userInput").value);
         longitude1 = parseFloat(document.getElementById("userInput2").value);
         initMap(bathrooms);
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
        zoom: 8,
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
      var one = {lat: bathroomArray[i].latitude, lng: bathroomArray[i].longitude}
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
      if(bathroomArray[s].unisex == false)  unisex = "no";
      else  unisex = "YES!";
      if(bathroomArray[s].accessible == false)  accessible = "no";
      else  accessible = "YES!";
      if(bathroomarray[s].changing_table == false)  changing_table = "no";
      else  changing_table = "YES!";
    var infoWindow = new google.maps.InfoWindow({
      content: name + "<br>" + street + " " + city + " " + state +
               "<br>Unisex: " + unisex + "<br>Wheelchair-Accessible: " +
               accessible + "<br>Changing tables available: " + changing_table
    });
    marker2.addListener('click', function() {
      infoWindow.open(map, marker2);
    });

}
