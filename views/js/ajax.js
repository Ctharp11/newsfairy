$('#input-button').on('click', function(){
    var topic = $("#topic-input").val();
    var sourceOne = $("#select-one").val().trim();
    var sourceTwo = $("#select-two").val().trim();

    var news = {
        topic: topic,
        sourceOne: sourceOne,
        sourceTwo: sourceTwo
    }

    $.post('/posts', news);
    
})

