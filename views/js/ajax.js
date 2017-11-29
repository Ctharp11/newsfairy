$('#input-button').on('click', function(){
    var topic = $("#topic-input").val();
    var sourceOne = $("#select-one").val();
    var sourceTwo = $("#select-two").val();

    var sources = {
        sourceOne: sourceOne,
        sourceTwo: sourceTwo
    }

    var topics = {
        topic: topic
    }
    // console.log(sources);
    // console.log(topics);

    $.post('/topic', topics);
    
    $.post('/posts', sources);
})

