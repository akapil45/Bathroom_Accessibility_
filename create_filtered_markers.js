var bathroomList;
function check() {
$(document).ready(function(){
    $('input[type="checkbox"]').click(function(){
        if($(this).is(":checked")){
          if(document.getElementById("unisex").checked == true && document.getElementById("accessible").checked == true && document.getElementById("changing_table").checked == true) {
                    showBathroomWithAll(bathrooms);
              }
          else if(document.getElementById("unisex").checked == true && document.getElementById("accessible").checked == true) {
                    showUnisex_Accessible(bathrooms);
              }
          else if(document.getElementById("accessible").checked == true && document.getElementById("changing_table").checked == true ) {
                    showAccessible_ChangingTable(bathrooms);
              }
          else if(document.getElementById("unisex").checked == true && document.getElementById("changing_table").checked == true) {
                    showUnisex_ChangingTable(bathrooms);
                  }
          else if(document.getElementById("unisex").checked == true) {
              showUnisex(bathrooms);
            }
          else if(document.getElementById("accessible").checked == true) {
               showAccessible(bathrooms);
             }
          else if(document.getElementById("changing_table").checked == true) {
                showChangingTable(bathrooms);
              }
          }
        else if($(this).is(":not(:checked)")){
          if (document.getElementById("accessible").checked == true &&
          document.getElementById("changing_table").checked == true){
            showAccessible_ChangingTable(bathrooms);
          }
          else if (document.getElementById("accessible").checked == true &&
          document.getElementById("unisex").checked == true){
            showUnisex_Accessible(bathrooms);
          }
          else if (document.getElementById("unisex").checked == true &&
          document.getElementById("changing_table").checked == true){
            showUnisex_ChangingTable(bathrooms);
          }
          else if (document.getElementById("accessible").checked == true){
            showAccessible(bathrooms);
          }
          else if (document.getElementById("unisex").checked == true){
            showUnisex(bathrooms);
          }
          else if (document.getElementById("changing_table").checked == true){
            showChangingTable(bathrooms);
          }
          else {
            bathroomList = listout(bathrooms);
          }
        }
    });
});
}
