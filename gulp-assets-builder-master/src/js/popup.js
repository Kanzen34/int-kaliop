let triggers = document.querySelectorAll('.pop-up-btn, .pop-up-overlay');
let overlay = document.querySelector('.pop-up-overlay');
let panel = document.querySelector('.pop-up-panel');
let body = document.querySelector('body');
let active = false;


function showElements(){
    overlay.classList.add('visible');
    overlay.classList.add('active');
    panel.classList.add('visible');
    panel.classList.add('active');
    body.classList.add('popup-visible');
    active = true;
}
function hideElements(){
    overlay.classList.remove('active');
    overlay.classList.remove('visible');
    panel.classList.remove('visible');
    panel.classList.remove('active');
    body.classList.remove('popup-visible');
    active = false;
}

// Hide popup when Esc key is typed
document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
        hideElements();
    }
};

document.addEventListener("DOMContentLoaded", () => {
    triggers.forEach((item) => {
        item.addEventListener("click", () => {
            if(!active){
                showElements();
            }else{
                hideElements();
            }
        });
    });
});