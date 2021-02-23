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