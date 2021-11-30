function validaForm(){
    // Campos de texto
    if($("#PostID").val() == ""){
        alert("El campo PostID no es valido.");
        $("#PostID").focus();       // Esta función coloca el foco de escritura del usuario en el campo Nombre directamente.
        return false;
    }
    return true
}

function Vect_to_Json(data){
    var len = data.length -1;
    var result = "[" + "<br>"
    data.forEach((element, index) => {
        result += "&nbsp;&nbsp;" + "{" + "<br>"
        result += "&nbsp;&nbsp;&nbsp;&nbsp;\"postId\": " + element.postId + ",<br>";
        result += "&nbsp;&nbsp;&nbsp;&nbsp;\"id\": " + element.id + ",<br>";
        result += "&nbsp;&nbsp;&nbsp;&nbsp;\"name\": " + "\"" + element.name + "\"" + ",<br>";
        result += "&nbsp;&nbsp;&nbsp;&nbsp;\"email\": " + "\"" + element.email + "\"" + ",<br>";
        result += "&nbsp;&nbsp;&nbsp;&nbsp;\"body\": " + "\"" + element.body + "\"" + "<br>"; 
        result += "&nbsp;&nbsp;" + "}"
        if(index !== len)
            result += ","; 
        result += "<br>";
    });
    result += "]"
    return result;
}

$(document).ready(function () {
    $("#btnEnviar").click( function(e) {
        e.preventDefault();
        if(validaForm()){
            console.log($("#formulario").serialize());
            $.ajax({
                type: "GET",
                url: "https://jsonplaceholder.typicode.com/comments",
                data: $("#formulario").serialize(),
                success: function(data){
                    console.log(data)
                    $("#respuesta").html(Vect_to_Json(data));
                },
                error: function(data){
                    alert("Problemas al tratar de enviar el formulario");
                }
            });
        };
    });
});