

$(document).ready(function () {

    let valorbrutomens = 0;
    let otroIngresoDatos1 = 0;
    let concepOtroIngresoDatos1 = 0;
    let otroIngreso_2_Datos1 = 0;
    let concepOtroIngreso_2_Datos1 = 0;

    const btnSlide = document.querySelectorAll('.btn-slide');
    const btnSlideInvert = document.querySelectorAll('.btn-slide-invert');

    //variables para botones
    const btnMancomunado = document.querySelectorAll('.btnMancomunado');
    const btnActividad = document.querySelectorAll('.btnActividad');

    //expandirPanel(btnSlide,300);
    //EXPANDIR PANEL
    for (let x = 0; x < btnSlide.length; x++) {
        $(btnSlide[x]).on({
            click: function (e) {
                let btn = e.target;
                expandirPanel(btn, 300);
            }
        });
    }

    //expandirPanelInvert(btnSlideInvert,430);
    //EXPANDIR PANEL INVERTIDO
    for (let x = 0; x < btnSlideInvert.length; x++) {
        $(btnSlideInvert[x]).on({
            click: function (e) {
                let btn = e.target;
                expandirPanelInvert(btn, 400);
            }
        });
    }

    //DAR COLOR A LOS BOTONES
    for (let x = 0; x < btnMancomunado.length; x++) {

        $(btnMancomunado[x]).on({
            click: function (e) {
                let btn = e.target;

                if (btnMancomunado[x].className == "btnMancomunado") {

                    removerClase(btnMancomunado);
                    btn.classList.add('conColor');

                }
            }
        });

    }

    for (let x = 0; x < btnActividad.length; x++) {

        $(btnActividad[x]).on({
            click: function (e) {
                let btn = e.target;

                if (btnActividad[x].className == "btnActividad") {

                    removerClase(btnActividad);
                    btn.classList.add('conColor');

                }
            }
        });

    }

    //Asignar valor a input de valor bruto
    $('#valorbrutomens').on({

        keyup: function (e) {

            let key = e.keyCode || e.which;


            valorbrutomens = this.value;
            valorbrutomens = valorbrutomens.replace(/,|\$/g, "");

            if (key == 13) {

                console.log(valorbrutomens)
                $('#otroIngresoDatos1').focus();
                e.preventDefault();
            }
        }

    });
    
    //Asignar valor a input de valor de otro ingreso

    $('#otroIngresoDatos1').on({

        keyup: function (e) {

            let key = e.keyCode || e.which;


            otroIngresoDatos1 = this.value;
            otroIngresoDatos1 = otroIngresoDatos1.replace(/,|\$/g, "");

            if (key == 13) {

                console.log(otroIngresoDatos1)
                $('#concepOtroIngresoDatos1').focus();
            }


        }

    });

    //Asignar valor a input de valor de concepto otro ingreso

    $('#concepOtroIngresoDatos1').on({

        keyup: function (e) {
            let key = e.keyCode || e.which;

            concepOtroIngresoDatos1 = this.value;
            console.log(concepOtroIngresoDatos1)

        }
    });


    $('#otroIngreso_2_Datos1').on({

        keyup: function (e) {

            let key = e.keyCode || e.which;

            otroIngreso_2_Datos1 = this.value;
            otroIngreso_2_Datos1 = otroIngreso_2_Datos1.replace(/,|\$/g, "");

            if (key == 13) {
                console.log(otroIngreso_2_Datos1);
                $('#concepOtroIngreso_2_Datos1').focus();
            }
        }
    });

    $('#concepOtroIngreso_2_Datos1').on({

        keyup: function (e) {
            let key = e.keyCode || e.which;

            concepOtroIngreso_2_Datos1 = this.value;
            console.log(concepOtroIngreso_2_Datos1)

        }
    });



});

