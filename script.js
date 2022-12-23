// stock the input and display
let convert = document.getElementById("convert");
let converted = document.getElementById("converted");

// detect the input and use the function
convert.addEventListener("input", function(){
    convFranc(this.value);
});

// display the value
function convFranc(valeur){
        // the content of the variable converted * 6.56 the change for euro to french franc
        converted.textContent = valeur * 6.56;
        // if the varialbe converted is null or equal to 0 hide the text
        if (converted.textContent == null || converted.textContent == 0) {
            converted.style.opacity = "0";
        } else {
            converted.style.opacity = "1";
            // if the value return NaN request to redo the prompt
            if (converted.textContent == "NaN") {
                converted.textContent = "Vous devez saisir une valeur numérique !";
            } else {
                // add s for plural
                if (parseInt(converted.textContent) <= 1) {
                    converted.textContent += " franc"
                } else {
                    converted.textContent += " francs"
                }
            }
        }

}
    
