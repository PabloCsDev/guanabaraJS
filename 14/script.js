function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.querySelector("#txtano");
    var res = document.querySelector("div#res");
  
    if (fano.value.length == 0 || Number(fano.value) > ano) {
      window.alert("[ERROR] Verifique seus dados e tente novamente!");
    } else {
      var fsex = document.getElementsByName("radsex");
      var idade = ano - Number(fano.value);
      var genero = "";
      var img = document.createElement("img");
      img.setAttribute("id", "foto");
  
      if (fsex[0].checked) {
        genero = "Homem";
        if (idade >= 0 && idade < 10) {
          img.setAttribute("src", "criancaM.png");
          res.innerHTML = `Detectamos uma criança do sexo masculino com ${idade} anos.`;
        } else if (idade < 21) {
          img.setAttribute("src", "jovemM.png");
          res.innerHTML = `Detectamos um jovem do sexo masculino com ${idade} anos.`;
        } else if (idade < 60) {
          img.setAttribute("src", "homemM.png");
          res.innerHTML = `Detectamos um homem com ${idade} anos.`;
        } else {
          img.setAttribute("src", "idosoM.png");
          res.innerHTML = `Detectamos um idoso do sexo masculino com ${idade} anos.`;
        }
      } else if (fsex[1].checked) {
        genero = "Mulher";
        if (idade >= 0 && idade < 10) {
          img.setAttribute("src", "criançaF.png");
          res.innerHTML = `Detectamos uma criança do sexo feminino com ${idade} anos.`;
        } else if (idade < 21) {
          img.setAttribute("src", "jovemF.png");
          res.innerHTML = `Detectamos uma jovem do sexo feminino com ${idade} anos.`;
        } else if (idade < 60) {
          img.setAttribute("src", "mulherF.png");
          res.innerHTML = `Detectamos uma mulher com ${idade} anos.`;
        } else {
          img.setAttribute("src", "idosaF.png");
          res.innerHTML = `Detectamos uma idosa do sexo feminino com ${idade} anos.`;
        }
      }
  
      res.style.textAlign = "center";
      res.appendChild(img);
    }
  }
  