var mykey = apiKey;
var topicInput;
var sourceId1;
var sourceId2;
// Getting user input

var input = document.querySelector('input');
var button = document.getElementById('input-button');

// Reset button clears topinInput
var reset = document.getElementById('reset');
reset.addEventListener('click', function(){
    topicInput = '';
})


// Grabs value of input (optional topic) and assigns to global scope
button.addEventListener("click", function(){
    event.preventDefault();
    topicInput = input.value;
})

// AJAX request for API to put data into drop down. Selected new source passed into right or left functions
var sourceUrl = 'https://newsapi.org/v1/sources';
$.ajax({
    url: sourceUrl,
    method: 'GET'
}).done(function(response){
    for (var i = 0; i < response.sources.length; i++){
       var id = response.sources[i].id;
       var place = response.sources[i].name;
       $('.select').append('<option value=" '+ id + '" class="option">' + place + '</option>')
    }    

    var e = document.getElementById('select-one'); 
    var f = document.getElementById('select-two');
    $(e).on('change', function(){
        $('#first').empty();
        var checked1 = this.options;
        for (var i = 0; i < checked1.length; i ++){
            if (checked1[i].selected === true) {
                left(checked1[i].value);
            }
        }
    })
    $(f).on('change', function(){
        $('#second').empty();
        var checked2 = this.options;
        for (var i = 0; i < checked2.length; i ++){
            if (checked2[i].selected === true) {
                right(checked2[i].value);
            }
        }
    })
})

function left (checked){

    var noWhiteSpace = checked.replace(/\s/g, '');
    var checkUrl = "https://newsapi.org/v1/articles?source=" + noWhiteSpace + "&apiKey=" + mykey;
    console.log("left checked", checked);
    console.log("topicInput", topicInput);
    $.ajax({
        url: checkUrl,
        method: "GET"
    }).done(function(response){
        var articles = response.articles;
        for (var i = 0; i < articles.length; i++) {
            console.log(articles[i]);
            var title = articles[i].title;
            console.log(title);
            var author = articles[i].author;
            console.log(author);
            var image = articles[i].urlToImage;
            console.log(image);
            var description = articles[i].description;;
            console.log(description);
            var published = articles[i].publishedAt;
            console.log(published)
            var url = articles[i].url;
            console.log(url);
            $('#first').append(
                "<div>" + title + "</div>",
                "<div>" + author + "</div>",
                "<div class='img-dynamic'>" + "<img src='" + image + "'></div>",
                "<div>" + description + "</div>",
                "<div>" + published + "</div>",
                "<div>" + url + "</div>",
            )
        }

    })
}

function right(checked){
    var noWhiteSpace = checked.replace(/\s/g, '');
    var checkUrl = "https://newsapi.org/v1/articles?source=" + noWhiteSpace + "&apiKey=" + mykey;
    console.log("right checked", checked);
    console.log("topicInput", topicInput);
    $.ajax({
        url: checkUrl,
        method: "GET"
    }).done(function(response){
        var articles = response.articles;
        for (var i = 0; i < articles.length; i++) {
            console.log(articles[i]);
            var title = articles[i].title;
            console.log(title);
            var author = articles[i].author;
            console.log(author);
            var image = articles[i].urlToImage;
            console.log(image);
            var description = articles[i].description;;
            console.log(description);
            var published = articles[i].publishedAt;
            console.log(published)
            var url = articles[i].url;
            console.log(url);
            $('#second').append(
                "<div>" + title + "</div>",
                "<div>" + author + "</div>",
                "<div class='img-dynamic'>" + "<img src='" + image + "'></div>",
                "<div>" + description + "</div>",
                "<div>" + published + "</div>",
                "<div>" + url + "</div>",
            )
        }
    })
}









