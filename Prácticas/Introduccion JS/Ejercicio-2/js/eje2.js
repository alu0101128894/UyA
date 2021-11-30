function Tomar_Valor() {
    input_text = document.querySelector("#InputText").value;
    
    console.log(input_text);

    var print = document.getElementById("info");
    print.innerHTML = "El mensaje es: " + input_text;
    
    reset();
}

function reset(){
    document.getElementById("InputText").value = "";
}