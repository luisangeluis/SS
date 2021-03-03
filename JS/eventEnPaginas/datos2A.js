$(document).ready(function(){

    const btnSlideInvert=document.querySelectorAll('.btn-slide-invert');
    //CAMPO EMAIL
    const email = document.querySelector('#email');
    //BTN CONFIRMAR
    const confirmar = document.querySelector('#confirmar');
    //INPUT FECHA
    const fechaNacimiento =document.querySelector('#fecha-nacimiento');
    //INPUT NOMBRE
    const nombre = document.querySelector('#nombre');
    //INPUT APELLIDO PATERNO
    const paterno = document.querySelector('#apellido-paterno'); 

    //AJUSTAR FOOTER HASTA ABAJO
    ajustarFooter();
    //EVENTO PARA AJUSTAR FOOTER
    $(window).on({
        resize: function () {

            ajustarFooter();
        }
    })
    //PANEL INVERTIDO
    for(let x=0; x<btnSlideInvert.length;x++){
        $(btnSlideInvert).on({
            click: function(){
                expandirPanelInvert(btnSlideInvert[x],450);

            }
        });
    }
    //FUNCION PARA VALIDAR CORREO
    $(email).on({
        focusout:()=>{
            //alert("hola");

            if(!validarCorreo(email.value)){
                formatoAlerta("correo no valido");
                email.value="";
            }
        }
    });
    //VALIDA CAMPO NOMBRE
    $(nombre).on({
        focusout:()=>{
            //alert("hola");

            if(nombre.value==""){
                formatoAlerta("Nombre no valido");
                nombre.value="";
            }
        }
    });
    //VALIDA CAMPO APELLIDO PATERNO
    $(paterno).on({
        focusout:()=>{
            //alert("hola");

            if(paterno.value==""){
                formatoAlerta("Apellido paterno no valido");
                paterno.value="";
            }
        }
    });

    //VALIDAD NOMBRE APELLIDO Y CORREO
    $(confirmar).on({
        click:(e)=>{
            let mensajesError = [];

            if(nombre.value=="" ||nombre.value==null){
                e.preventDefault();
                mensajesError.push('Ingresa tu nombre');

            }

            if(paterno.value==""|| paterno.value==null){
                e.preventDefault();

                mensajesError.push('Ingresa tu apellido paterno');

            }
            if(email.value=="" || email.value==null){
                e.preventDefault();

                mensajesError.push('Ingresa tu correo electronico');

            }
            if(fechaNacimiento.value=="" || fechaNacimiento.value==null){
                e.preventDefault();

                mensajesError.push('Ingresa tu fecha de nacimiento');

            }
            //ACUMULA LOS MENSAJES DE ERROR
            if(mensajesError.length>0){
                formatoAlerta(mensajesError.join(' - '));
            }
        }
    });


});