$(document).ready(function () {
    const identificacion = $('#identificacion');
    const camara = $('#camara');
    const btnSlideInvert=document.querySelectorAll('.btn-slide-invert');
    
        for(let x=0; x<btnSlideInvert.length;x++){
            $(btnSlideInvert).on({
                click: function(){
                    expandirPanelInvert(btnSlideInvert[x],450);
    
                }
            });
        }
    
    $(identificacion).change(function () {
        var filename = jQuery(this).val().split('\\').pop();
        var idname = jQuery(this).attr('id');
        console.log(jQuery(this));
        console.log(filename);
        console.log(idname);
        jQuery('span.' + idname).next().find('span').html(filename);
    });

    $(camara).on({
        change: function(){
            var filename = jQuery(this).val().split('\\').pop();
            var idname = jQuery(this).attr('id');
        
        jQuery('span.' + idname).next().find('span').html(filename);
        }
    });
});


