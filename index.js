function encriptar() {
    let texto= document.getElementById("texto").Value;
    let tituloMemsaje= document.getElementById("titulo-mensaje");
    let parrafo =document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado =texto
         .replace(/e/gi, "enter")
         .replace(/i/gi, "imes")
         .replace(/a/gi, "ai")
         .replace(/o/gi, "ober")
         .replace(/u/gi,"ufat");

    if (texto.length !=0) {
        document.getElementById("texto").Value= textoCifrado;
        tituloMemsaje.textContent= "Texto encriptado con éxito";
        parrafo.textContent = "";
    }else{
        muñeco.src = "./img/muñeco.png";
        tituloMemsaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algún texto");
    }
}