alert("hola mundo");
prompt("Ingresa una palabra por favor");
function encriptarTexto = texto {
    let textoEncriptado =texto
    replace(/e/g, "enter");
    replace(/i/g, "imes");
    replace(/a/g, "ai");
    replace(/o/g, "ober");
    replace(/u/g,"ufat");
    return textoEncriptado;
}
function dessencriptarTexto(textoEncrptado){
    let textoDesencriptado = textoEncrptado
    replace(/enter/g, "e");
    replace(/imes/g, "i");
    replace(/ai/g, "a");
    replace(/ober/g, "o");
    replace(/ufat/g, "u");


}