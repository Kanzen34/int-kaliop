// Animation of the frozenCliff image that scroll up and down

let offset = (el) => {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}


let anim = () => {
    let journeyText = document.querySelector('.journey-texts');
    let journeyTextOffset = offset(journeyText);
    let frozenCliff = document.querySelector('.frozen-cliff');
    let frozenCliffImage = document.querySelector('.frozen-cliff .image-top');
    let frozenCliffOffset = offset(frozenCliff);
    let frozenCliffHeight = frozenCliff.offsetHeight ;
    // Update with resize
    window.addEventListener("resize", () => {
        journeyTextOffset = offset(journeyText);
        frozenCliffOffset = offset(frozenCliff);
        frozenCliffHeight = frozenCliff.offsetHeight ;
    });
    
    
    // Update with observer
    let observer = new IntersectionObserver(function (observables) {
    observables.forEach(function (observable) {
        if (observable.intersectionRatio > 0.5) {
            frozenCliff.style.top = (journeyTextOffset.top - frozenCliffOffset.top) - frozenCliffHeight + 150 + 'px';
            frozenCliffImage.style.opacity = 0;
        }else{
            frozenCliff.style.top = '0';
            frozenCliffImage.style.opacity = 1;
        }
    })
    }, {
        threshold: [0.5]
    });

    let item = document.querySelector('.journey')
    observer.observe(item)
}

document.addEventListener("DOMContentLoaded", () => {
    anim();
});


