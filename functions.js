//only lists out all the bathrooms
function listout(arr) {
    var output = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        output += i + ".  "+arr[i].name+"_______"+arr[i].latitude+" , "+arr[i].longitude+ " ---  whole list --- "+'<br>';
        }
    document.getElementById("id01").innerHTML = output;
}

//shows only unisex bathrooms
function showUnisex(arr) {
  var output = "";
  var i;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].unisex == true) {
      output += i+".  "+arr[i].name+" --- unisex"+'<br>';
    }
  document.getElementById("id01").innerHTML = output;
  }
}

//shows only accessible bathrooms
function showAccessible(arr) {
  var output = "";
  var i;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].accessible == true) {
      output += i+".  "+arr[i].name+"--- accessible"+'<br>';
    }
  document.getElementById("id01").innerHTML = output;
  }
}

//shows only changing table bathrooms
function showChangingTable(arr) {
  var output = "";
  var i;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].changing_table == true) {
      output += i+".  "+arr[i].name+ "--- table"+'<br>';
    }
  document.getElementById("id01").innerHTML = output;
  }
}

//shows unisex & accessible bathrooms
function showUnisex_Accessible(arr) {
  var output = "";
  var i;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].unisex == true && arr[i].accessible == true) {
      output += i+".  "+arr[i].name+"--- unisex&accessible"+'<br>';
    }
  document.getElementById("id01").innerHTML = output;
  }
}

//shows accessible & changing table bathrooms
function showAccessible_ChangingTable(arr) {
  var output = "";
  var i;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].changing_table == true && arr[i].accessible == true) {
      output += i+".  "+arr[i].name+"--- accessible&table"+'<br>';
    }
  document.getElementById("id01").innerHTML = output;
  }
}

//shows unisex & changing table bathrooms
function showUnisex_ChangingTable(arr) {
  var output = "";
  var i;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].changing_table == true && arr[i].unisex == true) {
      output += i+".  "+arr[i].name+" --- unisex&table"+'<br>';
    }
  document.getElementById("id01").innerHTML = output;
  }
}

//shows unisex & accesible & table bathrooms
function showBathroomWithAll(arr) {
  var output = "";
  var i;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].changing_table == true && arr[i].unisex == true && arr[i].accessible == true) {
      output += i+".  "+arr[i].name+" --- has all"+'<br>';
    }
  document.getElementById("id01").innerHTML = output;
  }
}
