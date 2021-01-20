$(document).ready(function () {

    const dia = document.querySelector('#dia');
    const mes = document.querySelector('#mes');
    const year = document.querySelector('#year');

    let yearActual = (new Date).getFullYear();
    let mesActual = (new Date).getMonth() + 1;
    let diaActual = (new Date).getDate();


    //INPUT DIA
    $(dia).on({
        keyup: function (e) {

            let key = e.keyCode || e.which;

            if (key == 13) {
                $(mes).focus();
            }
        },
        focusout: function () {

            if (dia.value <= 0 || dia.value>diasEnMes()) {
                reiniciarFecha();
                alert('dia no valido');

            }
            
            validarEdad();
        }

    });
    //INPUT MES
    $(mes).on({
        keyup: function (e) {

            let key = e.keyCode || e.which;

            if (key == 13) {
                $(year).focus();
            }
        },
        focusout: function () {
            if (mes.value <= 0 || mes.value>12) {
                mes.value = 1;
                alert('dia no valido');

            }
            
            if(mes.value==2){
                if (dia.value > diasEnMes()) {

                    reiniciarFecha();
                    alert('dia no valido');
    
                }
            }

            if(mes.value==4 || mes.value==6 || mes.value==9 || mes.value==11){
                if (dia.value > diasEnMes()) {

                    reiniciarFecha();
                    alert('dia no valido');
    
                }
            }

            validarEdad();
        }
    });
    //INPUT AÑO
    $(year).on({
        keyup: function (e) {

            let key = e.keyCode || e.which;

            if (key == 13) {
                $(year).focus();
            }
        },

        focusout: function () {
            //yearActual=new Date;
            console.log(yearActual);
            console.log(mesActual);
            console.log(diaActual);

            if (year.value < 1920 || year.value > (yearActual - 18)) {
                reiniciarFecha();
                alert('La persona debe ser mayor de edad');
            }

            if(!validarYearBisiesto() && dia.value>28 && mes.value==2){
                reiniciarFecha();
                alert('Fecha no valida');
            }
            validarEdad();

        }
    });

    //RETORNA CUANTOS DIAS HAY CON REFERENCIA AL MES Y AÑO
    function diasEnMes() {
        return new Date(year.value, mes.value, 0).getDate();
    }

    function reiniciarFecha() {
        dia.value = 1;
        mes.value = 1;
        year.value = 1920;
    }
    //VALIDAR SI ES MAYOR DE EDAD
    function validarEdad() {
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
    //VALIDAR SI ES AÑO BISIESTO
    function validarYearBisiesto(){

            if(year.value%5!=0){   
                
                return false;
                
            }
        
        return true;
    }


});