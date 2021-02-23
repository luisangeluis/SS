
//JS para dar comas a formatos de $ en el cuadro de output


let montoRango = document.getElementById("prInputId");
let montoImpreso = document.getElementById("prOutputId");


calc();
montoRango.addEventListener("mouseup", function () { calc(); });
montoRango.addEventListener("mousemove", function () { calc(); });
montoRango.addEventListener("touchmove", function () { calc(); });
montoRango.addEventListener("touchend", function () { calc(); });

function calc() {

    montoImpreso.innerHTML = '$ ' + formatMoney(montoRango.value);
}



function formatMoneyDecimales(n, c, d, t) {
    var c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
        j = (j = i.length) > 3 ? j % 3 : 0;

    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

function formatMoney(n, c, d, t) {
    var c = isNaN(c = Math.abs(c)) ? 0 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
        j = (j = i.length) > 3 ? j % 3 : 0;

    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

//JS para barra con color de un solo lado

$(document).ready(function () {


    var input = document.querySelector("input[type=range]");
    input.style.setProperty("--value", input.value / 100000 - 2.5);
    input.addEventListener("input", function (evt) {
        input.style.setProperty("--value", input.value / 100000 - 2.5);
    },
        false);
            

});

$(document).ready(function () {

    let inputAnios = document.querySelector(".rangomes input[type=range]");
    inputAnios.style.setProperty("--value", inputAnios.value * 2.75);

    inputAnios.addEventListener("input", function (evt) {

        if (inputAnios.value < 6) {
            inputAnios.style.setProperty("--value", inputAnios.value * 1.31);
        }
        if (inputAnios.value >= 7) {
            inputAnios.style.setProperty("--value", inputAnios.value * 1.32);
        }
        if (inputAnios.value >= 8) {
            inputAnios.style.setProperty("--value", inputAnios.value * 2.51);
        }

        if (inputAnios.value >= 17) {
            inputAnios.style.setProperty("--value", inputAnios.value * 3.1);
        }

        //inputAnios.style.setProperty("--value", inputAnios.value);
    },
        false);
});

//***Calculos con el valor de Rango***
//***variables para calculos con el valor de rango***

const porcentajeEnganche = document.getElementById('porcentajeenganche');
const valorEnganchePesos = document.getElementById('valorenganche');
const porcentFinanciamiento = document.getElementById('porcentFinanciamiento');
const valorFinanciamiento = document.getElementById('valorFinanciamiento');
const porcentCofi = document.getElementById('porcentCofi');
const valorCofin = document.getElementById('valorCofin');
const valorMensualidad = document.getElementById('valorMensualidad');
const ingresoMensNeto = document.getElementById('ingresoMensNeto');
const otroIngreso = document.getElementById('otroIngreso');
const valorMensualidad2 = document.getElementById('valorMensualidad2');
const valorTazaInteres = document.getElementById('valorTazaInteres');

let mesInputId = document.getElementById('mesInputId');
let valorSelectDeCofi = undefined;
let valorPorcentEnganche = 0;
let valorPorcentCofi = 0;
let valorIngresoMensNeto = 0;
let valorOtroIngreso = 0;
const valorCAT=document.getElementById('cat');

//formato a las entradas de porcentajes y entradas de pesos
$("#porcentajeenganche").mask("00%");
$("#porcentCofi").mask("00%");
$("#ingresoMensNeto").maskMoney({ prefix: '$' });
$("#otroIngreso").maskMoney({ prefix: '$' });

//calculos al cargar la pagina

//asignarPorcentajeEnganche();

valorPorcentEnganche = asignarPorcentaje(porcentajeEnganche);

if (valorPorcentEnganche >= 10 && valorPorcentEnganche <= 80) {
    valorEnganchePesos.value = calcularPorcentajeEnPesos(valorPorcentEnganche, montoRango.value);
    
    //mostrarValorEnganche();
    valorEnganchePesos.innerHTML=mostrarValorPesos(valorEnganchePesos);

    console.log(valorEnganchePesos.value);

    porcentFinanciamiento.value = calcDifEnPorcentaje(100, valorPorcentEnganche) - valorPorcentCofi;

    //mostrarPorcentFinanciamiento();
    porcentFinanciamiento.innerHTML = mostrarValorPorcentaje(porcentFinanciamiento);

    valorFinanciamiento.value = calcularPorcentajeEnPesos(porcentFinanciamiento.value, montoRango.value);

    //mostrarValorFinanciamiento();
    valorFinanciamiento.innerHTML = mostrarValorPesos(valorFinanciamiento);

}


//valorMensualidad.value = calcularMensualidad(valorFinanciamiento.value, mesInputId.value);

asignarTazaInteres();
valorMensualidad.value = calcularMensTotal(valorFinanciamiento.value, valorTazaInteres.value, mesInputId.value);
valorCAT.value=CAT.get(valorFinanciamiento.value,0,valorMensualidad.value,(mesInputId.value*12),12);
console.log(valorCAT.value.formatted);

if (valorMensualidad.value > 0) {

    //mostrarValorMensualidad();
    //mostrarValorMensualidad2();

    valorMensualidad.innerHTML = mostrarValorPesosConDecimales(valorMensualidad);
    valorMensualidad2.innerHTML = mostrarValorPesosConDecimales(valorMensualidad);   

    //MostrarTazaInteres();
    valorTazaInteres.innerHTML = mostrarValorPorcentaje(valorTazaInteres);


    mostrarCat();

    console.log(valorMensualidad.value);
} else {
    valorMensualidad.value = 0;

    //mostrarValorMensualidad();
    //mostrarValorMensualidad2();

    valorMensualidad.innerHTML = mostrarValorPesosConDecimales(valorMensualidad);
    valorMensualidad2.innerHTML = mostrarValorPesosConDecimales(valorMensualidad);

    console.log(valorFinanciamiento.value);
    console.log(mesInputId.value);
    console.log(valorMensualidad.value);


}

//calculos al mover la barra de valor del inmueble
montoRango.addEventListener("mouseup", function () {

    //asignarPorcentajeEnganche();
    valorPorcentEnganche = asignarPorcentaje(porcentajeEnganche);


    if (valorPorcentEnganche >= 10 && valorPorcentEnganche <= 80) {

        if (panel == true) {

           
            valorCofin.value = calcularPorcentajeEnPesos(valorPorcentCofi, montoRango.value);

            //mostrarValorCofin();
            valorCofin.innerHTML = mostrarValorPesos(valorCofin);

            console.log(panel);

            mostrarEngancheYFinanciamiento();



        } else {
           
            mostrarEngancheYFinanciamiento();
        }

        asignarTazaInteres();
        valorMensualidad.value = calcularMensTotal(valorFinanciamiento.value, valorTazaInteres.value, mesInputId.value);

        console.log('valorFinanciamiento antes' + valorFinanciamiento.value)
        console.log('valorMensualidad antes'+ valorMensualidad.value);
        console.log('valorMesInput antes' + mesInputId.value);
        valorCAT.value=CAT.get(valorFinanciamiento.value,0,valorMensualidad.value,mesInputId.value*12,12);
        console.log('valorFinanciamiento despues' + valorFinanciamiento.value);
        console.log('valorMensualidad despues'+ valorMensualidad.value);
        console.log('valorMesInput despues' + mesInputId.value);
        console.log(valorCAT.value.formatted);



        if (valorMensualidad.value > 0) {

            //mostrarValorMensualidad();
            //mostrarValorMensualidad2();

            valorMensualidad.innerHTML = mostrarValorPesosConDecimales(valorMensualidad);
            valorMensualidad2.innerHTML = mostrarValorPesosConDecimales(valorMensualidad);

            //MostrarTazaInteres();

            valorTazaInteres.innerHTML = mostrarValorPorcentaje(valorTazaInteres);


            mostrarCat();
            console.log(valorCAT.value.formatted);

            console.log(valorMensualidad.value);
        } else {
            valorMensualidad.value = 0;

            //mostrarValorMensualidad();
            //mostrarValorMensualidad2();

            valorMensualidad.innerHTML = mostrarValorPesosConDecimales(valorMensualidad);
            valorMensualidad2.innerHTML = mostrarValorPesosConDecimales(valorMensualidad);

            console.log(valorFinanciamiento.value);
            console.log(mesInputId.value);
            console.log(valorMensualidad.value);


        }

        //calcularMensTotal(10,mesInputId.value);

    } else {
        valorPorcentEnganche = 0;
        valorEnganchePesos.value = 0;
        porcentFinanciamiento.value = 0;
        valorFinanciamiento.value = 0;

        valorEnganchePesos.innerHTML = "$ 0.00";
        porcentFinanciamiento.innerHTML = "0 %";
        valorFinanciamiento.innerHTML = "$ 0.00";

    }

});


montoRango.addEventListener("touchend", function () {

    //asignarPorcentajeEnganche();
    valorPorcentEnganche = asignarPorcentaje(porcentajeEnganche);

    if (valorPorcentEnganche >= 10 && valorPorcentEnganche <= 80) {

        if (panel == true) {

            
            valorCofin.value = calcularPorcentajeEnPesos(valorPorcentCofi, montoRango.value);

            //mostrarValorCofin();
            valorCofin.innerHTML = mostrarValorPesos(valorCofin);

            console.log(panel);

            mostrarEngancheYFinanciamiento();



        } else {
            
            
            mostrarEngancheYFinanciamiento();
        }
        asignarTazaInteres()
        valorMensualidad.value = calcularMensTotal(valorFinanciamiento.value, valorTazaInteres.value, mesInputId.value);
        valorCAT.value=CAT.get(valorFinanciamiento.value,0,valorMensualidad.value,mesInputId.value*12,12);

        if (valorMensualidad.value > 0) {

            //mostrarValorMensualidad();
            //mostrarValorMensualidad2();

            valorMensualidad.innerHTML = mostrarValorPesosConDecimales(valorMensualidad);
            valorMensualidad2.innerHTML = mostrarValorPesosConDecimales(valorMensualidad);

            //MostrarTazaInteres();
            valorTazaInteres.innerHTML = mostrarValorPorcentaje(valorTazaInteres);



            mostrarCat();
            console.log(valorMensualidad.value);
            console.log(valorCAT.value.formatted);

        } else {
            valorMensualidad.value = 0;

            //mostrarValorMensualidad();
            //mostrarValorMensualidad2();

            valorMensualidad.innerHTML = mostrarValorPesosConDecimales(valorMensualidad);
            valorMensualidad2.innerHTML = mostrarValorPesosConDecimales(valorMensualidad);

            console.log(valorFinanciamiento.value);
            console.log(mesInputId.value);
            console.log(valorMensualidad.value);


        }

    } else {
        valorPorcentEnganche = 0;
        valorEnganchePesos.value = 0;
        porcentFinanciamiento.value = 0;
        valorFinanciamiento.value = 0;

        valorEnganchePesos.innerHTML = "$ 0.00";
        porcentFinanciamiento.innerHTML = "0 %";
        valorFinanciamiento.innerHTML = "$ 0.00";

    }

});


//calculos al mover el valor de porcentaje enganche
porcentajeEnganche.addEventListener("blur", function () {
    
    //asignarPorcentajeEnganche();
    valorPorcentEnganche = asignarPorcentaje(porcentajeEnganche);



    console.log(valorPorcentEnganche);

    if (valorPorcentEnganche >= 10 && valorPorcentEnganche <= 80) {

        
        valorPorcentCofi = 0;
        valorCofin.value = 0;

        //mostrarValorCofin();
        valorCofin.innerHTML = mostrarValorPesos(valorCofin);

        mostrarEngancheYFinanciamiento();

        asignarTazaInteres();
        valorMensualidad.value = calcularMensTotal(valorFinanciamiento.value, valorTazaInteres.value, mesInputId.value);
        valorCAT.value=CAT.get(valorFinanciamiento.value,0,valorMensualidad.value,mesInputId.value*12,12);

        if (valorMensualidad.value > 0) {

            //mostrarValorMensualidad();
            //mostrarValorMensualidad2();

            valorMensualidad.innerHTML = mostrarValorPesosConDecimales(valorMensualidad);
            valorMensualidad2.innerHTML = mostrarValorPesosConDecimales(valorMensualidad);

            //MostrarTazaInteres();
            valorTazaInteres.innerHTML = mostrarValorPorcentaje(valorTazaInteres);



            mostrarCat();
            console.log(valorMensualidad.value);
        } else {
            valorMensualidad.value = 0;

            //mostrarValorMensualidad();
            //mostrarValorMensualidad2();

            valorMensualidad.innerHTML = mostrarValorPesosConDecimales(valorMensualidad);
            valorMensualidad2.innerHTML = mostrarValorPesosConDecimales(valorMensualidad);


            console.log(valorFinanciamiento.value);
            console.log(mesInputId.value);
            console.log(valorMensualidad.value);


        }



    } else {
       

        valorEnganchePesos.value = 0;
        porcentFinanciamiento.value = 0;
        valorFinanciamiento.value = 0;

        //valorEnganchePesos.innerHTML = "Enganche no valido";
        valorEnganchePesos.innerHTML = "0 %";
        porcentFinanciamiento.innerHTML = "0 %";
        valorFinanciamiento.innerHTML = "$ 0.00";

        mostrarMensaje("ingrese un valor entre 10 y 80 por ciento");

        valorPorcentCofi = 0;
        valorCofin.value = 0;

        //mostrarValorCofin();
        valorCofin.innerHTML = mostrarValorPesos(valorCofin);

        valorMensualidad.value = 0;

        //mostrarValorMensualidad();
        //mostrarValorMensualidad2();

        valorMensualidad.innerHTML = mostrarValorPesosConDecimales(valorMensualidad);
        valorMensualidad2.innerHTML = mostrarValorPesosConDecimales(valorMensualidad);


    }

    valorPorcentCofi = 0;
    if (btnItemCofi.className == "item-boton activo") {

        btnItemCofi.classList.remove("activo");
        panel = false;
        // console.log(panel);
    }
   

    valorSelectDeCofi = undefined;
    console.log("valor de tipo de infonavit " + valorSelectDeCofi);
});

//calculos al mover el porcentaje de cofinanciamiento
porcentCofi.addEventListener("blur", function () {

    if (panel == true) {
        //asignarPorcentajeCofinanciamiento();

        valorPorcentCofi = asignarPorcentaje(porcentCofi);

        if ((valorPorcentEnganche >= 10 && valorPorcentEnganche <= 80) && (valorPorcentCofi <= (100 - valorPorcentEnganche) - 1 && valorPorcentCofi >= 10)) {

            //porcentFinanciamiento.value=calcDifEnPorcentaje(porcentFinanciamiento.value,valorPorcentCofi);
            porcentFinanciamiento.value = calcDifEnPorcentaje(100, valorPorcentEnganche) - valorPorcentCofi;

            //mostrarPorcentFinanciamiento();
            porcentFinanciamiento.innerHTML = mostrarValorPorcentaje(porcentFinanciamiento);


            valorFinanciamiento.value = calcularPorcentajeEnPesos(porcentFinanciamiento.value, montoRango.value);

            //mostrarValorFinanciamiento();
            valorFinanciamiento.innerHTML = mostrarValorPesos(valorFinanciamiento);

            valorCofin.value = calcularPorcentajeEnPesos(valorPorcentCofi, montoRango.value);

            //mostrarValorCofin();
            valorCofin.innerHTML = mostrarValorPesos(valorCofin);

            console.log(valorPorcentCofi);

            asignarTazaInteres();
            valorMensualidad.value = calcularMensTotal(valorFinanciamiento.value, valorTazaInteres.value, mesInputId.value);
            valorCAT.value=CAT.get(valorFinanciamiento.value,0,valorMensualidad.value,mesInputId.value*12,12);

            if (valorMensualidad.value > 0) {

                //mostrarValorMensualidad();
                //mostrarValorMensualidad2();

                valorMensualidad.innerHTML = mostrarValorPesosConDecimales(valorMensualidad);
                valorMensualidad2.innerHTML = mostrarValorPesosConDecimales(valorMensualidad);

                //MostrarTazaInteres();
                valorTazaInteres.innerHTML = mostrarValorPorcentaje(valorTazaInteres);


                mostrarCat();
                console.log(valorMensualidad.value);
            } else {
                valorMensualidad.value = 0;

                //mostrarValorMensualidad();
                //mostrarValorMensualidad2();

                valorMensualidad.innerHTML = mostrarValorPesosConDecimales(valorMensualidad);
                valorMensualidad2.innerHTML = mostrarValorPesosConDecimales(valorMensualidad);


                console.log(valorFinanciamiento.value);
                console.log(mesInputId.value);
                console.log(valorMensualidad.value);


            }

            valorSelectDeCofi = inst.value;

        } else {



            //investigar como actualizar los valores del input para no volver a recalcular todo
            if (valorPorcentEnganche >= 10 && valorPorcentEnganche <= 80) {

                
                valorPorcentCofi = 0;
                valorCofin.value = 0;

                mostrarEngancheYFinanciamiento();

                //mostrarValorCofin();
                valorCofin.innerHTML = mostrarValorPesos(valorCofin);




            }


            asignarTazaInteres();
            valorMensualidad.value = calcularMensTotal(valorFinanciamiento.value, valorTazaInteres.value, mesInputId.value);
            if (valorMensualidad.value > 0) {

                //mostrarValorMensualidad();
                //mostrarValorMensualidad2();

                valorMensualidad.innerHTML = mostrarValorPesosConDecimales(valorMensualidad);
                valorMensualidad2.innerHTML = mostrarValorPesosConDecimales(valorMensualidad);

                //MostrarTazaInteres();
                valorTazaInteres.innerHTML = mostrarValorPorcentaje(valorTazaInteres);


                console.log(valorMensualidad.value);
            } else {
                valorMensualidad.value = 0;

                //mostrarValorMensualidad();
                //mostrarValorMensualidad2();

                valorMensualidad.innerHTML = mostrarValorPesosConDecimales(valorMensualidad);
                valorMensualidad2.innerHTML = mostrarValorPesosConDecimales(valorMensualidad);




            }

            console.log(`hola ${btn}`)
            if (btnItemCofi.className == "item-boton activo") {

                btnItemCofi.classList.remove("activo");
                panel = false;
                // console.log(panel);
            }

            valorSelectDeCofi = undefined;
            console.log(valorSelectDeCofi);

            mostrarMensaje("Ingrese un numero mayor a 10% y menor a financiamiento");

        }
    }
    console.log(valorSelectDeCofi);

});


//calculos al presionar la opcion de cofinanciamiento
mesInputId.addEventListener("mouseup", function () {

    asignarTazaInteres();
    valorMensualidad.value = calcularMensTotal(valorFinanciamiento.value, valorTazaInteres.value, mesInputId.value);
    valorCAT.value=CAT.get(valorFinanciamiento.value,0,valorMensualidad.value,mesInputId.value*12,12);

    if (valorMensualidad.value > 0) {

        //mostrarValorMensualidad();
        //mostrarValorMensualidad2();

        valorMensualidad.innerHTML = mostrarValorPesosConDecimales(valorMensualidad);
        valorMensualidad2.innerHTML = mostrarValorPesosConDecimales(valorMensualidad);

        //MostrarTazaInteres();
        valorTazaInteres.innerHTML = mostrarValorPorcentaje(valorTazaInteres);


        mostrarCat();
        console.log(valorMensualidad.value);
    } else {
        valorMensualidad.value = 0;

        //mostrarValorMensualidad();
        //mostrarValorMensualidad2();

        valorMensualidad.innerHTML = mostrarValorPesosConDecimales(valorMensualidad);
        valorMensualidad2.innerHTML = mostrarValorPesosConDecimales(valorMensualidad);




    }

});

mesInputId.addEventListener("touchend", function () {

    asignarTazaInteres();
    valorMensualidad.value = calcularMensTotal(valorFinanciamiento.value, valorTazaInteres.value, mesInputId.value);
    valorCAT.value=CAT.get(valorFinanciamiento.value,0,valorMensualidad.value,mesInputId.value*12,12);

    if (valorMensualidad.value > 0) {

        //mostrarValorMensualidad();
        //mostrarValorMensualidad2();

        valorMensualidad.innerHTML = mostrarValorPesosConDecimales(valorMensualidad);
        valorMensualidad2.innerHTML = mostrarValorPesosConDecimales(valorMensualidad);

        //MostrarTazaInteres();
        valorTazaInteres.innerHTML = mostrarValorPorcentaje(valorTazaInteres);


        mostrarCat();
        console.log(valorMensualidad.value);
    } else {
        valorMensualidad.value = 0;

        //mostrarValorMensualidad();
        //mostrarValorMensualidad2();

        valorMensualidad.innerHTML = mostrarValorPesosConDecimales(valorMensualidad);
        valorMensualidad2.innerHTML = mostrarValorPesosConDecimales(valorMensualidad);

    }

});

//inician las funciones para asignar valores de porcentaje enganche y porcentaje cofinanciamiento


/*
function asignarPorcentajeEnganche() {


    valorPorcentEnganche = parseInt(porcentajeEnganche.value.replace(/%/g, ""));
}
*/
/*
function asignarPorcentajeCofinanciamiento() {

    valorPorcentCofi = parseInt(porcentCofi.value.replace(/%/g, ""));
}
*/

//Asigna el valor de la taza de acuerdo a los años
function asignarTazaInteres() {

    if (mesInputId.value <= 15)
        valorTazaInteres.value = 10;

    if (mesInputId.value > 15)
        valorTazaInteres.value = 11.20;

}



//inician las funciones para mostrar valores en pantalla



/*
function mostrarValorEnganche() {

    valorEnganchePesos.innerHTML = "$" + formatMoney(valorEnganchePesos.value);

}
*/

/*
function mostrarPorcentFinanciamiento() {
    porcentFinanciamiento.innerHTML = porcentFinanciamiento.value + "%";

}
*/

/*
function mostrarValorFinanciamiento() {

    valorFinanciamiento.innerHTML = "$" + formatMoney(valorFinanciamiento.value);
}
*/

/*
function mostrarValorCofin() {
    valorCofin.innerHTML = "$" + formatMoney(valorCofin.value);
}
*/



function mostrarEngancheYFinanciamiento() {

    valorEnganchePesos.value = calcularPorcentajeEnPesos(valorPorcentEnganche, montoRango.value);
    //mostrarValorEnganche();
    valorEnganchePesos.innerHTML=mostrarValorPesos(valorEnganchePesos);


    porcentFinanciamiento.value = calcDifEnPorcentaje(100, valorPorcentEnganche) - valorPorcentCofi;

    //mostrarPorcentFinanciamiento();
    porcentFinanciamiento.innerHTML = mostrarValorPorcentaje(porcentFinanciamiento);



    valorFinanciamiento.value = calcularPorcentajeEnPesos(porcentFinanciamiento.value, montoRango.value);
    //mostrarValorFinanciamiento();
    valorFinanciamiento.innerHTML = mostrarValorPesos(valorFinanciamiento);


}

/*
function mostrarValorMensualidad() {
    valorMensualidad.innerHTML = "$" + formatMoneyDecimales(valorMensualidad.value);

}

function mostrarValorMensualidad2() {
    valorMensualidad2.innerHTML = "$" + formatMoneyDecimales(valorMensualidad.value);
}
*/
/*
function MostrarMensTotal() {
    //pesosMensualidadSegYComi.innerHTML =
}
*/
/*
function MostrarTazaInteres() {
    valorTazaInteres.innerHTML = valorTazaInteres.value + "%";
}
*/
function mostrarCat(){

    valorCAT.innerHTML= valorCAT.value.formatted + "%";
}

//inician las funciones para hacer los calculos
function calcularPorcentajeEnPesos(porcentaje, total) {

    let result = (porcentaje / 100) * total;

    return result;

}

function calcDifEnPorcentaje(totalPorcentaje, porcentARestar) {
    let result = 0;
    result = totalPorcentaje - porcentARestar;
    return result;

}



function calcularMensTotal(cantidadPesos, porcentTaza, tiempoAnios) {
    let iMensual = 0;
    let result = 0;

    //iMensual = porcentTaza / 12;
    iMensual = myRound(porcentTaza/12,10);
    //iMensual = myRound(porcentTaza/12,2);

    console.log(porcentTaza);
    console.log(iMensual);

    //result = cantidadPesos * (Math.pow(1 + (iMensual / 100), tiempoAnios * 12) * iMensual / 100 / (Math.pow(1 + (iMensual / 100), tiempoAnios * 12) - 1))

    //result = cantidadPesos * (myRound(Math.pow(1 + (iMensual / 100), tiempoAnios * 12),2) * myRound(iMensual / 100,2) / (myRound(Math.pow(1 + (iMensual / 100), tiempoAnios * 12),2) - 1))
      result = cantidadPesos * (myRound(Math.pow(1 + (iMensual / 100), tiempoAnios * 12),10) * myRound(iMensual / 100,10) / (myRound(Math.pow(1 + (iMensual / 100), tiempoAnios * 12),10) - 1))
    //result = cantidadPesos * (myRound(Math.pow(1 + (iMensual / 100), tiempoAnios * 12),2) * myRound(iMensual / 100,2) / (myRound(Math.pow(1 + (iMensual / 100), tiempoAnios * 12),2) - 1))

    return result;
}


function myRound(num, dec) {
    var exp = Math.pow(10, dec || 2); // 2 decimales por defecto
    return parseInt(num * exp, 10) / exp;
}





    












