// stock the input and display
let convert = document.getElementById("convert");
let converted = document.getElementById("converted");

// detect and use the function
convert.addEventListener("input", function(){
    convFranc(this.value);
});

// display the value
function convFranc(valeur){
        converted.textContent = valeur * 6.56;
    }