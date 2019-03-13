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
    canvas_ovalo();
    canvas_play();
    objeto=document.getElementById("a_tematica");
    objeto.addEventListener("click",mostrar_section);

}

function mostrar_section(){
  var como_jugar=document.getElementById("4");
  como_jugar.style.display="block"
}

function canvas_play(){
  var canvas=document.getElementById("micanvas");
  if(canvas && canvas.getContext('2d')){
    var ctx=canvas.getContext('2d');
    if(ctx){
      var radio=5;
      var dX=(ctx.canvas.width/4)+(ctx.canvas.width/10);
      ctx.strokeStyle = "grey";
      ctx.beginPath();
      ctx.moveTo(radio+dX,0);
      ctx.lineTo(150+dX,75-radio);
      ctx.quadraticCurveTo(150+radio+dX,75,150+dX,75+radio);
      ctx.lineTo(radio+dX,150);
      ctx.quadraticCurveTo(0+dX,150,0+dX,150-radio);
      ctx.lineTo(0+dX,radio);
      ctx.quadraticCurveTo(0+dX,0,radio+dX,0);
      ctx.fillStyle = "white";
      ctx.fill();
      ctx.stroke();
      ctx.font = "175% Arial bold";
      ctx.fillStyle = "black";
      ctx.fillText("PLAY",(ctx.canvas.width/4)+((ctx.canvas.width)*1.5/10),(ctx.canvas.height/2)+((ctx.canvas.height)*0.5)/10);
    }
  }else{
    alert("esta mierda no funcioa");
  }
}
function canvas_ovalo(){
  var canvas=document.getElementById("ovalo");
  if(canvas && canvas.getContext('2d')){
    var ctx=canvas.getContext('2d');
    if(ctx){
          var centroX = ctx.canvas.width/4;//Entre cuatro porque luego hacemos el scale
					var centroY = ctx.canvas.height/2;
					var radio = ctx.canvas.height/2;

					ctx.scale(2, 1);
					ctx.beginPath();
					ctx.arc(centroX,centroY, radio, 0, 2 * Math.PI );
					ctx.strokeStyle = "red";
          ctx.fillStyle = "red";
          ctx.fill();
					ctx.stroke()
    }
  }else{
    alert("esta mierda no funcioa");
  }
}


function ver(n) {
         document.getElementById(n).style.display="block";
         }
function ocultar(n) {
         document.getElementById(n).style.display="none";
         }
