

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