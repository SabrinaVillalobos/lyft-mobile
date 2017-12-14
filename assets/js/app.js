$(document).ready(function(){

/**
*vista splash
*/
 $('.spcont').delay(2000).fadeOut("slow");

/**
*ocultar contenedor de la 1ra vista y mostrar la 2nda al
*apretar el botón sign up
*/
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
  $('.form-control').keyup(function(e) {
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
*la app al aceptar el alert
*/
$(".view3").hide();
$('.btn-block').click(function(e) {
  alert("Tu" + " " + "código" + " " + "es" + " " + "LAB" + "-" + (Math.floor(Math.random() * 900) + 100));
  $(".view3").show();
  $(".view2").hide();
});



});