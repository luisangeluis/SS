$(document).ready(function () {
    //CHECKBOX
    const checkPrivacidad = document.querySelector('#check-privacidad');
    //BOTON CONFIMAR
    const confirmarPrivacidad = document.querySelector('#confirmar-privacidad');


    //AJUSTAR FOOTER HASTA ABAJO
    ajustarFooter();
    //EVENTO PARA AJUSTAR FOOTER
    $(window).on({
        resize: function () {

            ajustarFooter();
        }
    })
    //ACTIVA EL BOTON CUANDO ACEPTAS LOS TERMINOS
    $(checkPrivacidad).on({
        click: function () {
            
           if(confirmarPrivacidad.classList.contains('disabled')){
                habilitarEnlace(confirmarPrivacidad);
                //alert('hola');
           }else{
            deshabilitarEnlace($(confirmarPrivacidad));  
           }

        }
    });

    
});