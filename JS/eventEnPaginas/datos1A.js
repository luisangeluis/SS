$(document).ready(function () {
    const btnSlide = document.querySelectorAll('.btn-slide');
    const slideContenido = document.querySelector('.contenido-slide');
    const btnDinamico = document.querySelector('#btn-dinamico');
    const detallesCredito = document.querySelector('#detalles_credito');


    /*
    $(window).resize(function(){
        if($(window).width()<=767){
            $(btnDinamico).css('display','block');
            $(detallesCredito).addClass('collapse');
        }else{
            $(btnDinamico).css('display','none');

            $(detallesCredito).removeClass('collapse');

        }

    })
    */
    $(btnSlide).on({
        click: function () {
            //$(slideContenido).slideToggle();
            expandirPanel(btnSlide,300);
        }
    })

    
});
