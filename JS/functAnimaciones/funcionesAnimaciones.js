//Formato moneda al resultado
function formatMoneyDecimales(n, c, d, t) {
    var c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
        j = (j = i.length) > 3 ? j % 3 : 0;

    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

//FUNCION AJUSTAR FOOTER HASTA ABAJO
function ajustarFooter() {
    height = screen.height;
    if (height > 1023) {
        $('.footer').addClass('position-absolute');
    } else {
        $('.footer').removeClass('position-absolute');

    }
}
//Formato moneda a los inputs
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

const alerta=(pMensaje)=>{
    Swal.fire({
        //width:"55%",
        //text:pMensaje,
        html:`<div class="row align-text-center justify-content-center">`+
                `<div class="col-12 col-lg-12"> ${pMensaje}`+
                `</div>`+
              `</div>`,  
        icon:'warning',
        confirmButtonColor:'#3d556f',
        confirmButtonText:'Aceptar',
        //position:'center',
    })
}

//Obtener pdf
//function getPdf(pPDF){
const getPDF = (pPDF) =>{
    
    html2pdf(pPDF, {
        filename: 'miArchivo.pdf',
        margin: 2,
        image: {
            type: 'jpeg',
            quality: 0.98
        },
        jsPDF: {
            orientation: 'landscape',
            format: 'a4',
            unit: 'mm'
        },
        html2canvas: {
            scale: 1,
            logging: true,
            dpi: 192,
            letterRendering: true
        }
    })
}




