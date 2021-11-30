window.onload = function() {
    var info = document.getElementById("informacion");
  
    // Numero de parrafos en la pagina
    var parrafos = document.getElementsByTagName("p");
    info.innerHTML = "Numero de parrafos = " + parrafos.length;
  
    // Numero de enlaces de la pagina
    var enlaces = document.getElementsByTagName("a");
    info.innerHTML = info.innerHTML + "<br/>" + "Numero de enlaces = " + enlaces.length;
  
    // Numero de div de la pagina
    var enlaces = document.getElementsByTagName("div");
    info.innerHTML = info.innerHTML + "<br/>" + "Numero de div = " + enlaces.length;
  }