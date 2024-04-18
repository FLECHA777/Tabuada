function tabuada(){
    var num = window.document.getElementById('num')
    var qtd = window.document.getElementById('qtd')
    var res = window.document.getElementById('res')

    var n = Number(num.value)
    var q = Number(qtd.value)
    var r = ''

    
    
    if(n == '' || q == ''){
        window.alert("Os campos prencisam estar preenchidos !!")
    }else{
        res.innerHTML = `A tabuada do ${n} é: <br>`  
        for(let i = 1; i <= q; i++){
        r = i * n

        res.innerHTML += `${n} X ${i} = ${r} <br>`
        }
    }

}