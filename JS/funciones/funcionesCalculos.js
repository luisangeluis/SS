

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