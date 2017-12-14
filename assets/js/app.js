$(document).ready(function(){
  $(".view5").hide();
/**
*vista splash
*/
 $('.spcont').delay(2000).fadeOut("slow");

/**
*ocultar contenedor de la 1ra vista y mostrar la 2nda al
*apretar el botón sign up
*/
$(".view5").hide();
$(".view4").hide();
$(".view3").hide();
$(".view2").hide();
$("#btn2").click(function(){
  $(".view2").show();
  $(".view1").hide();
});
/**
*devolver a la vista anterior al apretar el botón atras
*/
$(".backico").click(function(){
  $(".view1").show();
    $(".view2").hide();
});
/**
*activa el botón NEXT solo si se ingresaron 10 dígitos(la siguiente función se
*asegura de que estos 10 digitos sean solo números)
*/
  $('#phonee').keyup(function(){
    if($(this).val().length > 9){
      $('#submitBtn').removeAttr('disabled');
    } else {
      $('#submitBtn').attr('disabled','disabled');
    }
  }).trigger('keyup');
/**
*función para validar número de teléfono, solo permite números, no deja copy pastear
*/
$(function(){
  $('.phonee').keyup(function(e) {
    if(this.value!='-')
      while(isNaN(this.value))
        this.value = this.value.split('').reverse().join('').replace(/[\D]/i,'')
      .split('').reverse().join('');
    })
  .on("cut copy paste",function(e){
    e.preventDefault();
  });
});

/**
*función que genera un número de 3 dígitos al azar y envía a la tercera vista de
*la app al aceptar el alert, además habilita el boton next de la vista 3
*si es que se ingresa el código generado en el input
*/
$(".view3").hide();
$('.code').click(function(e) {
  var yourcode = (Math.floor(Math.random() * 900) + 100);
  alert("Tu" + " " + "código" + " " + "es" + " " + "LAB" + "-" + yourcode);
  $(".view3").show();
  $(".view2").hide();
  $("#partitioned").on("keyup", function() {
  $(".next2").prop("disabled", true);
  if( $("#partitioned").val() == (yourcode)) {
  $(".next2").prop("disabled", false);
 }
});
});
/**
*devolver a la vista anterior al apretar el botón atras
*/
$(".backico2").click(function(){
  $(".view3").hide();
  $(".view2").show();
});
/*
*muestra la vista 3 y oculta las demás
*/
$(".next2").click(function(){
  $(".view3").hide();
  $(".view2").hide();
  $(".view4").show();
});
$(".back3").click(function(){
  $(".view4").hide();
  $(".view3").show();
  $(".view2").hide();
  $(".view1").hide();
});
/*
*se activa el botón next solo si se presiona el checkbox
*aceptando los terminos de servicio
*/
$(".checkbox").on("click", function() {
  $(".next3").prop("disabled", false);
});
/*
*muestra la vista 5 y oculta las demás
*/
$(".next3").click(function(){
  $(".view3").hide();
  $(".view2").hide();
  $(".view5").show();
  $('.view5').delay(3000).fadeOut("slow");
  $(".view4").hide();
  $(".view3").hide();
  $(".view2").hide();
  $(".view1").show();
});
});