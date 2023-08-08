const nav_menu = document.querySelector('.nav_menu');
const bars = document.querySelector('.bars')
const i = document.querySelector('.bars i');
const open = document.querySelector('.open');
const close = document.querySelector('.close');

function mobile(){
    if(document.querySelector('.nav_menu').style.display == "inline-flex"){
        document.querySelector('.nav_menu').style.display = "none";
    }else {
        document.querySelector('.nav_menu').style.display = "inline-flex";

    }
}

document.querySelector('.bars i').addEventListener('click', mobile);

