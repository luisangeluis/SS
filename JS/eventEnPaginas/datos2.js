$(document).ready(function () {

    //INPUTS FECHA
    const dia = document.querySelector('#dia');
    const mes = document.querySelector('#mes');
    const year = document.querySelector('#year');

    //PANEL SLIDE INVERTIDO
    const btnSlideInvert = document.querySelectorAll('.btn-slide-invert');
    const btnSexo = document.querySelectorAll('.btnSexo');
    const btnEdoCivil = document.querySelectorAll('.btnEdoCivil');

    //FECHA ACTUAL
    let yearActual = (new Date).getFullYear();
    let mesActual = (new Date).getMonth() + 1;
    let diaActual = (new Date).getDate();
    //INPUT EMAIL
    const email = document.querySelector('#email');

    for(let x=0; x<btnSlideInvert.length;x++){
        $(btnSlideInvert[x]).on({
            click:function(){
                expandirPanelInvert(btnSlideInvert[x],400);
            }
        });
    }

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

            /*
            if(!validarYearBisiesto() && dia.value>28 && mes.value==2){
                reiniciarFecha();
                alert('Fecha no valida');
            }
            validarEdad();
            */

            if(dia.value>diasEnMes()){
                reiniciarFecha();
                alert('Fecha no valida');
            }
        }
    });
    //BOTONES SEXO
    $(btnSexo).on({
        click:function(e){
           let btn = e.target; 

            removerClase(btnSexo);
            btn.classList.add('conColor');
        }
    })
    //BOTONES ESTADO CIVIL
    $(btnEdoCivil).on({
        click:function(e){
           let btn = e.target; 

            removerClase(btnEdoCivil);
            btn.classList.add('conColor');
        }
    })

    $(email).on({
        focusout:function(){
            if(validarCorreo(email.value)!=true){
                email.value="";
                alert('correo no valido');
            }
            
        }
    });


});