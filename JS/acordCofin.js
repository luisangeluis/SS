

/*
let btnItemCofi = document.querySelectorAll(".item-boton");
let panel = false;
let btn;
  
  for(let i=0; i<btnItemCofi.length; i++){
  
    btnItemCofi[i].addEventListener("click", function(e){
  
      btn = e.target;
  
      if(btn.className=="item-boton activo"){
  
        btn.classList.remove("activo");
        panel = false;

        valorEnganchePesos.value = calcularPorcentajeEnPesos(valorPorcentEnganche, montoRango.value);
        mostrarValorEnganche();

        porcentFinanciamiento.value = calcDifEnPorcentaje(100, valorPorcentEnganche);
        mostrarPorcentFinanciamiento();

        valorFinanciamiento.value = calcularPorcentajeEnPesos(porcentFinanciamiento.value, montoRango.value);
        mostrarValorFinanciamiento();
        //console.log(valorPorcentEnganche);

        valorPorcentCofi=0;
        valorCofin.value=0;
        mostrarValorCofin();
        
        valorMensualidad.value = calcularMensualidad(valorFinanciamiento.value,mesInputId.value);
        if(valorMensualidad.value>0){
          mostrarValorMensualidad();
          console.log(valorMensualidad.value);
        }else{
          valorMensualidad.value=0;
          mostrarValorMensualidad();
          console.log(valorFinanciamiento.value);
          console.log(mesInputId.value);
          console.log(valorMensualidad.value);

        
        }
        console.log(panel);
      }else{
        panel = true;

        btn.classList.add("activo");
        console.log(panel);

      }
  
  
    });
  
  }

*/

const btnItemCofi= document.getElementById('botonCofi');
let panel = false;
let btn;

const btnOtroIngreso = document.getElementById('btnOtroIngreso');
let panelOtroIngreso = false;

const inst = document.getElementById('inst');
/*
if(panel==true){

  inst = document.getElementById('inst');
  console.log("valoir de tipo de infonavit "+inst.value);
}
*/

//ANIMACION DE LA OPCION COFINANCIAMIENTO
btnItemCofi.addEventListener("click", function () {

  if (btnItemCofi.className == "item-boton activo") {

    btnItemCofi.classList.remove("activo");
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
    //mostrarEngancheYFinanciamiento();
    mostrarValorCofin();

    
    asignarTazaInteres();
    valorMensualidad.value = calcularMensTotal(valorFinanciamiento.value,11.2,mesInputId.value);
    valorCAT.value=CAT.get(valorFinanciamiento.value,0,valorMensualidad.value,mesInputId.value*12,12);

    if (valorMensualidad.value > 0) {
      mostrarValorMensualidad();
      mostrarValorMensualidad2();
      MostrarTazaInteres();
      mostrarCat();

      console.log(valorMensualidad.value);
    } else {
      valorMensualidad.value = 0;
      mostrarValorMensualidad();
      mostrarValorMensualidad2
      console.log(valorFinanciamiento.value);
      console.log(mesInputId.value);
      console.log(valorMensualidad.value);


    }

    valorSelectDeCofi= undefined;
    console.log(valorSelectDeCofi);
    console.log(valorSelectDeCofi);
  } else {
    panel = true;

    btnItemCofi.classList.add("activo");
    console.log(panel);
    valorSelectDeCofi=inst.value;
    console.log(valorSelectDeCofi);


  }



});


//ANIMACION DE LA OPCION OTRO INGRESO
btnOtroIngreso.addEventListener("click",function(){
  if (btnOtroIngreso.className == "item-boton activo") {

    btnOtroIngreso.classList.remove("activo");
    panelOtroIngreso = false;

    
    //valorEnganchePesos.value = calcularPorcentajeEnPesos(valorPorcentEnganche, montoRango.value);
    //mostrarValorEnganche();

    //porcentFinanciamiento.value = calcDifEnPorcentaje(100, valorPorcentEnganche);
    //mostrarPorcentFinanciamiento();

    //valorFinanciamiento.value = calcularPorcentajeEnPesos(porcentFinanciamiento.value, montoRango.value);
    //mostrarValorFinanciamiento();
    //console.log(valorPorcentEnganche);
    valorOtroIngreso=0;
    ingresosTotales=0;
    calcularIngresosTotales();
    console.log(`ingresos totales: ${ingresosTotales}`);

    if(ingresosTotales<ingresosRequeridos){
      preApruebaHipoteca.disabled = true;
      mostrarMensajeMenosCantidad("Ingrese un valor del inmueble menor");

    }


    
  } else {
    panelOtroIngreso = true;

    btnOtroIngreso.classList.add("activo");
    console.log(`ingresos totales: ${ingresosTotales}`);
  }


});

