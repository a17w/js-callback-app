$.get ("https://data.sfgov.org/resource/4udc-s3pr.json", function(response) {

  var responseDiv = document.getElementById("responseDiv");

  var htmlString = "";

  for (var i = 0; i < response.length; i++){
    htmlString += "<div onclick='changeParkColor(this)'>";
    htmlString += "<h3>" + response[i].parktype + "</h3>";
    htmlString += "<p>" + response[i].parkname + "</p>";
    htmlString += "<p>" + response[i].psamanager + "</p>";
    htmlString += "<p>" + response[i].parkservicearea + "</p>";
    htmlString += "</div>";
  }

  responseDiv.innerHTML = htmlString;

  console.log(response);
});

function changeParkColor(parkDiv){
  if(parkDiv.style.color == "green") {
    parkDiv.style.color = "green";
  } else {
    parkDiv.style.color = "pink";
  }
}

function show

function changeColors() {

  setTimeout(function() {
   document.getElementById("first").style.backgroundColor = "red";

   setTimeout(function() {
     document.getElementById("second").style.backgroundColor = "blue";

     setTimeout(function() {
      document.getElementById("third").style.backgroundColor = "green";

      setTimeout(function() {
        document.getElementById("fourth").style.backgroundColor = "purple";

      }, 1000);

    }, 1000);

   }, 1000);

 }, 1000);

}
