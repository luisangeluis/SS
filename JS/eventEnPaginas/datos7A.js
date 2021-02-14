$(document).ready(function () {
    const identificacion = $('#identificacion');
    const camara = $('#camara');

    //console.log(identificacion);

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
        console.log(jQuery(this));
        console.log(filename);
        console.log(idname);
        jQuery('span.' + idname).next().find('span').html(filename);
        }
    });
});


