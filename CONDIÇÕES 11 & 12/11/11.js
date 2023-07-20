function calcular() {
    var txtv = window.document.querySelector('input#txtvel')
    var res = window.document.querySelector('div#res')
    var vel = Number(txtv.value)
    res.innerHTML = `<p> Sua velocidade atual é de <strong>${vel}</strong></p>`
    if (vel > 60) {
        res.innerHTML += `<p>Vc está <strong>MULTADO!</strong> por exesso de velocidade </p>`
    }
    res.innerHTML += `<p> Dirija sempre com cinto de segurança</p>`


}