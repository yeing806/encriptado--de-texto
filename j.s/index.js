// Selección de elementos del DOM
const textareaEncriptar = document.querySelector('.encriptar');
const textareaEvaluar = document.querySelector('.evaluar');
const btnEncriptar = document.querySelector('.btn-encriptar');
const imagenMuñeco = document.querySelector('.img-muñeco');
const textoUno = document.querySelector('.texto-uno');
const textoDos = document.querySelector('.texto-dos');
const contenido = document.querySelector(".tarjeta-contenedor");
const aviso =document.querySelector(".texto-aviso");
const btnDesencriptar = document.querySelector('.btn-desencriptar');
const btnCopiar = document.querySelector('.btn-copiar');
// Llaves de encriptación
const encriptarLlaves = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

// Función para encriptar texto
function encriptarTexto(texto) {
    return texto.replace(/[eioua]/g, letra => encriptarLlaves[letra]);
}

// Función para desencriptar texto
function desencriptarTexto(texto) {
    return texto.replace(/enter|imes|ai|ober|ufat/g, encriptado => {
        return Object.keys(encriptarLlaves).find(key => encriptarLlaves[key] === encriptado);
    });
}

// Función para mostrar/ocultar elementos
function toggleElementos(mostrar) {
    if (mostrar) {
        imagenMuñeco.style.display = 'block';
        textoUno.style.display = 'block';
        textoDos.style.display = 'block';
        btnCopiar.style.display = 'none';
    } else {
        imagenMuñeco.style.display = 'none';
        textoUno.style.display = 'none';
        textoDos.style.display = 'none';
        btnCopiar.style.display = 'block';
    }
}

// Evento para encriptar
btnEncriptar.addEventListener('click', () => {
    const texto = textareaEncriptar.value.toLowerCase();
    if (texto === '') {
        aviso.style.color = "#ffff";
        aviso.style ="800";
        aviso.textContent = "El campo de texto no debe estar vacio";
    }
    const textoEncriptado = encriptarTexto(texto);
    textareaEvaluar.value = textoEncriptado;
    toggleElementos(false);  // Oculta la imagen y muestra el botón 
  
    btnCopiar.style.visibility = "inherit";


});

// Evento para desencriptar
btnDesencriptar.addEventListener('click', () => {
    const texto = textareaEncriptar.value.toLowerCase();
    if (texto === '') {
        aviso.style.color = "#ffff";
        aviso.style ="800";
        aviso.textContent = "No hay texto para desencriptar";
        btnCopiar.style.visibility = "inherit";
        
        
    }
    const textoDesencriptado = desencriptarTexto(texto);
    textareaEvaluar.value = textoDesencriptado;
    toggleElementos(false);  // Oculta la imagen y muestra el botón copiar
});

// Evento para copiar el texto encriptado/desencriptado
btnCopiar.addEventListener('click', () => {
    textareaEvaluar.select();
    document.execCommand('copy');
    let copiar = respuesta;
    copiar.select();
    document.execCommand
    toggleElementos(falso);  // Vuelve a mostrar la imagen y oculta el botón copiar

    
    }
);

