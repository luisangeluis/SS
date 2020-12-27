

//FUNCTION PARA FORMATO MONEDA
$(document).ready(function () {

    let valorbrutomens;
    let valorBrutoMens2;
    const btnOtroIngresoSlide = document.getElementById('btnOtroIngresoSlide');

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

       //Asignar valor a input de valor bruto
    $('#valorbrutomens').on({

        keyup:function(e){
            
            let key = e.keyCode || e.which;


            valorbrutomens = this.value;
            valorbrutomens = valorbrutomens.replace(/,|\$/g, "");

            if (key == 13) {
                
                console.log(valorbrutomens)
                $('.formatoMoneda').focus();
            }
            

        }

    });

    $('#valorbrutomens2').on({

        keyup:function(e){
            
            let key = e.keyCode || e.which;


            valorBrutoMens2 = this.value;
            valorBrutoMens2 = valorBrutoMens2.replace(/,|\$/g, "");

            if (key == 13) {
                
                console.log(valorBrutoMens2)
                $('#conceptobrutomens2').focus();
            }
            

        }

    });

    /*
    //Asignar valor a Otros ingresos
    $('#valorbrutomens2').on({

        keyup:function(e){
            
            let key = e.keyCode || e.which;

            //valorbrutomens = brutomens.value;

            valorBrutoMens2 = this.value;
            valorBrutoMens2 = valorBrutoMens2.replace(/,|\$/g, "");


            //console.log(valorbrutomens2)


            if (key == 13) {
                
                //console.log(valorbrutomens2)
                $('#conceptobrutomens2').focus();
            }
            

        }

    });
    */

    $('#btnOtroIngresoSlide').on({

        click:function(){
            expandirPanel(btnOtroIngresoSlide);        }
    });


    function expandirPanel(pPanel){
        if(pPanel!=undefined){
            if(pPanel.className=="item-boton activo"){

                pPanel.classList.remove("activo");
            }else{
                pPanel.classList.add('activo');
            }
        }


    }

    

    
    
    

    
    function saludo(){
        alert('hola');
    }
    
    /*
    brutomens.addEventListener('blur',function(e){

        valorbrutomens = brutomens.value;
        valorbrutomens = valorbrutomens.replace(/,|\$/g, "");
            //$('.formatoMoneda').focus();
            //inputCharacters(key);

        console.log('valor en blur: '+valorbrutomens)



        
    });
    
    */

    /*
    brutomens.addEventListener('keyup',function(e){

        let key = e.keyCode || e.which;

        valorbrutomens = brutomens.value;
        valorbrutomens = valorbrutomens.replace(/,|\$/g, "");

        if(key===13){
            
            console.log('valor: '+valorbrutomens)
            $(".formatoMoneda").focus();

        }
    
    });

    */
});

