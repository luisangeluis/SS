$(document).ready(function(){
    const btnSlideInvert=document.querySelectorAll('.btn-slide-invert');
    //DATOS DE FORMULARIO
    const calle = document.querySelector('#calle');
    const exterior = document.querySelector('#num-exterior');
    const interior = document.querySelector('#num-interior');
    const CP = document.querySelector('#cp');
    const colonia = document.querySelector('#colonia');
    const municipio = document.querySelector('#municipio');
    const ciudad = document.querySelector('#ciudad');
    const estado = document.querySelector('#estado');

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

    //VALIDAR FORMULARIO CON BTN CONFIRMAR 
    $(btnConfirmar).on({
        click:(e)=>{
            //ACUMULA MENSAJES DE ERROR
            let mensajesError = [];

            if(calle.value=="" || calle.value==null){
                e.preventDefault();
                mensajesError.push('Ingresa tu Calle');
            }
            if(exterior.value=="" || calle.value==null){
                e.preventDefault();
                mensajesError.push('Ingresa tu Numero Exterior');
            }
            /*
            if(interior.value=="" || calle.value==null){
                e.preventDefault();
                mensajesError.push('Ingresa tu numero interior');
            }
            */
            if(CP.value=="" || calle.value==null){
                e.preventDefault();
                mensajesError.push('Ingresa tu Codigo Postal');
            }
            if(colonia.value=="" || calle.value==null){
                e.preventDefault();
                mensajesError.push('Ingresa Colonia');
            }
            if(municipio.value=="" || calle.value==null){
                e.preventDefault();
                mensajesError.push('Ingresa Municipio');
            }
            if(ciudad.value=="" || calle.value==null){
                e.preventDefault();
                mensajesError.push('Ingresa tu Ciudad');
            }
            if(estado.value=="" || calle.value==null){
                e.preventDefault();
                mensajesError.push('Ingresa tu Estado');
            }
            //ACUMULA LOS MENSAJES DE ERROR
            if(mensajesError.length>0){
                //formatoAlerta(mensajesError.join(', '));
                alerta(mensajesError.join(' - '));
            }
        }
    });
});