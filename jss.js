imagenes=new Array(
    ['img/background1.jpg'],
    ['img/background2.jpg'],
    ['img/background3.jpg'],
    ['img/background4.jpg']
);

function rotarImagenes(){
    var index=Math.floor((Math.random()*imagenes.length));
    document.getElementById("background").style.background="url("+imagenes[index]+")";
}


window.onload=function(){
    rotarImagenes();
    setInterval(rotarImagenes,3000);

}
