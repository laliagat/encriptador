const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function validar(stringEncriptada){
    let arreglo = ["á", "é", "í", "ó", "ú"]; 
    stringEncriptada  = stringEncriptada.toLowerCase();
    for(let i=0; i<arreglo.length; i++){ 
        if (stringEncriptada.includes(arreglo[i])){
            alert("El texto ingresado contiene tildes");
            return false;
        }
        else return true;
    }

}

function btnEncriptar(){
    
    let validacion = validar(textArea.value); 
    if (validacion){
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
        document.getElementById("text-content-notfound").style.visibility = "collapse";
        document.getElementById("copiar").style.visibility = "visible";
    }
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(mensaje.value);
    mensaje.value = textoDesencriptado; 

}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function copy(){
    navigator.clipboard.writeText(mensaje.value);
}