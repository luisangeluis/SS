//Detectar ENTER
function detectarEnter(pE, pElemtSiguiente) {
	let key = pE.keyCode || pE.which;

	if (key == 13) {
		$(pElemtSiguiente).focus();
	}
}
//VALIDAR EMAIL CORRECTO
function validarCorreo(pCorreo){
	let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
	let esValido= expReg.test(pCorreo);
	return esValido;
}
//RETORNA CUANTOS DIAS HAY CON REFERENCIA AL MES Y AÑO
function diasEnMes() {
	return new Date(year.value, mes.value, 0).getDate();
}
//REICIA LA FECHA DE NACIMIENTO
function reiniciarFecha() {
	dia.value = 1;
	mes.value = 1;
	year.value = 1920;
}
//VALIDAR SI ES MAYOR DE EDAD
function validarEdad() {
	let yearActual = (new Date).getFullYear();

	if (year.value == (yearActual - 18)) {


		if (mes.value > mesActual) {
			reiniciarFecha();
			alert('La persona debe ser mayor de edad');

		}

		if (mes.value == mesActual) {
			if (dia.value > diaActual) {
				reiniciarFecha();

				alert('La persona debe ser mayor de edad');

			}
		}

	}

}
//QUITAR EL SIMBOLO DE % A UN VALOR
const asignarPorcentaje=(pValorAsignar)=>{
	
	let result=0;
	result = parseInt(pValorAsignar.value.replace(/%/g, ""))
	console.log(`nuevo metodo de asignar porcentaje ${result}`);
	return result;
}

const mostrarValorPesos=(pValorAMostrar)=>{

	let result = "$"+formatMoney(pValorAMostrar.value);
	return result;

}

const mostrarValorPesosConDecimales=(pValorAMostrar)=>{

	let result = "$"+formatMoneyDecimales(pValorAMostrar.value);
	return result;

}
const mostrarValorPorcentaje=(pValorAMostrar)=>{

	let result = pValorAMostrar.value + "%";
	console.log("metodo de mostrar valor porcentaje");

	return result;

}

const asignarValorPesos=(pValor)=>{
	let result=0;
	result = parseFloat(pValor.value.replace(/\$/g, ""));
	//result =parseFloat(pValor.value.replace('$',""));
	return result;
}
//Calcula el porcentaje de una cantidad
function calcularPorcentajeEnPesos(porcentaje, total) {

    let result = (porcentaje / 100) * total;

    return result;

}

//Asignar numero de decimales a numero
function myRound(num, dec) {
    var exp = Math.pow(10, dec || 2); // 2 decimales por defecto
    return parseInt(num * exp, 10) / exp;
}

//Limpiar tabla de amortizacion 
function clearTablaAmortizacion(pElementoHijos) {
    let elementosArray = Array.from(pElementoHijos.children);
    //console.log(elementosArray);

    for (let x = 0; x < elementosArray.length; x++) {
        pElementoHijos.removeChild(elementosArray[x]);
    }
}

//Mostrar tabla de amortizacion
function getTablaAmortizacion(pSaldoTotalTabla, pNumDePeriodos, pElementoInicial) {

    let amortizacion = 0;
    let saldoRestanteTabla = parseFloat(pSaldoTotalTabla);
    let cuotaTabla = 0;
    let porcentajeTazaTabla = 2;
    let interesPesosTabla = 0;

	//Fragmento de elemento tr
    let fragmentTr = document.createDocumentFragment();
	//Fragmento de elementos td
    let fragmentGroupTd = document.createDocumentFragment();

    let valores = [];

    //pSaldoTotalTabla = valorFinanciamiento.value.replace('$', '');
    pNumDePeriodos = rangeAnos.value * 12;
    amortizacion = myRound(pSaldoTotalTabla / pNumDePeriodos, 10);

    for (let x = 0; x < pNumDePeriodos; x++) {

        let tr = document.createElement('tr')

        fragmentTr.appendChild(tr);

        interesPesosTabla = calcularPorcentajeEnPesos(porcentajeTazaTabla, saldoRestanteTabla);

        cuotaTabla = myRound(interesPesosTabla + amortizacion, 10);

        saldoRestanteTabla = myRound(saldoRestanteTabla, 10) - amortizacion;
        saldoRestanteTabla = myRound(saldoRestanteTabla, 10);

		//Guarda los valores en el arreglo para asignarlos posteriormente
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
        fragmentGroupTd.children[7].textContent = `$${formatMoneyDecimales(myRound(cuotaTabla))}`;

        fragmentTr.children[x].appendChild(fragmentGroupTd);

    }

    pElementoInicial.appendChild(fragmentTr);

}
//Calcula la primer mensualidad
const getPrimerMensualidad = (pSaldoTotal, pInteresMensual,pAnos)=>{
	let numDePeriodos = pAnos*12;
	let amortizacion =myRound(pSaldoTotal/numDePeriodos,10);
	let interes = myRound(calcularPorcentajeEnPesos(pInteresMensual,pSaldoTotal),10);

	let result;
	return myRound(result=amortizacion+interes);

}


