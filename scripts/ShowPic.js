
function ShowPic(whichipc){
    var source = whichipc.getAttribute("herf");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
    var text = whichipc.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;
}


function countBodyChildren(){
    var body_element = document.getElementsByTagName("body")[0];
    alert(description.firstChild.nodeValue);
}

window.onload =  countBodyChildren;