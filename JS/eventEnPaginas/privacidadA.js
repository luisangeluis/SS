$(document).ready(function(){
    //AJUSTAR FOOTER HASTA ABAJO
    ajustarFooter();
    //EVENTO PARA AJUSTAR FOOTER
    $(window).on({
        resize: function () {

            ajustarFooter();
        }
    })
});