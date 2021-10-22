
//for clicking all buttons and giving commands to them

//button press
for (i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

    function handleClick() {

        var buttonInnerHtml = this.innerHTML;
        
        sound(buttonInnerHtml);
    }

}


//keyboard press

document.addEventListener("keypress", function(event){
    sound(event.key);
})


//different case while pressing buttons
function sound(key){

    switch(key){
        case "w":
            var tom1 =  new Audio("tom-1.mp3")
            tom1.play();
            break;

        case "a":
            var tom2 =  new Audio("tom-2.mp3")
            tom2.play();
            break;

        case "s":
            var tom3 =  new Audio("tom-3.mp3")
            tom3.play();
            break;

        case "d":
            var tom4 =  new Audio("tom-4.mp3")
            tom4.play();
            break;
        
        case "j":
            var snare =  new Audio("snare.mp3")
            snare.play();
            break; 

        case "k":
            var crash =  new Audio("crash.mp3")
            crash.play();
            break;

        case "l":
            var kick =  new Audio("kick.mp3")
            kick.play();
            break; 

        default: console.log(buttonInnerHtml);
    }
}

//clicking effect
function buttonAnimation(currentKey){
  var clickedButton =  document.querySelector("." + currentKey);
  clickedButton.classList.add("pressed");
  setTimeout(function(){
      clickedButton.classList.remove("pressed");
  }, 100);
}

//hover-text
function mousehover_in(x){
    x = document.getElementById("hover-text").innerHTML="Click or press this button to play Drum";
    x.style.color = "yellow";
}

function mousehover_out(x){
    x = document.getElementById("hover-text").innerHTML="";
}