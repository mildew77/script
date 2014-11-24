var canvas=document.getElementById('can');
var ctx=canvas.getContext('2d');
canvas.width=800;
canvas.height=600;
var count=0;
var canvas_width_spacer = canvas.width/100
var grd=ctx.createLinearGradient(0,0,canvas.width,0);
grd.addColorStop(0,"red");
 grd.addColorStop(1,"white");
var grd2=ctx.createLinearGradient(0,0,canvas.width,0);
grd2.addColorStop(0,"white");
 grd2.addColorStop(1,"red");

function  windowtocanvas(canvas,x,y){
var bbox=canvas.getBoundingClientRect();
  return{
    x: x-bbox.left * (canvas.width/bbox.width),
    y: y-bbox.top * (canvas.height/bbox.height)
  
  }}
document.onmousemove= function(e){

 var loc=windowtocanvas(canvas,e.clientX,e.clientY);
  console.log("X:" + loc.x +"y:" +loc.y);
 
 
}

var timesRun=0;

var interval =setInterval(function(){
 timesRun += 1;
    if(timesRun === 3){
        clearInterval(interval);
    }



 ctx.clearRect(0,0,canvas.width,canvas.height);
count=0;
while(count<100){
  
 ctx.moveTo(count*canvas_width_spacer,0);
  ctx.lineTo(count*canvas_width_spacer,canvas.height);
  ctx.strokeStyle=grd;
  ctx.stroke();
  
  count = 1+ count;
}

setTimeout(function(){
 ctx.clearRect(0,0,canvas.width,canvas.height);
  count=0;
while(count<100){
  
 ctx.moveTo(count*canvas_width_spacer,0);
  ctx.lineTo(count*canvas_width_spacer,canvas.height);
  ctx.strokeStyle=grd2;
  ctx.stroke();
  
  count = 1+ count;
}
},1000);
},2000);