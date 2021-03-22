//let saldoTotalTabla = valorFinanciamiento.value.replace('$','');

//Otra cantidad
let saldoTotalTabla = 10000000

//let  numDePeriodos=rangeAnos.value*12;

//Otro numero de periodos
let  numDePeriodos=360;


let amortizacion=0;
let saldoRestanteTabla = parseFloat(saldoTotalTabla);


let cuotaTabla=0;
let porcentajeTazaTabla=2;
let interesPesosTabla =0;
amortizacion = myRound(saldoTotalTabla/numDePeriodos,10);

console.log(saldoRestanteTabla);
console.log(`amortizacion ${amortizacion}`);

for(let i=0;i<numDePeriodos;i++){
    
    interesPesosTabla = calcularPorcentajeEnPesos(porcentajeTazaTabla,saldoRestanteTabla);

    cuotaTabla = myRound(interesPesosTabla+amortizacion,10);

    saldoRestanteTabla=myRound(saldoRestanteTabla,10)-amortizacion;
    saldoRestanteTabla = myRound(saldoRestanteTabla,10);
    
    console.log(`${i+1} Saldo restante ${myRound(saldoRestanteTabla)}`);
    console.log(`interes: ${myRound(interesPesosTabla)}`);
    console.log(`cuota: ${myRound(cuotaTabla)}`)
    
}













