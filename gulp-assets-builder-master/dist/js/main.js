let offset=e=>{var t=e.getBoundingClientRect(),o=window.pageXOffset||document.documentElement.scrollLeft,s=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+s,left:t.left+o}},anim=()=>{let e=document.querySelector(".journey-texts"),t=offset(e),o=document.querySelector(".frozen-cliff"),s=offset(o),n=o.offsetHeight;window.addEventListener("resize",(()=>{t=offset(e),s=offset(o),n=o.offsetHeight}));let l=new IntersectionObserver((function(e){e.forEach((function(e){e.intersectionRatio>.5?o.style.top=t.top-s.top-n+150+"px":o.style.top="0"}))}),{threshold:[.5]}),i=document.querySelector(".journey");l.observe(i)};document.addEventListener("DOMContentLoaded",(()=>{anim()}));let triggers=document.querySelectorAll(".pop-up-btn, .pop-up-overlay"),overlay=document.querySelector(".pop-up-overlay"),panel=document.querySelector(".pop-up-panel"),body=document.querySelector("body"),active=!1;function showElements(){overlay.classList.add("visible"),overlay.classList.add("active"),panel.classList.add("visible"),panel.classList.add("active"),body.classList.add("popup-visible"),active=!0}function hideElements(){overlay.classList.remove("visible"),overlay.classList.remove("active"),panel.classList.remove("visible"),panel.classList.remove("active"),body.classList.remove("popup-visible"),active=!1}document.addEventListener("DOMContentLoaded",(()=>{triggers.forEach((e=>{e.addEventListener("click",(()=>{active?hideElements():showElements()}))}))}));
//# sourceMappingURL=main.js.map
