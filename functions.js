//only lists out all the bathrooms
function listout(arr) {
    var output = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        //output += "           "+arr[i].name+", latitude: "+arr[i].latitude+" longitude: "+arr[i].longitude + '<br>';
        output += arr[i].name+"<br>----Latitude: "+arr[i].latitude+
                   " , Longitude: "+arr[i].longitude+"<br>----Unisex: "+arr[i].unisex +
                  ", Wheelchair-accessible: "+arr[i].accessible + ", Changing tables available: " +
                  arr[i].changing_table + "<br><br>";
        }
    document.getElementById("id01").innerHTML = output;
}

//prints only unisex bathrooms
function printUnisex(arr) {
  var output = "";
  var i;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].unisex == true) {
      output +="           "+arr[i].name+" --- unisex"+'<br>';
    }
  document.getElementById("id01").innerHTML = output;
  }
}

//prints only accessible bathrooms
function printAccessible(arr) {
  var output = "";
  var i;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].accessible == true) {
      output +="           "+arr[i].name+"--- accessible"+'<br>';
    }
  document.getElementById("id01").innerHTML = output;
  }
}

//prints only changing table bathrooms
function printChangingTable(arr) {
  var output = "";
  var i;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].changing_table == true) {
      output +="           "+arr[i].name+ "--- table"+'<br>';
    }
  document.getElementById("id01").innerHTML = output;
  }
}

//prints unisex & accessible bathrooms
function printUnisex_Accessible(arr) {
  var output = "";
  var i;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].unisex == true && arr[i].accessible == true) {
      output +="           "+arr[i].name+"--- unisex&accessible"+'<br>';
    }
  document.getElementById("id01").innerHTML = output;
  }
}

//prints accessible & changing table bathrooms
function printAccessible_ChangingTable(arr) {
  var output = "";
  var i;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].changing_table == true && arr[i].accessible == true) {
      output +="           "+arr[i].name+"--- accessible&table"+'<br>';
    }
  document.getElementById("id01").innerHTML = output;
  }
}

//prints unisex & changing table bathrooms
function printUnisex_ChangingTable(arr) {
  var output = "";
  var i;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].changing_table == true && arr[i].unisex == true) {
      output +="           "+arr[i].name+" --- unisex&table"+'<br>';
    }
  document.getElementById("id01").innerHTML = output;
  }
}

//prints unisex & accesible & table bathrooms
function printBathroomWithAll(arr) {
  var output = "";
  var i;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].changing_table == true && arr[i].unisex == true && arr[i].accessible == true) {
      output +="           "+arr[i].name+" --- has all"+'<br>';
    }
  document.getElementById("id01").innerHTML = output;
  }
}
