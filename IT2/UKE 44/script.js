


window.onkeydown = function(event){
    const boks = document.querySelector(`div[data-code = ${event.code}]`);
    const lyd = document.querySelector(` audio[data-code = ${event.code}]`);

     lyd.play();

     boks.classList.add("spiller");

}
window.onkeyup = function (event) {
    const boks = document.querySelector(`div[data-code = ${event.code}]`);

    boks.classList.remove("spiller");
}