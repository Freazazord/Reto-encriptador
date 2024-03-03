function encriptadora(){
    
    var entrada = document.getElementById("entrada").value;

    var entradacifrada = entrada.replace(/e/img, "enter");
    var entradacifrada = entradacifrada.replace(/i/img, "imes");
    var entradacifrada = entradacifrada.replace(/a/img, "ai");
    var entradacifrada = entradacifrada.replace(/o/img, "ober");
    var entradacifrada = entradacifrada.replace(/u/img, "ufat");
   
    document.getElementById("salida").value=entradacifrada;
    copiador.style.display = "inline";

}

function desencriptadora(){
    
    var entrada = document.getElementById("entrada").value;

    var entradacifrada = entrada.replace(/enter/img, "e");
    var entradacifrada = entradacifrada.replace(/imes/img, "i");
    var entradacifrada = entradacifrada.replace(/ai/img, "a");
    var entradacifrada = entradacifrada.replace(/ober/img, "o");
    var entradacifrada = entradacifrada.replace(/ufat/img, "u");
   
    document.getElementById("salida").value=entradacifrada;

}

function copiadora(){

    let salida = document.getElementById("salida");
    salida.select();
    salida.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(salida.value);

}