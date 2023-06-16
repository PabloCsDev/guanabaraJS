window.addEventListener('DOMContentLoaded', function() {
    var p1 = window.document.getElementsByTagName("p")[1];
    var texto = document.createTextNode("Está escrito assim: " + p1.innerText);
    var div = document.createElement("div");
    div.appendChild(texto);
    document.body.appendChild(div);
  });
  
  window.addEventListener('DOMContentLoaded', function() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white"
  });
  
  window.addEventListener('DOMContentLoaded', function() {
    var p1 = window.document.getElementsByTagName("p")[1];
    p1.style.fontFamily = "monospace";
    p1.style.fontStyle = "italic";
  });
  