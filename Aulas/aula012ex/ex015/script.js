function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {

        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') /*cria uma tag pelo JavaScript*/
        img.setAttribute('id', 'foto') /*criando um id com nome foto para a tag img*/
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 11){
                //criança
                img.setAttribute('src', 'imagem/bebe-homem.png')
            } else if (idade < 22){
                //Jovem
                img.setAttribute('src', 'imagem/jovem-homem.png')
            } else if (idade < 51){
                //Adulto
                img.setAttribute('src', 'imagem/adulto-homem.png')
            } else{
                //idoso
                img.setAttribute('src', 'imagem/idoso-homem.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 11) {
                //criança
                img.setAttribute('src', 'imagem/bebe-mulher.png')
            } else if (idade < 22) {
                //jovem
                img.setAttribute('src', 'imagem/jovem-mulher.png')
            } else if (idade < 51){
                //Adulto
                img.setAttribute('src', 'imagem/adulto-mulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagem/idoso-mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img) //adicionando a imagem no body do html
        // res.innerHTML = `calalld ${idade}`
    }

}