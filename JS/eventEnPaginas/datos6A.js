$(document).ready(function(){
    const btnSlideInvert=document.querySelectorAll('.btn-slide-invert');
    //CHECK DE BURO
    const checkBuro = document.querySelector('#check-buro')
    //BOTON CONFIRMAR
    const confirmarBuro =document.querySelector('#confirmar-buro');

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

    $(checkBuro).on({
        click: function () {
            
           if(confirmarBuro.classList.contains('disabled')){
                habilitarEnlace(confirmarBuro);
           }else{
            deshabilitarEnlace($(confirmarBuro));  
           }

        }
    });
});