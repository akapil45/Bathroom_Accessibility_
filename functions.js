//code functions to be loaded in the html doc here
function listout(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += i + ".  "+arr[i].name+"_______"+arr[i].latitude+" , "+arr[i].longitude+" --------------- "+arr[i].unisex+'<br>';
        }
    document.getElementById("id01").innerHTML = out;
}
