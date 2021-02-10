$(document).ready(function () {
    const btnSlide = document.querySelectorAll('.btn-slide');
    const btnSlideInvert = document.querySelectorAll('.btn-slide-invert');
    

    


        
    
    
    //panel slide de agregar otro ingreso

    for(let x=0; x<btnSlide.length;x++){
        $(btnSlide[x]).on({
            click: function () {
                //$(slideContenido).slideToggle();
                //let btn = e.target;
                
                expandirPanel(btnSlide[x],300);
            }
        })
    }
    
    for(let x=0; x<btnSlideInvert.length;x++){
        $(btnSlideInvert[x]).on({
            click: function(e){
                expandirPanelInvert(btnSlideInvert[x],450);
            }
        })

    }
    
    
    
});
