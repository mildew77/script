






var picture = [{
  x:300,
  y:0,
  rotate:0,
}]

function kick(){

$('.competition1').css('display','none');
$('#kick_1').css('display','block');

setTimeout(function(){

$('.competition1').css('display','none');
$('#kick_2').css('display','block');



},500)


}

function joe(){
  

  var joe_move =setInterval(function(){
    
picture[0].x = picture[0].x + 40 ;
picture[0].y  = picture[0].y + 20;
picture[0].rotate = picture[0].rotate + 30  ; 
console.log(picture[0].rotate)
    if(picture[0].x > screen.width ){
      clearInterval(joe_move); 
    picture = [{
  x:300,
  y:0,
  rotate:0,
}]
$('.competition').css('display','none');
      
    }    
$('.competition').css('display','none');
$('#joe').css('display','block');
$('#joe').css('left',picture[0].x + "px" );
$('#joe').css('bottom',picture[0].y + "px" );
$('#joe').css('-moz-transform','rotate(' + picture[0].rotate +  'deg)');
$('#joe').css('transform','rotate(' + picture[0].rotate +  'deg)');
$('#joe').css('-webkit-transform','rotate(' + picture[0].rotate +  'deg)');
$('#joe').css('-o-transform','rotate(' + picture[0].rotate +  'deg)');
$('#joe').css('rotate(' + picture[0].rotate +  'deg)');


  },100)  
  
}


function mdg(){
  

  var mdg_move =setInterval(function(){
    
picture[0].x = picture[0].x + 40 ;
picture[0].y  = picture[0].y + 20;
picture[0].rotate = picture[0].rotate + 30  ; 
console.log(picture[0].rotate)
    if(picture[0].x > screen.width ){
      clearInterval(mdg_move); 
    picture = [{
  x:300,
  y:0,
  rotate:0,
}]
$('.competition').css('display','none');
      
    }    
$('.competition').css('display','none');
$('#mdg').css('display','block');
$('#mdg').css('left',picture[0].x + "px" );
$('#mdg').css('bottom',picture[0].y + "px" );
$('#mdg').css('-moz-transform','rotate(' + picture[0].rotate +  'deg)');
$('#mdg').css('transform','rotate(' + picture[0].rotate +  'deg)');
$('#mdg').css('-webkit-transform','rotate(' + picture[0].rotate +  'deg)');
$('#mdg').css('-o-transform','rotate(' + picture[0].rotate +  'deg)');
$('#mdg').css('rotate(' + picture[0].rotate +  'deg)');


  },100)  
  
}

function lincoln(){
  

  var lincoln_move =setInterval(function(){
    
picture[0].x = picture[0].x + 40 ;
picture[0].y  = picture[0].y + 20;
picture[0].rotate = picture[0].rotate + 30  ; 
console.log(picture[0].rotate)
    if(picture[0].x > screen.width ){
      clearInterval(lincoln_move); 
    picture = [{
  x:300,
  y:0,
  rotate:0,
}]
$('.competition').css('display','none');
      
     
    }    
$('.competition').css('display','none');
$('#lincoln').css('display','block');
$('#lincoln').css('left',picture[0].x + "px" );
$('#lincoln').css('bottom',picture[0].y + "px" );
$('#lincoln').css('-moz-transform','rotate(' + picture[0].rotate +  'deg)');
$('#lincoln').css('transform','rotate(' + picture[0].rotate +  'deg)');
$('#lincoln').css('-webkit-transform','rotate(' + picture[0].rotate +  'deg)');
$('#lincoln').css('-o-transform','rotate(' + picture[0].rotate +  'deg)');
$('#lincoln').css('rotate(' + picture[0].rotate +  'deg)');


  },100)  
  
}

kick();
setTimeout(function(){
joe();
},530);