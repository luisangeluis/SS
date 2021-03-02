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
//HABILITAR Y DESHABILITAR ENLACES
function habilitarEnlace(pElemento) {
    $(pElemento).removeClass('disabled');
    $(pElemento).attr('aria-disabled', false);
    $(pElemento).attr('tabindex', 0);
}

function deshabilitarEnlace(pElemento) {
    $(pElemento).addClass('disabled');
    $(pElemento).attr('aria-disabled', true);
    $(pElemento).attr('tabindex', -1);
}
//ALERTA

const formatoAlerta=(pMensaje)=>{
    Swal.fire({
        width:"55%",
        text:pMensaje,
        //html:'<h5 class="card-title text-dark">Ingrese el campo de valor bruto</5>',
        icon:'warning',
        confirmButtonColor:'#3d556f',
        confirmButtonText:'Aceptar',
        //position:'center',
    })
}


