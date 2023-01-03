  function myMap(latitude,longitude) {
    if(latitude && longitude !=null){
        var mapProp= {
      center:new google.maps.LatLng(latitude,longitude),
      zoom:10,
    };
    var map = new google.maps.Map(document.getElementById("maps"),mapProp);
    }
    else{
        latitude =25.276987  ,longitude =55.296249;
        var mapProp= {
      center:new google.maps.LatLng(latitude,longitude),
      zoom:10, 
    };
    var map = new google.maps.Map(document.getElementById("maps"),mapProp);
    }
  }
  let input;
  let city;
  function add(searchInput) {
    city = searchInput;
    $.ajax({
      method: 'GET',
      url:'https://api.api-ninjas.com/v1/geocoding?city='+city,
      headers : { 'X-Api-Key': 'DQ3ebl7/+c0jotkb+hbfvA==Exz3ZNAr0IvcPrWx'},
      contentType: 'application/json',
      success: function(result) {
        console.log(result)
        var lat=result[0]["latitude"];
        var lon=result[0]["longitude"];
        console.log(lat,lon);
        myMap(lat,lon);
      },
      error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
      }
    });
    console.log(city);
  }


 