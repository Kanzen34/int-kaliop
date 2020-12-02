

document.addEventListener("DOMContentLoaded", () => {

    let triggers = document.querySelectorAll('.pop-up-btn');
    let overlay = document.querySelector('.pop-up-overlay');
    let panel = document.querySelector('.pop-up-panel');
    let body = document.querySelector('body');
    let active = false;
    
    triggers.forEach((item) => {
        item.addEventListener("click", () => {
            if(!active){
                overlay.classList.add('visible');
                panel.classList.add('visible');
                overlay.classList.add('active');
                panel.classList.add('active');
                body.classList.add('popup-visible');
                active = true;
                
            }else{
                overlay.classList.remove('active');
                panel.classList.remove('active');
                overlay.classList.remove('visible');
                panel.classList.remove('visible');
                body.classList.remove('popup-visible');
                active = false;
            }
    
        });
    });
    
    overlay.addEventListener("click", () => {
        if(!active){
            overlay.classList.add('visible');
            panel.classList.add('visible');
            overlay.classList.add('active');
            panel.classList.add('active');
            body.classList.add('popup-visible');
            active = true;
        }else{
            overlay.classList.remove('active');
            panel.classList.remove('active');
            overlay.classList.remove('visible');
            panel.classList.remove('visible');
            body.classList.remove('popup-visible');
            active = false;
        }

    });
    

});