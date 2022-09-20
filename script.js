function verificar(){
    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.getElementById('txtano');

    let res = document.getElementById('res')

    let fsex = 0;
    let idade = 0;

    if(fano.value.length == 0  || fano.value.length > ano){
        alert("insira o dados novamente")
    }
    else{
        fsex = document.getElementsByName('radsex')
        idade = ano - Number(fano.value)
        genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'homem'
            if(idade >= 0 && idade <10){
                img.setAttribute('src','./imagens/bebe-homem.jpg')
            }
            else if(idade >= 10 && idade < 25){
                img.setAttribute('src','./imagens/jovem-homem.jpg')
            }
            else if(idade >=25 && idade < 55){
                img.setAttribute('src','./imagens/adulto-homem.jpg')
            }
            else if(idade >=55){
                img.setAttribute('src','./imagens/idoso-homem.jpg')
            }
        }
        else{
            genero = 'mulher'
            if(idade >= 0 && idade <10){
                img.setAttribute('src','./imagens/bebe-mulher.jpg')
            }
            else if(idade >= 10 && idade < 25){
                img.setAttribute('src','./imagens/jovem-mulher.jpg')
            }
            else if(idade >=25 && idade < 55){
                img.setAttribute('src','./imagens/adulto-mulher.jpg')
            }
            else if(idade >=55){
                img.setAttribute('src','./imagens/idoso-mulher.jpg')
            }
            
        }
        res.style.textAlign = 'center'
        res.innerHTML = `detectamos ${genero} com ${idade} anos`
        res.appendChild(img)

    }
}