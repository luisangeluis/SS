$(document).ready(function(){

    const dia = document.querySelector('#dia');
    const mes = document.querySelector('#mes');
    const year = document.querySelector('#year');



    $(dia).on({
        keyup: function(e){

            let key = e.keyCode || e.which;

            if(key == 13){
                $(mes).focus();
            }
        },

        focusout: function(){

            if(dia.value<=0){
                dia.value=1;
                alert('dia no valido');
                
            }

            if(dia.value>diasEnMes()){

                dia.value=1;
                dia.innerHTML=dia.value;
                alert('dia no valido');

            }
        
        }
       
    });

    $(mes).on({
        keyup: function(e){

            let key = e.keyCode || e.which;
            
            if(key == 13){
                $(year).focus();
            }
        },

        focusout:function(){
            if(mes.value<=0){
                mes.value=1;
                alert('dia no valido');
                
            }

            if(mes.value>12){


                mes.value=1;
            }
        }
    });

    $(year).on({
        keyup: function(e){

            let key = e.keyCode || e.which;
            
            if(key == 13){
                $(year).focus();
            }
        },

        focusout: function(){
            if(year.value<1920){
                year.value=1920;
            }

        }
    });

    function diasEnMes(){
        return new Date(year.value,mes.value,0).getDate();
    }


});