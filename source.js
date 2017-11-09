var mykey = apiKey;

var sourceUrl = 'https://newsapi.org/v1/sources';
$.ajax({
    url: sourceUrl,
    method: 'GET'
}).done(function(response){
    for (var i = 0; i < response.sources.length; i++){
       var description = response.sources[i].description;
       var place = response.sources[i].name;
       $('#sources').append("<div>" + "<h4>" + place + "</h4>" + "<i>" + description + "</i>" + "</div>" + "<hr>" )
    }
}); 