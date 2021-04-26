function menuComparsa(id){

    var element = document.getElementById(id).style;
    if(element.display == "none"){
        element.display = "block";
    }else{
        element.display = "none";
    }
}