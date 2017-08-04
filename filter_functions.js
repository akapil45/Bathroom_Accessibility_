//only lists out all the bathrooms
function listout(arr) {
    return bathrooms;
}

//list of unisex bathrooms
function showUnisex(arr) {
  var nameArray = [];
  var latitudeArray = [];
  var longitudeArray =[];
  var bathrooms1 = [];
  var i;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].unisex == true) {
      bathrooms1.push(arr[i]);
      nameArray.push(arr[i].name);
      latitudeArray.push(arr[i].latitude);
      longitudeArray.push(arr[i].longitude);
    }
  }
  return nameArray;
}

//list of accessible bathrooms
function showAccessible(arr) {
  var nameArray = [];
  var latitudeArray = [];
  var longitudeArray =[];
  var i;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].accessible == true) {
      nameArray.push(arr[i].name);
      latitudeArray.push(arr[i].latitude);
      longitudeArray.push(arr[i].longitude);
    }
  }
}

//list of changing table bathrooms
function showChangingTable(arr) {
  var nameArray = [];
  var latitudeArray = [];
  var longitudeArray =[];
  var i;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].changing_table == true) {
      nameArray.push(arr[i].name);
      latitudeArray.push(arr[i].latitude);
      longitudeArray.push(arr[i].longitude);
    }
  }
}


//list of unisex & accessible bathrooms
function showUnisex_Accessible(arr) {
  var nameArray = [];
  var latitudeArray = [];
  var longitudeArray =[];
  var i;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].unisex == true && arr[i].accessible == true) {
      nameArray.push(arr[i].name);
      latitudeArray.push(arr[i].latitude);
      longitudeArray.push(arr[i].longitude);
    }
  }
}

//list of accessible & changing table bathrooms
function showAccessible_ChangingTable(arr) {
  var nameArray = [];
  var latitudeArray = [];
  var longitudeArray =[];
  var i;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].changing_table == true && arr[i].accessible == true) {
      nameArray.push(arr[i].name);
      latitudeArray.push(arr[i].latitude);
      longitudeArray.push(arr[i].longitude);
    }
  }
}

//list of unisex & changing table bathrooms
function showUnisex_ChangingTable(arr) {
  var nameArray = [];
  var latitudeArray = [];
  var longitudeArray =[];
  var i;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].unisex == true && arr[i].changing_table == true) {
      nameArray.push(arr[i].name);
      latitudeArray.push(arr[i].latitude);
      longitudeArray.push(arr[i].longitude);
    }
  }
}

//list of unisex & accesible & table bathrooms
function showBathroomWithAll(arr) {
  var nameArray = [];
  var latitudeArray = [];
  var longitudeArray =[];
  var i;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].unisex == true && arr[i].changing_table == true && arr[i].accessible == true) {
      nameArray.push(arr[i].name);
      latitudeArray.push(arr[i].latitude);
      longitudeArray.push(arr[i].longitude);
    }
  }
}
