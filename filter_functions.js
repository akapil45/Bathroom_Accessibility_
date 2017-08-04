//only lists out all the bathrooms
function listout(arr) {
    alert("FILTER_FUNCTIONS");
    return bathrooms;
}

//list of unisex bathrooms
function showUnisex(arr) {
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
  return bathrooms1;
}

//list of accessible bathrooms
function showAccessible(arr) {
  var latitudeArray = [];
  var longitudeArray =[];
  var bathrooms1 = [];
  var i;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].accessible == true) {
      bathrooms1.push(arr[i]);
      nameArray.push(arr[i].name);
      latitudeArray.push(arr[i].latitude);
      longitudeArray.push(arr[i].longitude);
    }
  }
  return bathrooms1;
}

//list of changing table bathrooms
function showChangingTable(arr) {
  var latitudeArray = [];
  var longitudeArray =[];
  var bathrooms1 = [];
  var i;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].changing_table == true) {
      bathrooms1.push(arr[i]);
      nameArray.push(arr[i].name);
      latitudeArray.push(arr[i].latitude);
      longitudeArray.push(arr[i].longitude);
    }
  }
  return bathrooms1;
}


//list of unisex & accessible bathrooms
function showUnisex_Accessible(arr) {
  var latitudeArray = [];
  var longitudeArray =[];
  var bathrooms1 = [];
  var i;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].unisex == true && arr[i].accessible) {
      bathrooms1.push(arr[i]);
      nameArray.push(arr[i].name);
      latitudeArray.push(arr[i].latitude);
      longitudeArray.push(arr[i].longitude);
    }
  }
  return bathrooms1;
}

//list of accessible & changing table bathrooms
function showAccessible_ChangingTable(arr) {
  var latitudeArray = [];
  var longitudeArray =[];
  var bathrooms1 = [];
  var i;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].changing_table == true && arr[i].accessible) {
      bathrooms1.push(arr[i]);
      nameArray.push(arr[i].name);
      latitudeArray.push(arr[i].latitude);
      longitudeArray.push(arr[i].longitude);
    }
  }
  return bathrooms1;
}

//list of unisex & changing table bathrooms
function showUnisex_ChangingTable(arr) {
  var latitudeArray = [];
  var longitudeArray =[];
  var bathrooms1 = [];
  var i;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].unisex == true && arr[i].changing_table) {
      bathrooms1.push(arr[i]);
      nameArray.push(arr[i].name);
      latitudeArray.push(arr[i].latitude);
      longitudeArray.push(arr[i].longitude);
    }
  }
  return bathrooms1;
}

//list of unisex & accesible & table bathrooms
function showBathroomWithAll(arr) {
  var latitudeArray = [];
  var longitudeArray =[];
  var bathrooms1 = [];
  var i;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].unisex == true && arr[i].accessible && arr[i].changing_table) {
      bathrooms1.push(arr[i]);
      nameArray.push(arr[i].name);
      latitudeArray.push(arr[i].latitude);
      longitudeArray.push(arr[i].longitude);
    }
  }
  return bathrooms1;
}
