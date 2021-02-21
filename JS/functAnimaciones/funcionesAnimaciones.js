//FUNCION AJUSTAR FOOTER HASTA ABAJO
function ajustarFooter() {
    height = screen.height;
    if (height >= 930) {
        $('.footer').addClass('position-absolute');
    } else {
        $('.footer').removeClass('position-absolute');

    }
}
//FUNCION FORMATO MONEDA
function darFormatoMoneda(pInput){
    $(pInput).on({
        "focus": function (event) {
            $(event.target).select();
        },
        "keyup": function (event) {
            $(event.target).val(function (index, value) {
                return '$' + value.replace(/\D/g, "")
                .replace(/([0-9])([0-9]{2})$/, '$1.$2')
                .replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ",");
                    
            });
            
        }
    });
}

//FUNCIONES PARA EXPANDIR PANEL
function expandirPanel(pElemento, pTiempo){
    $(pElemento).next().slideToggle(pTiempo);
}
function expandirPanelInvert(pElemento,pTiempo){
    $(pElemento).prev().slideToggle(pTiempo);

}



