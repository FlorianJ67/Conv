// stock the input and display
let convert = document.getElementById("convert");
let converted = document.getElementById("converted");

// detect the input and use the function
convert.addEventListener("input", function(){
    convFranc(this.value);
});

// display the value
function convFranc(valeur){
        converted.textContent = valeur * 6.56;
        if (converted.textContent == null || converted.textContent == 0) {
            converted.style.opacity = "0";
        } else {
            converted.style.opacity = "1";
            if (converted.textContent == "NaN") {
                converted.textContent = "Vous devez saisir une valeur numérique !";
            } else {
                if (parseInt(converted.textContent) <= 1) {
                    converted.textContent += " franc"
                } else {
                    converted.textContent += " francs"
                }
            }
        }

}
    