$(document).ready(function(){
    const btnSlideInvert=document.querySelectorAll('.btn-slide-invert');
    //DATOS DE FORMULARIO
    const RFC = document.querySelector('#rfc');
    const homoclave = document.querySelector('#homoclave');
    const CURP = document.querySelector('#curp');

    const btnConfirmar = document.querySelector('#confirmar');


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
    //BTN CONFIRMAR
    $(btnConfirmar).on({
        click:(e)=>{
            let mensajesError = [];
            

            if(RFC.value=="" || calle.value==null){
                e.preventDefault();
                mensajesError.push('Ingresa tu RFC');
            }
            if(homoclave.value=="" || calle.value==null){
                e.preventDefault();
                mensajesError.push('Ingresa tu homoclave');
            }
            if(CURP.value=="" || calle.value==null){
                e.preventDefault();
                mensajesError.push('Ingresa tu CURP');
            }
            if(mensajesError.length>0){
                formatoAlerta(mensajesError.join(', '));
            }
        }
    });
    


});