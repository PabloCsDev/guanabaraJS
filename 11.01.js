

function consultar() {
    var txtp = window.document.querySelector('input#txtpais');
    var res = window.document.querySelector('div#res');
    var pais = txtp.value.toUpperCase();

    res.innerHTML = `<p>Seu país é <strong>${pais}</strong></p>`;

    if (pais === 'BRASIL') {
        res.innerHTML += `<p>Você é <strong>Brasileiro!</strong> Venha comigo para o check-in.</p>`;
    } else {
        res.innerHTML += `<p>Você não é brasileiro. Dirija-se ao posto de atendimento aos estrangeiros.</p>`;
    }
}

var txtpais = document.querySelector('#txtpais');
txtpais.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) { 
        event.preventDefault(); 
        consultar(); 
    }
});

/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>COUNTRY</title>
    <script src="11.01.js"></script>
    <script src="countries.js"></script> <!-- Inclua o arquivo da biblioteca countries.js -->
</head>
<body>

    <h1>Country System</h1>
    <div id="res"></div>
    <label for="selPais">Selecione o seu país:</label>
    <select id="selPais">
        <option value="">Selecione...</option>
    </select>
    <button onclick="consultar()">Verificar</button>
    
    <script>
        function consultar() {
            var selPais = document.querySelector('#selPais');
            var res = document.querySelector('#res');
            var pais = selPais.value;

            if (pais !== '') {
                res.innerHTML = `<p>Seu país é <strong>${pais}</strong></p>`;

                if (pais === 'BR') {
                    res.innerHTML += `<p>Você é <strong>Brasileiro!</strong> Venha comigo para o check-in.</p>`;
                } else {
                    res.innerHTML += `<p>Você não é brasileiro. Dirija-se ao posto de atendimento aos estrangeiros.</p>`;
                }
            } else {
                res.innerHTML = '';
            }
        }

        // Preenche o select com todos os países
        var selPais = document.querySelector('#selPais');
        Object.keys(countries).forEach(function (countryCode) {
            var countryName = countries[countryCode];
            var option = document.createElement('option');
            option.value = countryCode;
            option.textContent = countryName;
            selPais.appendChild(option);
        });
    </script>
</body>
</html>
*/