var canvas=document.getElementById('can');
var ctx=canvas.getContext('2d');
canvas.width=800;
canvas.height=400;
var dist_spacing=600/80;
var stdev_spacing=600/8;
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

function normdist(x,mu,stdev){

return (1/(Math.sqrt(Math.PI * stdev *2 ))) * Math.exp(((x-mu)^2)/(2*(stdev^2))*-1)
}




var distcount=0;
while(distcount<81){
  ctx.moveTo(100 + distcount*dist_spacing,350);
  ctx.lineTo(100 + distcount*dist_spacing,100);
  ctx.strokeStyle="red";
  ctx.stroke();
 distcount++ 
}

ctx.beginPath();
ctx.moveTo(400,100);
ctx.lineTo(400,350);
ctx.stroke();

ctx.moveTo(100,350);
ctx.lineTo(700,350);
ctx.strokeStyle="black";
ctx.stroke();

var stddiv_count=-4;
var stddiv_label_count=0;

while(stddiv_count<5){
ctx.fillText(stddiv_count,98 + stdev_spacing * stddiv_label_count,375);
  stddiv_count ++;
 stddiv_label_count ++;
}