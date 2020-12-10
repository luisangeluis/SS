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


var input = document.querySelector("input[type=range]");
input.style.setProperty("--value", input.value / 100000 - 2.5);
input.addEventListener("input", function (evt) {
    input.style.setProperty("--value", input.value / 100000 - 2.5);
},
    false);



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


//***Calculos con el valor de Rango***
//***variables para calculos con el valor de rango***

const porcentajeEnganche = document.getElementById('porcentajeenganche');
let valorPorcentEnganche = 0;
const valorEnganchePesos = document.getElementById('valorenganche');
const porcentFinanciamiento = document.getElementById('porcentFinanciamiento');
const valorFinanciamiento = document.getElementById('valorFinanciamiento');
const porcentCofi = document.getElementById('porcentCofi');
let valorPorcentCofi = 0;
const valorCofin = document.getElementById('valorCofin');
let mesInputId = document.getElementById('mesInputId');
const valorMensualidad = document.getElementById('valorMensualidad');
const ingresoMensNeto = document.getElementById('ingresoMensNeto');
let valorIngresoMensNeto = 0;
const otrosIngresos = document.getElementById('otrosIngresos');
let valorOtrosIngresos = 0;

//formato a las entradas de porcentajes y entradas de pesos
$("#porcentajeenganche").mask("00%");
$("#porcentCofi").mask("00%");
$("#ingresoMensNeto").maskMoney({ prefix: '$' });
$("#otrosIngresos").maskMoney({ prefix: '$' });
$("#valorbrutomens").maskMoney({ prefix: '$' });



