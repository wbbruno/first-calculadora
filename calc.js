
function somar(){
let n1 = document.getElementById('numero1')
let n2 = document.getElementById('numero2')
let resul = document.getElementById('resultado')

let num1 = Number(n1.value)
let num2 =  Number(n2.value)
    
     c = num1 + num2
    resul.innerHTML = `A soma entre ${num1} e ${num2} é:<strong> ${c}</strong>`
    n1.focus()
    n1.value = ''
    n2.value = ''   
}

function menos(){
    let n1 = document.getElementById('numero1')
    let n2 =  document.getElementById('numero2')
    let resul = document.getElementById('resultado')

    let num1 = Number(n1.value)
    let num2 = Number(n2.value)
   
    c = num1 -  num2

    resul.innerHTML = `A Subtração entre ${num1} e ${num2} é:<strong> ${c}</strong>`
    n1.focus()
    n1.value = ''
    n2.value = ''   


}
function vezes(){
    let num1 = document.getElementById('numero1')
    let num2 = document.getElementById('numero2')
    let result = document.getElementById('resultado')
    
    let n1 = Number(num1.value)
    let n2 = Number(num2.value)
    
    c = n1 * n2

    result.innerHTML = `A multiplicaçao entre ${n1} e ${n2} é:<strong> ${c}</strong>`

    num1.focus()
    num1.value = ''
    num2.value = ''   

}
function div(){
    let num1 = document.getElementById('numero1')
    let num2 = document.getElementById('numero2')
    let result = document.getElementById('resultado')
    
    let n1 = Number(num1.value)
    let n2 = Number(num2.value)
    
    c = n1 / n2

    result.innerHTML = `A Divisão entre ${n1} e ${n2} é:<strong> ${c}</strong>`

    num1.focus()
    num1.value = ''
    num2.value = ''   

}
    