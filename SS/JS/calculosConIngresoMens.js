const preApruebaHipoteca = document.getElementById('preApruebaHipoteca');
let ingresosTotales = 0;

let ingresosRequeridos=0;

preApruebaHipoteca.disabled = true;



ingresoMensNeto.addEventListener("blur", function (e) {

    valorIngresoMensNeto = e.path[0].value;
    valorIngresoMensNeto = parseFloat(valorIngresoMensNeto.replace(/\$|,/g, ""));
    console.log(valorIngresoMensNeto);

    /*    
    if(panelOtroIngreso==true){
        ingresosTotales = valorIngresoMensNeto +valorOtroIngreso;
    }else{
        ingresosTotales = valorIngresoMensNeto;
    }
    */
    ingresosRequeridos = valorMensualidad.value*3;
    if (valorIngresoMensNeto > 0) {
        calcularIngresosTotales();
        console.log(`ingresos totales: ${ingresosTotales}`);

        //ingresosRequeridos = valorMensualidad.value*3;
        if(ingresosTotales<ingresosRequeridos){
            preApruebaHipoteca.disabled = true;
            mostrarMensajeMenosCantidad();

        }else{

            preApruebaHipoteca.disabled = false;
        }

    } else {
        valorIngresoMensNeto = 0;
        valorOtroIngreso = 0;
        calcularIngresosTotales();

        btnOtroIngreso.classList.remove("activo");
        panelOtroIngreso = false;
        console.log(`ingresos totales: ${ingresosTotales}`);

        //alert("ingrese un valor mayor a 0");
        preApruebaHipoteca.disabled = true;
        mostrarMensaje("Ingrese un valor mayor a 0");

    }

    /*
    if(ingresosTotales<(valorMensualidad.value*3)){

        alert("faltan ingresos");
    }
    */

});


otroIngreso.addEventListener("blur", function (e) {

    valorOtroIngreso = e.path[0].value;
    valorOtroIngreso = parseFloat(valorOtroIngreso.replace(/\$|,/g, ""));
    console.log(valorOtroIngreso);

    if(valorOtroIngreso>0 && valorIngresoMensNeto>0){
        calcularIngresosTotales();
        console.log(`ingresos totales: ${ingresosTotales}`);

        if(ingresosTotales<ingresosRequeridos){
            preApruebaHipoteca.disabled = true;
            mostrarMensajeMenosCantidad();
        }else{
            preApruebaHipoteca.disabled = false;
        }

    }else{
        valorOtroIngreso=0;
        calcularIngresosTotales();
        btnOtroIngreso.classList.remove("activo");
        panelOtroIngreso = false;
        console.log(`ingresos totales: ${ingresosTotales}`);

        //if(valorIngresoMensNeto<=0)
        //alert("ingrese un valor mayor a 0");

        if(valorIngresoMensNeto<=0){
            mostrarMensaje("Confirme la cantidad Ingreso Mensual neto");
        }

        console.log(valorIngresoMensNeto);
        console.log(valorOtroIngreso);
        console.log(ingresosTotales);

    }
    


});


function mostrarMensajeMenosCantidad(text){

    Swal.fire({
        //SE HACEN CAMBIOS EN CSS stylescasa2.css al final
        title: "Ingresos insuficientes",
        text: text,
        html: '<p class="colorNegro"><br> <b>Tu mensualidad no debe rebasar el 33% de tus ingresos totales.<br>Agrega otro Ingreso.<br>O<a href="./temphipot.html"><b> presiona aqui</b></a> para calcular de acuerdo a tu capacidad de ingresos  </b></p>',
        icon: 'warning',
        confirmButtonText: 'Aceptar',
        width: '',
        padding: '5px',
        background: '',
        backdrop: false,
        toast:false,
        allowOutsideClick:false,
        allowEscapeKey:true,
        allowEnterKey:true,
        stopKeydownPropagation:false,

    });
}

function mostrarMensaje(text){

    Swal.fire({

        title: "AVISO",
        text: text,
        icon: 'warning',
        confirmButtonText: 'aceptar',
        width: '',
        padding: '5px',
        background: '',
        backdrop: false,
        toast:false,
        allowOutsideClick:false,
        allowEscapeKey:true,
        allowEnterKey:true,
        stopKeydownPropagation:false,

    });
}



function calcularIngresosTotales() {

    if (panelOtroIngreso == true) {
        ingresosTotales = valorIngresoMensNeto + valorOtroIngreso;
    } else {
        ingresosTotales = valorIngresoMensNeto;
    }


}


function calcularDiferenciaIngresosTotAMens(ingTotales, mens){
let result =ingTotales-mens;
return result;

}

 















/*
ingresosTotales=valorIngresoMensNeto+valorOtrosIngresos;

if(ingresosTotales>=(valorMensualidad.value*3)){

    preApruebaHipoteca.disabled=false;

}
*/



