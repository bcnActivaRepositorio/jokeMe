$(document).ready(function(){

    //all is on so user has not to wait
    generateJoke();
});

// get you lads
const TRIGGER = document.getElementById('triggerMe');

//adding you coolness
TRIGGER.addEventListener('click', generateJoke);

function generateJoke() {
    //calling json through ajax
    
    $.ajax(
        {
            //method
            type: "GET",
            //from where
            url: "https://api.chucknorris.io/jokes/random",
            //what kind of
            dataType: "json",
            //you can have it also like headers
            //headers:{Accept: "application/json"},
            //if thumbs up
            success: function(data) {
                //get me the joke from the object

                //for the IT API link
                //$('#showMe').html(data.value.joke); 

                //https secure link
                $('#showMe').html(data.value);//
            },
            //not too good, eh honey
            error: function (req, status, error) {
                //show me
                console.log(`${req} ${status} ${error}`);
                
            }
        }
    );
    //IT way
    $.getJSON( "https://api.chucknorris.io/jokes/random", "json", function(data){
        //iterate through it
        $('#showMe2').text(data.value);
        //how to place the error here?
    })
    .done(function() {
        console.log( "second success" );
      })
      .fail(function() {
        console.log( "error" );
      })
      .always(function() {
        console.log( "complete" );
      });

}