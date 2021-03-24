let saldoTotalTabla = valorFinanciamiento.value.replace('$', '');
let numDePeriodos = rangeAnos.value * 12;
const tBody = document.querySelector('#amortizacion tbody');

getTablaAmortizacion(saldoTotalTabla, numDePeriodos, tBody);

rangeEngancheFinanciamiento.addEventListener('mouseup', () => {

    let elementosArray = Array.from(tBody.children);
    console.log(elementosArray);

    for (let x = 0; x < elementosArray.length; x++) {
        tBody.removeChild(elementosArray[x]);
    }

    saldoTotalTabla = valorFinanciamiento.value.replace('$', '');
    getTablaAmortizacion(saldoTotalTabla, numDePeriodos, tBody);

});

rangeAnos.addEventListener('mouseup', () => {

    clearTablaAmortizacion(tBody);
    /*
    let elementosArray = Array.from(tBody.children);
    console.log(elementosArray);

    for (let x = 0; x < elementosArray.length; x++) {
        tBody.removeChild(elementosArray[x]);
    }
    */
    getTablaAmortizacion(saldoTotalTabla, numDePeriodos, tBody);


});

function clearTablaAmortizacion(pElementoHijos){
    let elementosArray = Array.from(pElementoHijos.children);
    //console.log(elementosArray);

    for (let x = 0; x < elementosArray.length; x++) {
        pElementoHijos.removeChild(elementosArray[x]);
    }
}


function getTablaAmortizacion(pSaldoTotalTabla, pNumDePeriodos, pElementoInicial) {

    let amortizacion = 0;
    let saldoRestanteTabla = parseFloat(pSaldoTotalTabla);
    let cuotaTabla = 0;
    let porcentajeTazaTabla = 2;
    let interesPesosTabla = 0;

    let fragmentTr = document.createDocumentFragment();
    let fragmentGroupTd = document.createDocumentFragment();

    let valores = [];

    pNumDePeriodos = rangeAnos.value * 12;
    amortizacion = myRound(pSaldoTotalTabla / pNumDePeriodos, 10);

    for (let x = 0; x < pNumDePeriodos; x++) {

        let tr = document.createElement('tr')

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

    pElementoInicial.appendChild(fragmentTr);

}

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

















