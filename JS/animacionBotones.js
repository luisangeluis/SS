const btnMancomunado = document.querySelectorAll(".btnMancomunado");
//const btnMancomunado2 = document.querySelectorAll(".btnMancomunado2");
const btnActividad = document.querySelectorAll(".btnActividad");

for (let i = 0; i < btnMancomunado.length; i++) {

    btnMancomunado[i].addEventListener("click", function (e) {
        //console.log(e.target);
        let btn = e.target;

        if (btn.className == "btnMancomunado conColor") {
            removerClase(btnMancomunado);
            btn.classList.add("conColor");

        } else {
            removerClase(btnMancomunado);
            btn.classList.add("conColor");

        }

    });

}

for (let i = 0; i < btnActividad.length; i++) {

    btnActividad[i].addEventListener("click", function (e) {
        //console.log(e.target);
        let btn = e.target;

        if (btn.className == "btnActividad conColor") {
            removerClase(btnActividad);
            btn.classList.add("conColor");

        } else {
            removerClase(btnActividad);
            btn.classList.add("conColor");

        }

    });

}


function removerClase(pBoton) {
    for (let i = 0; i < pBoton.length; i++) {
        pBoton[i].classList.remove("conColor");

    }
    
}