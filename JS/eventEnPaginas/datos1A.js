
$(document).ready(function () {
    /*PANEL SLIDE*/
    const btnSlide = document.querySelectorAll('.btn-slide');
    /*PANEL SLIDE INVERTIDO*/
    const btnSlideInvert = document.querySelectorAll('.btn-slide-invert');
    /*FORMATO MONEDA A LOS INPUTS*/
    const formatoMoneda = document.querySelectorAll('.formatoMoneda');
    //INPUT INGRESO BRUTO
    const ingresoBruto = document.querySelector('#ingreso-bruto');
    //BTN CONFIRMAR
    const btnConfirmar = document.querySelector('#btn-confirmar');

    //AJUSTAR FOOTER HASTA ABAJO
    ajustarFooter();

    //EVENTO PARA AJUSTAR FOOTER
    $(window).on({
        resize: function () {

            ajustarFooter();
        }
    })

    //da formato moneda a los inputs
    darFormatoMoneda(formatoMoneda);
    //panel slide de agregar otro ingreso
    for (let x = 0; x < btnSlide.length; x++) {
        $(btnSlide[x]).on({
            click: function () {

                expandirPanel(btnSlide[x], 300);
            }
        })
    }

    //panel slide de agregar otro ingreso
    for (let x = 0; x < btnSlideInvert.length; x++) {
        $(btnSlideInvert[x]).on({
            click: function (e) {
                expandirPanelInvert(btnSlideInvert[x], 450);
            }
        })

    }
    //console.log(btnConfirmar.value)
    
    
   $(btnConfirmar).on({
       click:(e)=>{
            //e.preventDefault();
            //console.log(ingresoBruto.value);

           if(ingresoBruto.value=="$" || asignarValorPesos(ingresoBruto)<=0 || ingresoBruto.value==""){
                e.preventDefault();
                console.log(ingresoBruto.value);

           }
           
           
       }
   });



});
