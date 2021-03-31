let saldoTotalTabla = valorFinanciamiento.value.replace('$', '');
let numDePeriodos = rangeAnos.value * 12;
const tBody = document.querySelector('#amortizacion tbody');

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

    if(valor/3>=parseFloat(valorMensualidad.value.replace(/\$|,/g,""))){
        habilitarEnlace(preApruebaHipotecaPrincipal);

    }else{

        deshabilitarEnlace(preApruebaHipotecaPrincipal);

    }

});


/*
const getTablaAmortizacionn=(pSaldoTotalTabla, pNumDePeriodos,pElementoInicial)=>{
    //let saldoTotalTabla = valorFinanciamiento.value.replace('$','');
    //Otra cantidad
    //let saldoTotalTabla = 10000000
    //let  numDePeriodos=rangeAnos.value*12;
    //Otro numero de periodos
    //let numDePeriodos = 360;
    //Valores de la tabla
    let amortizacion = 0;
    let saldoRestanteTabla = parseFloat(saldoTotalTabla);
    let cuotaTabla = 0;
    let porcentajeTazaTabla = 2;
    let interesPesosTabla = 0;

    amortizacion = myRound(saldoTotalTabla / numDePeriodos, 10);

    //console.log(saldoRestanteTabla);
    //console.log(`amortizacion ${amortizacion}`);

    //for(let i=0;i<numDePeriodos;i++){

        //interesPesosTabla = calcularPorcentajeEnPesos(porcentajeTazaTabla,saldoRestanteTabla);

   //     cuotaTabla = myRound(interesPesosTabla+amortizacion,10);

     //   saldoRestanteTabla=myRound(saldoRestanteTabla,10)-amortizacion;
       // saldoRestanteTabla = myRound(saldoRestanteTabla,10);

        //console.log(`${i+1} Saldo restante ${myRound(saldoRestanteTabla)}`);
        //console.log(`interes: ${myRound(interesPesosTabla)}`);
        //console.log(`cuota: ${myRound(cuotaTabla)}`)

    //}


    //const tBody = document.querySelector('#amortizacion tbody');
    //tBody = document.querySelector('#amortizacion tbody');

    let fragmentTr = document.createDocumentFragment();
    let fragmentGroupTd = document.createDocumentFragment();

    for (let x = 0; x < numDePeriodos; x++) {

        let tr = document.createElement('tr')
        let valores = [];

        fragmentTr.appendChild(tr);

        interesPesosTabla = calcularPorcentajeEnPesos(porcentajeTazaTabla, saldoRestanteTabla);

        cuotaTabla = myRound(interesPesosTabla + amortizacion, 10);

        saldoRestanteTabla = myRound(saldoRestanteTabla, 10) - amortizacion;
        saldoRestanteTabla = myRound(saldoRestanteTabla, 10);

        valores = [x + 1, saldoRestanteTabla, interesPesosTabla, amortizacion, 0, 0, amortizacion, cuotaTabla];

        for (let i = 0; i < 8; i++) {
            let td = document.createElement('td');
            fragmentGroupTd.appendChild(td);

        }

        fragmentGroupTd.children[0].textContent = `${x + 1}`;
        fragmentGroupTd.children[1].textContent = `$${formatMoneyDecimales(myRound(saldoRestanteTabla))}`;
        fragmentGroupTd.children[2].textContent = `$${formatMoneyDecimales(myRound(interesPesosTabla))}`;
        fragmentGroupTd.children[3].textContent = `$${myRound(amortizacion)}`;
        fragmentGroupTd.children[4].textContent = `$${formatMoneyDecimales(0)}`;
        fragmentGroupTd.children[5].textContent = `$${formatMoneyDecimales(0)}`;
        fragmentGroupTd.children[6].textContent = `$${myRound(amortizacion)}`;
        fragmentGroupTd.children[7].textContent = `$${myRound(cuotaTabla)}`;

        fragmentTr.children[x].appendChild(fragmentGroupTd);

    }

    //tBody.appendChild(fragmentTr);
    pElementoInicial.appendChild(fragmentTr);

    //console.log(tBody);
}
*/

















