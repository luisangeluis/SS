
//FUNCION PARA FORMATO MONEDA

/*
$(".formatoMoneda").on({
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
*/
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

/*
function expandirPanelInvert(pPanel,pTiempo){
    $(pPanel).slideToggle(pTiempo);
}
*/



//FUNCION PARA AGREGAR COLOR A LOS BOTONES
/*
function removerClase(pBoton) {
    for (let i = 0; i < pBoton.length; i++) {
        pBoton[i].classList.remove("conColor");

    }
    
}

function removerClase(pBoton,pClase) {
    for (let i = 0; i < pBoton.length; i++) {
        pBoton[i].classList.remove(pClase);

    }
    
}
*/

