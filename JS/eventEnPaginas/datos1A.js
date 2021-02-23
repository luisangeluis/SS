
$(document).ready(function () {
    /*PANEL SLIDE*/
    const btnSlide = document.querySelectorAll('.btn-slide');
    /*PANEL SLIDE INVERTIDO*/
    const btnSlideInvert = document.querySelectorAll('.btn-slide-invert');
    /*FORMATO MONEDA A LOS INPUTS*/
    const formatoMoneda = document.querySelectorAll('.formatoMoneda');

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



});
