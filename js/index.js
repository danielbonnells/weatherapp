// creating some variables
var latitude;
var longitude; 
var icon;
var temp;
var units = "F";
var city = "city";

// This api gets us the lat and lon and city. We set the city.
$.getJSON("https://freegeoip.net/json/?callback=?", function(data){

  latitude = data.latitude;
  longitude = data.longitude;
  city = data.city;
  $("#mycity").html(city);

  // Using the values from the first api, this api gets us the weather data.  
  
      $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+ latitude + "&lon=" + longitude + "&APPID=e8f119ae6742c451df1ee2c6fd1e5081&units=imperial", function(data){
     
       temp = Math.floor(data.main.temp);
   
       icon = data.weather[0].icon; 
      // This inserts the temp into the html of the span 
      $("#temperatureSpan").html(temp);
      // This appends an icon to the img tag
      $("#imageicon").append("<img src='http://openweathermap.org/img/w/" + icon + ".png'>");


      })

}) 

// When the button is clicked, an if statement checks for the units value and acts accordingly
$("#degreeType").click(function(){
  
  if (units === "F") {
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+ latitude + "&lon=" + longitude + "&APPID=e8f119ae6742c451df1ee2c6fd1e5081&units=metric", function(data){
  console.log(data);
   temp = Math.floor(data.main.temp);

   icon = data.weather[0].icon; 
      
   $("#temperatureSpan").html(temp);
      
   units = "C";
      
   $("#weatherunits").html(units);    
      
}) 
  } else if (units === "C") {
       $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+ latitude + "&lon=" + longitude + "&APPID=e8f119ae6742c451df1ee2c6fd1e5081&units=imperial", function(data){
   
   temp = Math.floor(data.main.temp);
  
   icon = data.weather[0].icon; 
   
         
  
    $("#temperatureSpan").html(temp);
    
    units = "F";
  
    $("#weatherunits").html(units); 
         
    }) 
  }
    
});