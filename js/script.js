const textArea = document.querySelector(".texto-1");
const mensaje = document.querySelector(".texto-2")

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
    document.getElementById("copiar").style.display = "show"
    document.getElementById("copiar").style.display = "inherit"
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado
    textArea.value = ""
    mensaje.style.backgroundImage = "none"
    document.getElementById("copiar").style.display = "show"
    document.getElementById("copiar").style.display = "inherit"
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
   
    }
    return stringDesencriptada
}

function copiar() {
    var contenido = document.querySelector(".texto-2");
    contenido.select();
  
    if (document.execCommand("copy")) {
      alert("¡Bien! Se copió con éxito");
    } else {
      alert("¡Error! No se pudo copiar error");
    }
  }