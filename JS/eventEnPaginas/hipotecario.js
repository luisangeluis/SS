let saldoTotalTabla = valorFinanciamiento.value.replace('$', '');
let numDePeriodos = rangeAnos.value * 12;
const tBody = document.querySelector('#amortizacion tbody');
const tabla = document.querySelector('#amortizacion');
const PdfAmortizacion = document.querySelector('#print-pdf-amortizacion');


let valorMensualidad = document.querySelector('#valorMensualidad');

let preApruebaHipotecaPrincipal = document.querySelector('#preApruebaHipotecaPrincipal');
let ingresoMensual = document.querySelector('#ingresoMensual');

const formatoMoneda = document.querySelectorAll('.formato-moneda');

darFormatoMoneda(formatoMoneda);
valorMensualidad.value = '$' + formatMoneyDecimales(getPrimerMensualidad(saldoTotalTabla, 2, rangeAnos.value));

getTablaAmortizacion(saldoTotalTabla, numDePeriodos, tBody);

//RANGO ENGANCHE FINANCIAMIENTO
rangeEngancheFinanciamiento.addEventListener('change', () => {

    //Actualiza el saldo total de la tabla  
    saldoTotalTabla = valorFinanciamiento.value.replace('$', '');
    //Calcula la mensualidad
    valorMensualidad.value = '$' + formatMoneyDecimales(getPrimerMensualidad(saldoTotalTabla, 2, rangeAnos.value));

    clearTablaAmortizacion(tBody);
    getTablaAmortizacion(saldoTotalTabla, numDePeriodos, tBody);

});

//RANGO DE AÑOS
rangeAnos.addEventListener('change', () => {

    //saldoTotalTabla = valorFinanciamiento.value.replace('$', '');

    valorMensualidad.value = '$' + formatMoneyDecimales(getPrimerMensualidad(saldoTotalTabla, 2, rangeAnos.value));

    clearTablaAmortizacion(tBody);
    getTablaAmortizacion(saldoTotalTabla, numDePeriodos, tBody);


});

//Input de ingreso mensual neto
ingresoMensual.addEventListener('blur', (e) => {

    let valor = e.path[0].value;
    valor = parseFloat(valor.replace(/\$|,/g, ""));

    if (valor / 3 >= parseFloat(valorMensualidad.value.replace(/\$|,/g, ""))) {
        habilitarEnlace(preApruebaHipotecaPrincipal);

    } else {

        deshabilitarEnlace(preApruebaHipotecaPrincipal);
        alerta('Tu ingreso mensual debe ser 3 veces mayor al abono mensual ');

    }

});

//Descargar tabla amortizacion en pdf

PdfAmortizacion.addEventListener('click', () => {

    getPDF(tabla);    
    
});






















