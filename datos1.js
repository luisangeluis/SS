$(document).ready(function () {

    const brutomens = document.getElementById('valorbrutomens');
    let valorbrutomens;

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

       
    $('#valorbrutomens').on({

        keyup:function(e){
            
            let key = e.keyCode || e.which;

            //valorbrutomens = brutomens.value;

            valorbrutomens = this.value;
            valorbrutomens = valorbrutomens.replace(/,|\$/g, "");

            if (key == 13) {
                
                console.log(valorbrutomens)
                $('.formatoMoneda').focus();
            }
            

        }

    });

    
    
    

    

    
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
    

    function saludo(){
        alert('hola');
    }

    


    

   


});

