const verTexto = () => {
  (document.getElementById("mensajeEncriptado").style.display = "flex"),
    (document.getElementById("noMensaje").style.display = "none");
};

const encriptar = () => {
  let rawText = document.getElementById("textToRead").value;
  verTexto();
  document.getElementById("textResult").innerHTML = encripter(rawText);
};

const desencriptar = () => {
  let rawText = document.getElementById("textToRead").value;
  verTexto();
  document.getElementById("textResult").innerHTML = decripter(rawText);
};

const encripter = (text) => {
  let fullText = text.split("");
  for (let i = 0; i < fullText.length; i++) {
    let char = fullText[i];

    switch (char) {
      case "a":
        fullText[i] = "ai";
        break;
      case "e":
        fullText[i] = "enter";
        break;
      case "i":
        fullText[i] = "imes";
        break;
      case "o":
        fullText[i] = "ober";
        break;
      case "u":
        fullText[i] = "ufat";
        break;

      default:
        break;
    }
  }
  return fullText.join("");
};

const decripter = (text) => {
  let fullText = text;
  
  fullText = fullText.replace(/ai/g,"a");
  fullText = fullText.replace(/enter/g,"e");
  fullText = fullText.replace(/imes/g,"i");
  fullText = fullText.replace(/ober/g,"o");
  fullText = fullText.replace(/ufat/g,"u");
   
  return fullText;
};

const copyText = () =>{
    let text = document.getElementById("textResult");
    text.select()
    text.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(text.value);

    alert("Copied the text: " + text.value);

}


//Acciones

document.getElementById("botonEncriptar").addEventListener("click", encriptar);
document.getElementById("botonDesencriptar").addEventListener("click", desencriptar);
document.getElementById("botonCopiar").addEventListener("click", copyText);

//Para seleccionar el texto interno del text area
//document.getElementById("textToRead").select();
