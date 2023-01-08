for(var i=0; i<=6;i++){
    document.querySelectorAll("button")[i].addEventListener("click", func);
}

function func(){
    
    var btn = this.innerHTML;
    make_sound(btn);
    button_flash(btn);
}

document.addEventListener("keydown",function(event){
    var key = event.key;
    make_sound(key);
    button_flash(key);
});

function make_sound(input){
    switch(input){
        case "w":{
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        }

        case "a":{
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        }
        
        case "s":{
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        }

        case "d":{
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        }

        case "j":{
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        }

        case "k":{
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        }

        case "l":{
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        }

    }
}

function button_flash(key){
    var selected = document.querySelector("."+key);
    selected.classList.add("pressed");
    setTimeout(function(){selected.classList.remove("pressed")}, 100);
}
