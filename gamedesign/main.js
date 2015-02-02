"use strict";
var myDice = new Dice();

var result;

function Dice() {

    var sides = [
        ["images/dice/d1.gif", 1],
        ["images/dice/d2.gif", 2],
        ["images/dice/d3.gif", 3],
        ["images/dice/d4.gif", 4],
        ["images/dice/d5.gif", 5],
        ["images/dice/d6.gif", 6]
    ];

    this.roll = function() {
        var rollResult = Math.floor(Math.random() * 6);
        return sides[rollResult];
    };

}
function main () 

{
    document.getElementById('terning').addEventListener("click", function (){
        result = myDice.roll();
        document.getElementById("dice").src = result[0];
        
     })
};

window.addEventListener("DOMContentLoaded", main);

$(function() {
    var position;
    // alert(position);//
    
    $(document).keydown(function(e) {
        //alert(e.keyCode);//

        position = $("#playerImage").position();
        
        switch (e.keyCode)
        
        {
            case 65: // Left //
                $("#playerImage").css("left", position.left - 90 + "px");
                break;
            
            case 68: // Right //
                $("#playerImage").css("left", position.left + 75 + "px");
                break;

            case 83: // Down//
                $("#playerImage").css("top", position.top - 700 + "px");
                break;

            case 87: // Up  //
                $("#playerImage").css("top", position.top - 910 + "px");
                break;

            
        }

    }); 
});
