function sendCode() {
    var x = document.getElementById("phoneCode");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

const sendMessage = () => {
    var x = document.getElementById("phoneCode");
    var y = document.getElementById('phomeMessage');

    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "block";
    }
};

sendCode();