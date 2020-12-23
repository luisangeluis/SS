$(document).ready(function () {

    const brutomens = document.getElementById('valorbrutomens');
    let valorbrutomens;


    function formatoMoneda(selector) {

    }

    $(".formatoMoneda").on({
        "focus": function (event) {
            $(event.target).select();
        },
        "keyup": function (event) {
            $(event.target).val(function (index, value) {
                return '$' + value.replace(/\D/g, "")
                    .replace(/([0-9])([0-9]{2})$/, '$1.$2')
                    .replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ",");


            });
        }
    });

    //v=document.getElementById('valorbrutomens');

    /*
    brutomens.addEventListener("blur",function(){

        valorbrutomens=brutomens.value;

        valorbrutomens=valorbrutomens.replace(/,|\$/g, "");

        console.log(valorbrutomens)
    });
    */

    $('#valorbrutomens').on('keyup', function (e) {
        let key = e.keyCode || e.which;

        

        if (key == 13) {
            valorbrutomens = brutomens.value;

            valorbrutomens = valorbrutomens.replace(/,|\$/g, "");

            console.log(valorbrutomens)

            //alert("Enter");

        }
    }
    
    );

    brutomens.addEventListener("blur",function(){
        valorbrutomens = brutomens.value;

            valorbrutomens = valorbrutomens.replace(/,|\$/g, "");

            console.log(valorbrutomens)
    });


});

