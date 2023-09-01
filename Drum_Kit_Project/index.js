// anonymous funciton declaration
// document.querySelector(".a").addEventListener("click", function(){
//     alert("I got clicked anonymously");
// });

for(var i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
// if function is called with parentheses then it will pop up immediately without the button being clicked i.e handleClick()
}

//detecting button click event
function handleClick(){
   var buttonInnerHTML = this.innerHTML;
   makeSound(buttonInnerHTML);
   buttonAnimation(buttonInnerHTML);
}

//detecting keyboard focus event
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    //using the key property of the event object
    buttonAnimation(event.key);
});

function makeSound(key){
    switch(key){
        case "w":
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;
        default:console.log("buttonInnerHTML");
    }
}


function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    },100);
}