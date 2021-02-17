$(document).ready(function(){
    const btnSlideInvert=document.querySelectorAll('.btn-slide-invert');

    for(let x=0; x<btnSlideInvert.length;x++){
        $(btnSlideInvert).on({
            click: function(){
                expandirPanelInvert(btnSlideInvert[x],450);

            }
        });
    }
});