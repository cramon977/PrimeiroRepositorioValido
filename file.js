var num = document.querySelector('input#add')
var select= document.querySelector('select#selval')
var res = document.querySelector('div#part2')
valores = []
function eNumero(n){//esta função determinará valores válidos.//
    if( Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}
function naLista(n, l){ // esta função encontrará valores repetidos.//
   // return l.indexOf( Number(n)) != -1;
     if (l.indexOf( Number(n)) != -1 ){
         return true
     } else {
         return false
     }
}

function adicionar(){
    if(eNumero(num.value) && !naLista(num.value , valores)){
        valores.push(Number(num.value)) // Hora em que o vetor receberá valores.//
        var item = document.createElement('option')
        item.text =`Valor ${num.value} adicionado`
        select.appendChild(item)
        res.innerHTML=''
        
        
    } else {
        window.alert('Número fora de escala, ou, já inserido!')
        num.value = ''
        num.focus()
    }
   
}
function final () {
    if (num.value.length == 0){
        window.alert('Adicione valores')   
   } else {
        var total = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for(var pos in valores) {
            soma += valores[pos]
            media = soma / valores.length
            if ( valores[pos] > maior){
                maior = valores[pos]
            }
            if ( valores[pos] < menor){
                menor = valores[pos]
            }
        }
        
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados</p>` 
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os numeros temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}`
        } 

}
