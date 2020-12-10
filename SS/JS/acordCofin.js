
let btnItems = document.querySelectorAll(".item-boton");
let panel = false;
let btn;

for (let i = 0; i < btnItems.length; i++) {

    btnItems[i].addEventListener("click", function (e) {

        btn = e.target;

        if (btn.className == "item-boton activo") {

            btn.classList.remove("activo");
            panel = false;

            valorEnganchePesos.value = calcularPorcentajeEnPesos(valorPorcentEnganche, montoRango.value);
            mostrarValorEnganche();

            porcentFinanciamiento.value = calcDifEnPorcentaje(100, valorPorcentEnganche);
            mostrarPorcentFinanciamiento();

            valorFinanciamiento.value = calcularPorcentajeEnPesos(porcentFinanciamiento.value, montoRango.value);
            mostrarValorFinanciamiento();
            //console.log(valorPorcentEnganche);

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
            console.log(panel);
        } else {
            panel = true;

            btn.classList.add("activo");
            console.log(panel);

        }


    });

}