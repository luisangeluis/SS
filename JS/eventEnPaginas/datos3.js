$(document).ready(function () {
    //PANEL SLIDE
    const btnSlideInvert = document.querySelectorAll('.btn-slide-invert');
    //INPUT CALLE
    const calle = document.querySelector('#calle');
    //INPUT NUMERO EXTERIOR
    const numExt = document.querySelector('#numExt');
    //INPUT NUMERO INTERIOR
    const numInt = document.querySelector('#numInt');
    //INPUT CODIGO POSTAL
    const zip = document.querySelector('#zip');
    //INPUT COLONIA
    const colonia = document.querySelector('#colonia');
    //INPUT MUNICIPIO
    const municipio = document.querySelector('#municipio');
    //INPUT CIUDAD
    const ciudad = document.querySelector('#ciudad');
    //INPUT ESTADO
    const estado = document.querySelector('#estado');

    //BOTONES VIVIENDA
    const btnVivienda = document.querySelectorAll('.btnVivienda');


    //EXPANDIR PANEL
    $(btnSlideInvert).on({
        click: function () {
            expandirPanelInvert(btnSlideInvert, 400);
        }
    });
    //INPUT CALLE{
    $(calle).on({
        keyup: function (e) {
            detectarEnter(e, numExt);
        }
    });
    //INPUT NUMERO EXTERIOR
    $(numExt).on({
        keyup: function (e) {
            detectarEnter(e, numInt);
        }
    });
    //INPUT NUMERO INTERIOR
    $(numInt).on({
        keyup: function (e) {
            detectarEnter(e, zip);
        }
    });


    //INPUT CODIGO POSTAL
    $(zip).on({
        focusout: function () {
            if (zip.value < 0000 || zip.value > 99999) {
                zip.value = 0000;
                alert('Codigo postal no valido');
            }
        },
        keyup: function (e) {
            let key = e.keyCode || e.which;

            if (key == 13) {
                $(colonia).focus();
            }
        }

    });
    //INPUT  COLONIA
    $(colonia).on({
        keyup: function (e) {
            detectarEnter(e, municipio);
        }
    });
    //INPUT MUNCIPIO
    $(municipio).on({
        keyup: function (e) {
            detectarEnter(e, ciudad);
        }
    });
    //INPUT ciudad
    $(ciudad).on({
        keyup: function (e) {
            detectarEnter(e, estado);
        }
    });
    //BOTONES DE TIPO DE VIVIENDA
    $(btnVivienda).on({
        click:function(e){
            let btn = e.target;
            removerClase(btnVivienda);
            btn.classList.add('conColor');
        }
    });


});