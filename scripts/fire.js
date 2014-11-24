var canvas=document.getElementById('can');
var ctx=canvas.getContext('2d');
canvas.width=800;
canvas.height=600;
var count=0;
var canvas_width_spacer = canvas.width/100;
var canvas_height_spacer = canvas.height/100;
var grd0=ctx.createLinearGradient(0,0,canvas.width,0);
grd0.addColorStop(0,"red");
 grd0.addColorStop(1,"white");

var grd1=ctx.createLinearGradient(0,0,canvas.width,0);
grd1.addColorStop(0,"orange");
 grd1.addColorStop(1,"white"); 
var globalID_fire;
 //color variables
 
  var grd;
var fire1 = "yellow";
var fire2="yellow";
var fire3="orange";
var outline1="orange";
var outline2="orange";
var outline3="red";
var outline4="white";
var firecounter=0;


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

function drawLines(){

count=0;
while(count<100){
  
   ctx.moveTo(count*canvas_width_spacer,0);
  ctx.lineTo(count*canvas_width_spacer,canvas.width);
  ctx.strokeStyle=grd0;
  ctx.stroke();
  
      count = 1 + count;
}
count=0;
while(count<100){
  
   ctx.moveTo(0,count*canvas_height_spacer);
  ctx.lineTo(canvas.width,count*canvas_height_spacer);
  ctx.strokeStyle=grd0;
  ctx.stroke();
  
      count = 1 + count;
}
count=0;

}

function dick(){
ctx.beginPath();
ctx.moveTo(146,300);
 ctx.bezierCurveTo(150,430,350,450,257,300);
ctx.strokeStyle="black";
ctx.lineWidth=5;
ctx.stroke();
ctx.beginPath();
ctx.moveTo(280,370);
 ctx.bezierCurveTo(286,390,332,360,278,305);
ctx.stroke();
ctx.beginPath();
ctx.beginPath();
ctx.moveTo(263,282);
 ctx.bezierCurveTo(313,229,463,219,474,211);
ctx.stroke();
ctx.beginPath();
ctx.beginPath();
ctx.moveTo(426,148);
 ctx.bezierCurveTo(452,100,508,114,535,148);
ctx.stroke();

ctx.moveTo(475,208);
 ctx.bezierCurveTo(507,214,536,214,547,190);
ctx.stroke();


ctx.beginPath();
ctx.moveTo(426,147);
 ctx.bezierCurveTo(358,160,286,167,233,234);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(430,182);
 ctx.bezierCurveTo(429,178,406,202,475,208);
ctx.stroke();
}


function fire(){

//fire
ctx.beginPath();
ctx.moveTo(530,171);
ctx.fillStyle=fire1;
 ctx.bezierCurveTo(558,198,626,211,705,144);
ctx.strokeStyle=outline1;

ctx.moveTo(706,146);
 ctx.bezierCurveTo(688,145,688,145,688,148);

ctx.moveTo(530,171);
 ctx.bezierCurveTo(546,111,538,116,706,125);

ctx.stroke();
ctx.fill();


ctx.beginPath();
ctx.moveTo(530,171);

 ctx.bezierCurveTo(558,198,626,211,705,144);

ctx.moveTo(559,160);
 ctx.bezierCurveTo(584,77,654,205,708,122);


ctx.moveTo(556,189);
 ctx.bezierCurveTo(600,208,590,230,696,166);
ctx.moveTo(696,166);
ctx.lineTo(678,166);


ctx.strokeStyle=outline2;
ctx.stroke();

ctx.beginPath();
//outline below
ctx.moveTo(530,171);
 ctx.bezierCurveTo(558,198,626,211,705,144);
ctx.lineWidth=1;
ctx.strokeStyle=outline3;

ctx.moveTo(706,146);
 ctx.bezierCurveTo(688,145,688,145,688,148);

ctx.moveTo(530,171);
 ctx.bezierCurveTo(546,111,538,116,706,125);

ctx.moveTo(559,160);
 ctx.bezierCurveTo(584,77,654,205,708,122);
ctx.stroke();


ctx.moveTo(556,189);
 ctx.bezierCurveTo(600,208,590,230,696,166);
ctx.moveTo(696,166);
ctx.lineTo(678,166);

ctx.fill()
ctx.stroke();
ctx.beginPath();
ctx.moveTo(557,167);
 ctx.bezierCurveTo(584,133,619,146,635,152);
ctx.moveTo(557,167);
 ctx.bezierCurveTo(584,196,619,146,635,152);

ctx.fillStyle=fire2;
ctx.fill()


//highlights

ctx.beginPath();
ctx.moveTo(578,194);
 ctx.bezierCurveTo(608,198,651,203,672,173);
ctx.bezierCurveTo(648,192,598,222,578,194);
ctx.fillStyle=fire3;
ctx.fill();
ctx.strokeStyle=outline4;
ctx.stroke();

ctx.moveTo(578,174);
 ctx.bezierCurveTo(586,108,621,178,655,163);
 ctx.bezierCurveTo(618,158,562,140,578,174);;
ctx.fill()
ctx.stroke();
}
//top spark
function topspark(){
ctx.beginPath();
ctx.moveTo(713,150);
 ctx.bezierCurveTo(729,132,733,165,743,127);
ctx.moveTo(713,150);
 ctx.bezierCurveTo(729,132,754,125,743,127);
ctx.lineWidth=1;
ctx.strokeStyle=outline3;
ctx.fillStyle=fire2;
ctx.fill();
ctx.stroke();
}


//bottom spark
function bottomspark(){
ctx.beginPath();
ctx.moveTo(684,191);
 ctx.bezierCurveTo(697,162,733,165,722,167);
ctx.moveTo(684,191);
 ctx.bezierCurveTo(700,187,719,165,722,167);
ctx.lineWidth=1;
ctx.strokeStyle=outline3;
ctx.fillStyle=fire2;
ctx.fill();
ctx.stroke();
}

function fireAnimation(){

if(firecounter==0){
fire1 = "yellow";
fire2="yellow";
fire3="orange";
outline1="orange";
outline2="orange";
outline3="red";
outline4="white";
topspark();
bottomspark();
fire();
}

else if(firecounter==1){
fire1 = "orange";
fire2="white";
fire3="red";
outline1="white";
outline2="red";
outline3="yellow";
outline4="orange";

fire();
topspark();
bottomspark();
}

else{
fire1 = "white";
fire2="orange";
fire3="yellow";
outline1="black";
outline2="orange";
outline3="red";
outline4="yellow";



fire();
topspark();
bottomspark();

}

firecounter= firecounter + 1 > 2 ? 0 : firecounter +1  ;
globalID_fire = window.requestNextAnimationFrame(fireAnimation);
}


drawLines();
dick();
setTimeout(function(){
$('#can').css("display","block");
fireAnimation();

 },25000),setTimeout(function(){
        window.cancelAnimationFrame(globalID_fire);
		$('#can').css("display","none");
          },42000)