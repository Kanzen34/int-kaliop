
document.addEventListener("DOMContentLoaded", () => {
    function parallax() {
        var $slider = document.querySelector(".header");
    
        var yPos = window.pageYOffset / $slider.dataset.speed;
        yPos = -yPos;
        
        var coords = '0% '+ yPos + 'px';
        
        $slider.style.backgroundPosition = coords;
    }
    
    window.addEventListener("scroll", function(){
        if (window.matchMedia("(min-width: 1400px)").matches) {
            parallax();	
        }
    });
});
