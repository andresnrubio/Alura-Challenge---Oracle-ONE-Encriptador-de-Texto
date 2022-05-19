const verTexto = () => {
  (document.getElementById("mensajeEncriptado").style.display = "flex"),
    (document.getElementById("noMensaje").style.display = "none");
};

const leerTexto = () => {
  let rawText = document.getElementById("textToRead").value;
  verTexto();
  document.getElementById("textResult").innerHTML = encripter(rawText);
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

//Acciones

document.getElementById("botonEncriptar").addEventListener("click", leerTexto);

//Para seleccionar el texto interno del text area
//document.getElementById("textToRead").select();
