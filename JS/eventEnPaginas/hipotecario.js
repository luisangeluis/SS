


let saldoTotalTabla = valorFinanciamiento.value.replace('$','');
let saldoRestanteTabla=0;

let cuotaTabla=0;
let interesTabla=0;
let  numDePeriodos=rangeAnos.value*12;
//console.log(rangeAnos.value*12)
let amortizacion=0; 
//VALORFINANCIAMIENTO
//console.log(saldoTotalTabla);

saldoRestanteTabla = parseFloat(saldoTotalTabla);
amortizacion = myRound(saldoRestanteTabla/(rangeAnos.value*12),2);


console.log(saldoTotalTabla);
console.log(saldoRestanteTabla);
console.log(`amortizacion ${amortizacion}`);


for(let i=0;i<numDePeriodos;i++){
    //console.log(saldoRestanteTabla);
    saldoRestanteTabla=myRound(myRound(saldoRestanteTabla-amortizacion,10),2);
    console.log(`${i+1}`+` `+saldoRestanteTabla);
}










