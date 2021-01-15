

    $(document).ready(function () {

        let valorbrutomens=0;
        let otroIngresoDatos1=0;
        let concepOtroIngresoDatos1=0;
        let otroIngreso_2_Datos1=0;
        let concepOtroIngreso_2_Datos1=0;

        
        const btnSlide = document.querySelectorAll('.btn-slide');
        const btnSlideInvert = document.querySelectorAll('.btn-slide-invert');

        /*
        $(btnResumenSlide).on({
            
            click:function(){
               expandirPanel(itemBoton,"prev");
            }
            
        });
        */
       //expandirPanelInvert(itemBoton,700);
       //expandirPanel(btnSlide,300);
       expandirPanelInvert(btnSlideInvert,430);

       for(let x=0;x<btnSlide.length;x++){
            $(btnSlide[x]).on({

                click:function(e){
    
                    let btn = e;

                    btn=e.target;
                    expandirPrueba(btn,300);

    

    
                }
           });
       }
       








           //Asignar valor a input de valor bruto
        $('#valorbrutomens').on({

            keyup:function(e){
                
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

            keyup:function(e){
                
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

            keyup:function(e){
                let key = e.keyCode || e.which;

                concepOtroIngresoDatos1 = this.value;
                console.log(concepOtroIngresoDatos1)

            }
        });
        //Animacion de opcion para otro ingreso
        $('#btnOtroIngresoSlide').on({

            click:function(){
                //expandirPanel(btnOtroIngresoSlide);
                //$('#otroIngreso_2_Datos1').focus();
        
            }
        });


        $('#otroIngreso_2_Datos1').on({

            keyup:function(e){

                let key = e.keyCode || e.which;

                otroIngreso_2_Datos1=this.value;
                otroIngreso_2_Datos1 = otroIngreso_2_Datos1.replace(/,|\$/g, "");

                if(key==13){
                    console.log(otroIngreso_2_Datos1);
                    $('#concepOtroIngreso_2_Datos1').focus();
                }
            }
        });

        $('#concepOtroIngreso_2_Datos1').on({

            keyup:function(e){
                let key = e.keyCode || e.which;

                concepOtroIngreso_2_Datos1 = this.value;
                console.log(concepOtroIngreso_2_Datos1)

            }
        });



       


        //FUNCION PARA FORMATO MONEDA

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

        

        //FUNCION PARA EXPANDIR OPCIONES
        

       function expandirPanel(pElemento,pTiempo){
            for(let x=0; x<pElemento.length;x++){
                $(pElemento[x]).on({
                    click : function(e){
                        btn = e.target;
                        $(btn).next().slideToggle(pTiempo);
                    }
                })
            }
       }

       function expandirPanelInvert(pElemento,pTiempo){
            for(x=0; x<pElemento.length;x++){
                $(pElemento[x]).on({
                
                    click: function(e){
                        let btn = e.target;
                        
                        $(btn).prev().slideToggle(pTiempo);
    
                        

                    }
                })
            }
            
        }

        function expandirPrueba(pElemento, pTiempo){
            $(pElemento).next().slideToggle(pTiempo);
        }
        

         
    });

