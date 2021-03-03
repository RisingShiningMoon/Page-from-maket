bg = document.getElementsByClassName("bg");
console.log(bg);
window.addEventListener(`resize`, event => {
    console.log("changed");
    bg[0].style.width =  window.outerWidth + 'px';
    bg[0].style.marginLeft =  `${-(window.outerWidth/2)}px`;
  }, false);
document.addEventListener(`DOMContentLoaded`, event =>{
    console.log(window.innerHeigh);
    bg[0].style.width =  window.outerWidth + 'px';
})