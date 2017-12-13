$(document).ready(function(){

/**
*vista splash
*/
 $('.spcont').delay(2000).fadeOut("slow");

/**
*ocultar contenedor de inicio
*/
$(".view2").hide();
$("#btn2").click(function(){
  $(".view2").show();
  $(".view1").hide();
});

$(".backico").click(function(){
  $(".view1").show();
    $(".view2").hide();
});



});