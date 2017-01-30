$(document).ready(function(){
  $('button').click(function(){
  // Borrar los span 
    $('.borrar').remove();
// variables para verificar
    var nombre = $('#name').val();
    var apellido = $('#lastname').val();
    var email = $('#input-email').val();
    var passwrd = $('#input-password').val();
    var qBici = $('select').val();
    (function validoNombre(){ 
        if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)){
          $('.name-container').append('<span class="borrar" >Hola este campo es obligatorio</span>');
        } else if (/^[a-zA-Z]*$/.test(nombre) == false){
          $('.name-container').append('<span class="borrar" >Por favor ingresa sólo letras</span>');
        } else if (nombre.charAt(0).toUpperCase() !== nombre.charAt(0)){
           $('.name-container').append('<span class="borrar" >La inicial debe ser mayúscula</span>');
        }
     })();
    (function validoApellido(){ 
        if (apellido == null || apellido.length == 0 || /^\s+$/.test(apellido)){
          $('.lastname-container').append('<span class="borrar" >Hola este campo es obligatorio</span>');
          } else if (/^[a-zA-Z]*$/.test(apellido) == false){
          $('.lastname-container').append('<span class="borrar" >Por favor ingresa sólo letras</span>');
          } else if (apellido.charAt(0).toUpperCase() !== apellido.charAt(0)){
           $('.lastname-container').append('<span class="borrar" >La inicial debe ser mayúscula</span>');
          }
    })  ();
    (function validoCorreo(){
        if (email == null || email.length == 0){
          $('.email-container').append('<span class="borrar" >Hola este campo es obligatorio</span>');
        } else if (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email) != true){
          $('.email-container').append('<span class="borrar" >Hola este campo es obligatorio</span>');
        }
    }) ();
    (function validoPass(){
        if (passwrd.length == 0 ){
          $('.form-group:first').append('<span class="borrar" >Hola este campo es obligatorio</span>');      
        } else if (passwrd.length < 6){
          $('.form-group:first').append('<span class="borrar" >Hola elige una contraseña mayor a 6 caracteres</span>');  
        } else if(passwrd == 123456 || passwrd == 098754){
          $('.form-group:first').append('<span class="borrar" >Hola elige una contraseña mas segura</span>');
        }
     }) ();
    (function selectBici(){
        if( qbici == null || qbici == 0 ){
          $('.form-group:eq(1)').append('<span class="borrar" >Ya estas por terminar,por favor escoge una bici</span>');  
        }
    }) ();
  });
});
