$(document).ready(function() {

/* $(".field-part").click(function() {
    $(".field-part").css("color","blue");
}); */

var sw = 0;
var random_number1;
var turns = 0;
var parts_left = 24;
var poi = 0;
var firstinput;
var firstinput_int;
var secondinput;
var secondinput_int;
var totalagainst_int;

$(".field-part").on("click", function() {
    if(!(parts_left === 0)) {
    if (sw === 0) {
        sw = this;
        $(sw).css("color","red");
        
        random_number1 = Math.random();
        
        firstinput = $(sw).text();
        
        /*$(sw).css("background-color","white");*/
        
    } else {
        /*$(this).css("background-color")*/
       /*if ($(sw).css("background-color") == "white" && $(this).css("background-color") == "white") { */
       
            $(sw).css("color","black");
        
            secondinput = $(this).text();
            
            if(sw != this){
                
                $(sw).text(secondinput);
                $(this).text(firstinput);
       
                secondinput_int = parseInt(secondinput);
                firstinput_int = parseInt(firstinput);
            
                totalagainst_int = turns + secondinput_int;
            
                if (firstinput_int > totalagainst_int ) {
                    poi = poi + 1
                }
            
                turns = turns + 1;
            
                $("#turns-total").text(turns);
                $("#po").text(poi);
            
                if ( random_number1 < 0.5 ) {
                    $(this).hide();
                    parts_left = parts_left - 1;
                } 
            }
            
            sw = 0; 
            
            if ( parts_left === 0 ) {
                $("#game_over").text("Game over! You have won. You have won in " + turns + " turns.")
            }
    /*}*/
    }
    }
});
});