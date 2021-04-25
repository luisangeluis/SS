//Variables range enganche financiamiento
const rangeEngancheFinanciamiento = document.querySelector('#rangeEngancheFinanciamiento');
const valorTotalInmueble = document.querySelector('#valorCasa');;
const valorEnganche = document.querySelector('#valorEnganche');
const porcentajeEnganche = document.querySelector('#porcentajeEnganche');
const porcentajeFinanciamiento = document.querySelector('#porcentajeFinanciamiento');
const valorFinanciamiento = document.querySelector('#valorFinanciamiento');
//Variables para la tabla de amortizacion
// let saldoTotalTabla = valorFinanciamiento.value.replace('$', '');
let numDePeriodos = rangeAnos.value * 12;
const tBody = document.querySelector('#amortizacion tbody');
const tabla = document.querySelector('#amortizacion');
//Fin de Variables para la tabla de amortizacion
//Obtener PDF AMORTIZACION
const PdfAmortizacion = document.querySelector('#print-pdf-amortizacion');

const valorMensualidad = document.querySelector('#valorMensualidad');
//enlace de preaprueba hipoteca
let preApruebaHipotecaPrincipal = document.querySelector('#preApruebaHipotecaPrincipal');
let ingresoMensual = document.querySelector('#ingresoMensual');
//Elementos con formato moneda
const formatoMoneda = document.querySelectorAll('.formato-moneda');
//Mostrar informacion primera mensualidad
const tePrestamos = document.querySelectorAll('.te-prestamos');
//Formato moneda a los inputs
darFormatoMoneda(formatoMoneda);

//Calcula enganche inicialmente
porcentajeEnganche.value = `${rangeEngancheFinanciamiento.value}%`
valorEnganche.value ='$'+formatMoneyDecimales(calcularPorcentajeEnPesos(asignarPorcentaje(porcentajeEnganche),asignarValorPesos(valorTotalInmueble)));
//Calcula financiamiento inicialmente
porcentajeFinanciamiento.value =`${100-asignarPorcentaje(porcentajeEnganche)}%`;
valorFinanciamiento.value ='$'+formatMoneyDecimales(calcularPorcentajeEnPesos(asignarPorcentaje(porcentajeFinanciamiento),asignarValorPesos(valorTotalInmueble)));
//Calcula primer mensualidad inicialmento
valorMensualidad.value = '$'+formatMoneyDecimales(getPrimerMensualidad(asignarValorPesos(valorFinanciamiento),2,rangeAnos.value));
//Mostrar cantidad del prestamo
tePrestamos.forEach(element=>{
    element.textContent = valorFinanciamiento.value;
})

//Obtener tabla
getTablaAmortizacion(asignarValorPesos(valorFinanciamiento), numDePeriodos, tBody);

//Range de enganche y financiamiento
rangeEngancheFinanciamiento.addEventListener('input',()=>{
    
    clearTablaAmortizacion(tBody);
    //Calcula enganche
    porcentajeEnganche.value = `${rangeEngancheFinanciamiento.value}%`
    valorEnganche.value ='$'+formatMoneyDecimales(calcularPorcentajeEnPesos(asignarPorcentaje(porcentajeEnganche),asignarValorPesos(valorTotalInmueble)));
    //Calcula Financiamiento
    porcentajeFinanciamiento.value =`${100-asignarPorcentaje(porcentajeEnganche)}%`;
    valorFinanciamiento.value ='$'+formatMoneyDecimales(calcularPorcentajeEnPesos(asignarPorcentaje(porcentajeFinanciamiento),asignarValorPesos(valorTotalInmueble)));
    //Obtener monto de primer mensualidad
    valorMensualidad.value ='$'+formatMoneyDecimales(getPrimerMensualidad(asignarValorPesos(valorFinanciamiento),2,rangeAnos.value));
    
    tePrestamos.forEach(element=>{
        element.textContent = valorFinanciamiento.value;
    })
    
    //Obtener tabla
    getTablaAmortizacion(asignarValorPesos(valorFinanciamiento), numDePeriodos, tBody);

})
//RANGO DE AÑOS
rangeAnos.addEventListener('input', () => {

    //saldoTotalTabla = valorFinanciamiento.value.replace('$', '');
    clearTablaAmortizacion(tBody);

    valorMensualidad.value ='$'+formatMoneyDecimales(getPrimerMensualidad(asignarValorPesos(valorFinanciamiento),2,rangeAnos.value));

    getTablaAmortizacion(parseFloat(asignarValorPesos(valorFinanciamiento)), numDePeriodos, tBody);


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






