//calculos al mover la barra de valor del inmueble
montoRango.addEventListener("mouseup", function () {
    asignarPorcentajeEnganche();

    if (valorPorcentEnganche >= 10 && valorPorcentEnganche <= 80) {

        if (panel == true) {

            valorEnganchePesos.value = calcularPorcentajeEnPesos(valorPorcentEnganche, montoRango.value);
            mostrarValorEnganche();
            console.log(valorEnganchePesos.value);

            porcentFinanciamiento.value = calcDifEnPorcentaje(100, valorPorcentEnganche) - valorPorcentCofi;
            mostrarPorcentFinanciamiento();

            valorFinanciamiento.value = calcularPorcentajeEnPesos(porcentFinanciamiento.value, montoRango.value);
            mostrarValorFinanciamiento();

            valorCofin.value = calcularPorcentajeEnPesos(valorPorcentCofi, montoRango.value);
            mostrarValorCofin();
            console.log(panel);

        } else {
            valorEnganchePesos.value = calcularPorcentajeEnPesos(valorPorcentEnganche, montoRango.value);
            mostrarValorEnganche();
            console.log(valorEnganchePesos.value);
            porcentFinanciamiento.value = calcDifEnPorcentaje(100, valorPorcentEnganche);
            mostrarPorcentFinanciamiento();

            valorFinanciamiento.value = calcularPorcentajeEnPesos(porcentFinanciamiento.value, montoRango.value);
            mostrarValorFinanciamiento();
        }

        valorMensualidad.value = calcularMensualidad(valorFinanciamiento.value, mesInputId.value);
        if (valorMensualidad.value > 0) {
            mostrarValorMensualidad();
            console.log(valorMensualidad.value);
        } else {
            valorMensualidad.value = 0;
            mostrarValorMensualidad();
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
    asignarPorcentajeEnganche();

    if (valorPorcentEnganche >= 10 && valorPorcentEnganche <= 80) {

        valorEnganchePesos.value = calcularPorcentajeEnPesos(valorPorcentEnganche, montoRango.value);
        mostrarValorEnganche();
        porcentFinanciamiento.value = calcDifEnPorcentaje(100, valorPorcentEnganche);
        mostrarPorcentFinanciamiento();
        valorFinanciamiento.value = calcularPorcentajeEnPesos(porcentFinanciamiento.value, montoRango.value);
        mostrarValorFinanciamiento();
        valorPorcentCofi = 0;
        valorCofin.value = 0;
        mostrarValorCofin();

        valorMensualidad.value = calcularMensualidad(valorFinanciamiento.value, mesInputId.value);
        if (valorMensualidad.value > 0) {
            mostrarValorMensualidad();
            console.log(valorMensualidad.value);
        } else {
            valorMensualidad.value = 0;
            mostrarValorMensualidad();
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
        alert("ingrese un valor entre 10 y 80 por ciento");
        valorPorcentCofi = 0;
        valorCofin.value = 0;
        mostrarValorCofin();
        valorMensualidad.value = 0;
        mostrarValorMensualidad();

    }

    valorPorcentCofi = 0;
    if (btn.className == "item-boton activo") {

        btn.classList.remove("activo");
        panel = false;
        // console.log(panel);
    }
    valorPorcentCofi.style.setProperty("--value", "0%");
    //console.log(valorPorcentCofi);

});

//calculos al mover el porcentaje de cofinanciamiento
porcentCofi.addEventListener("blur", function () {

    if (panel == true) {
        asignarPorcentajeCofinanciamiento();

        if ((valorPorcentEnganche >= 10 && valorPorcentEnganche <= 80) && (valorPorcentCofi <= (100 - valorPorcentEnganche) - 1 && valorPorcentCofi >= 10)) {

            //porcentFinanciamiento.value=calcDifEnPorcentaje(porcentFinanciamiento.value,valorPorcentCofi);
            porcentFinanciamiento.value = calcDifEnPorcentaje(100, valorPorcentEnganche) - valorPorcentCofi;
            mostrarPorcentFinanciamiento();
            valorFinanciamiento.value = calcularPorcentajeEnPesos(porcentFinanciamiento.value, montoRango.value);
            mostrarValorFinanciamiento();
            valorCofin.value = calcularPorcentajeEnPesos(valorPorcentCofi, montoRango.value);
            mostrarValorCofin();
            console.log(valorPorcentCofi);

            valorMensualidad.value = calcularMensualidad(valorFinanciamiento.value, mesInputId.value);
            if (valorMensualidad.value > 0) {
                mostrarValorMensualidad();
                console.log(valorMensualidad.value);
            } else {
                valorMensualidad.value = 0;
                mostrarValorMensualidad();
                console.log(valorFinanciamiento.value);
                console.log(mesInputId.value);
                console.log(valorMensualidad.value);


            }

        } else {

            //investigar como actualizar los valores del input para no volver a recalcular todo
            if (valorPorcentEnganche >= 10 && valorPorcentEnganche <= 80) {

                valorEnganchePesos.value = calcularPorcentajeEnPesos(valorPorcentEnganche, montoRango.value);
                mostrarValorEnganche();
                porcentFinanciamiento.value = calcDifEnPorcentaje(100, valorPorcentEnganche);
                mostrarPorcentFinanciamiento();
                valorFinanciamiento.value = calcularPorcentajeEnPesos(porcentFinanciamiento.value, montoRango.value);
                mostrarValorFinanciamiento();

            }

            valorPorcentCofi = 0;
            valorCofin.value = 0;
            mostrarValorCofin();

            valorMensualidad.value = calcularMensualidad(valorFinanciamiento.value, mesInputId.value);
            if (valorMensualidad.value > 0) {
                mostrarValorMensualidad();
                console.log(valorMensualidad.value);
            } else {
                valorMensualidad.value = 0;
                mostrarValorMensualidad();
                console.log(valorFinanciamiento.value);
                console.log(mesInputId.value);
                console.log(valorMensualidad.value);


            }

            if (btn.className == "item-boton activo") {

                btn.classList.remove("activo");
                panel = false;
                // console.log(panel);
            }

            alert("Ingrese un numero mayor a 10% o menor a 89%");

        }
    }


});


//calculos al presionar la opcion de cofinanciamiento
mesInputId.addEventListener("mouseup", function () {

    valorMensualidad.value = calcularMensualidad(valorFinanciamiento.value, mesInputId.value);
    if (valorMensualidad.value > 0) {
        mostrarValorMensualidad();
        console.log(valorMensualidad.value);
    } else {
        valorMensualidad.value = 0;
        mostrarValorMensualidad();



    }

});

//inician las funciones para asignar valores de porcentaje enganche y porcentaje cofinanciamiento
function asignarPorcentajeEnganche() {


    valorPorcentEnganche = parseInt(porcentajeEnganche.value.replace(/%/g, ""));
}

function asignarPorcentajeCofinanciamiento() {

    valorPorcentCofi = parseInt(porcentCofi.value.replace(/%/g, ""));
}


//inician las funciones para mostrar valores en pantalla
function mostrarValorEnganche() {

    valorEnganchePesos.innerHTML = "$" + formatMoney(valorEnganchePesos.value);

}

function mostrarPorcentFinanciamiento() {
    porcentFinanciamiento.innerHTML = porcentFinanciamiento.value + "%";

}

function mostrarValorFinanciamiento() {

    valorFinanciamiento.innerHTML = "$" + formatMoney(valorFinanciamiento.value);
}

function mostrarValorCofin() {
    valorCofin.innerHTML = "$" + formatMoney(valorCofin.value);
}

function mostrarValorMensualidad() {
    valorMensualidad.innerHTML = "$" + formatMoneyDecimales(valorMensualidad.value);
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

function calcularMensualidad(total, anios) {
    let result = 0;
    result = total / (anios * 12);
    return result;
}

