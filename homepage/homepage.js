const divDescrizione = document.getElementById("description");
const divTitolo = document.getElementById("title-div");
const divItalia = document.getElementById("italia");

window.addEventListener("scroll", function(){
    var offset = pageYOffset;
    divDescrizione.style.backgroundPositionY = offset * 0.4 + "px";

    console.log(offset);
})
