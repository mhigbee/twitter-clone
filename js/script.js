/**
 * Created by matthigbee on 5/26/16.
 */

$( document ).ready(function() {
    $( "#tweet-controls").hide()
    $( "#tweet-content").click(function(){
        $('#tweet-controls').show();
        $('.tweet-compose').css("height", "5em");
    });
    $( ".tweet-compose" ).keyup(function() {
        var newCharCount = 140 - $('.tweet-compose').val().length;
        $('#char-count').html(newCharCount);
        if (newCharCount < 0){
            $('#tweet-submit').hide();
        }
        else {
            $('#tweet-submit').show();
        }
        if (newCharCount < 11 ) {
            $('#char-count').css('color','red');
        }
        else {
            $('#char-count').css('color','black');
        }
    });

    $( "#tweet-submit" ).click(function(){
        var newTweetCopy =  $(".tweet:first").clone();
        newTweetCopy.find('.tweet-text').text($(".tweet-compose").val());

        $( "#stream" ).prepend(newTweetCopy);


    });





});