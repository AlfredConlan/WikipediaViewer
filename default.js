//url to perform search
// https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?"

//url to perform random article retrieval
//https://en.wikipedia.org/wiki/Special:Random

$(document).ready(function() { 
    //window.alert( "ready!" );
    //When button is clicked, perform search
    $("#searchButton").click(function() { 
      var searchString = $("#searchBox").val();
      var searchUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchString +"&format=json&callback=?";
         $.ajax({
           type: "GET",
           url: searchUrl,
           async: false,
           dataType: "json",
           success: function (dataReturned) {
             //Clear the list
             $("#searchResults").html("");
             //Populate the list
             for (x = 0; x < dataReturned.length; x++){
                $("#searchResults").append("<li class='list-group-item'><a href = " + dataReturned[3][x] + " target='_blank'>" + dataReturned[1][x] + "<p>" + dataReturned[2][x] +"</p></li>");
             }; // end for
            }, //end success
            error: function (errorMessage) {
              window.alert("Error requesting data");
            } //end error
         }); //End ajax call
    });  //End searchBox Click
});   //End Document Ready
