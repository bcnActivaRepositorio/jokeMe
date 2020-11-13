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
            url: "http://api.icndb.com/jokes/random",
            //what kind of
            //dataType: "json",
            //you can have it also like headers
            headers:{Accept: "application/json"},
            //if thumbs up
            success: function(data) {
                //get me the joke from the object
                $('#showMe').html(data.value.joke);
            },
            //not too good, eh honey
            error: function (req, status, error) {
                //show me
                alert(`${req} ${status} ${error}`);
                
            }
        }
    );
}