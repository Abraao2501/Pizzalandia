var pizzas = []
    //Selecionar o elemento checkbox
var check1 = document.getElementById('p1')
var check2 = document.getElementById('p2')
var check3 = document.getElementById('p3')
var check4 = document.getElementById('p4')
var check5 = document.getElementById('p5')
var check6 = document.getElementById('p6')
var check7 = document.getElementById('p7')
var check8 = document.getElementById('p8')
var check9 = document.getElementById('p9')
var check10 = document.getElementById('p10')
var check11 = document.getElementById('p11')
var check12 = document.getElementById('p12')

function validar() {
    //Se o checkbox estiver marcado, adicionar a variável correspondente ao array 'pizzas'
    if (check1.checked == true) {
        pizzas.push(check1)
    }
    if (check2.checked == true) {
        pizzas.push(check2)
    }
    if (check3.checked == true) {
        pizzas.push(check3)
    }
    if (check4.checked == true) {
        pizzas.push(check4)
    }
    if (check5.checked == true) {
        pizzas.push(check5)
    }
    if (check6.checked == true) {
        pizzas.push(check6)
    }
    if (check7.checked == true) {
        pizzas.push(check7)
    }
    if (check8.checked == true) {
        pizzas.push(check8)
    }
    if (check9.checked == true) {
        pizzas.push(check9)
    }
    if (check10.checked == true) {
        pizzas.push(check10)
    }
    if (check11.checked == true) {
        pizzas.push(check11)
    }
    if (check12.checked == true) {
        pizzas.push(check12)
    }

    //Se o usuário marcar mais de 2 checkbox
    if (pizzas.length > 2) {
        alert("Escolha apenas 2 sabores")

        //A partir de um laço de repetição, é feito uma varredura por todo o documento
        for (i = 0; i < document.f1.elements.length; i++)

            //Se for encontrado algum elemento do tipo checkbox, ele será desmarcado
            if (document.f1.elements[i].type == "checkbox") {
                document.f1.elements[i].checked = 0

                //O método splice remove todos os elementos do array
                pizzas.splice(0)
            }
    } else if (pizzas.length == 1) {
        alert(`Você escolheu uma pizza de ${pizzas[0].name}`)
        window.open('informaçõesdocliente.html')
    } else {
        alert(`Você escolheu uma pizza de ${pizzas[0].name} e uma de ${pizzas[1].name} certo?`)
        window.open('informaçõesdocliente.html')
    }
}
function test() {
    alert(pizzas.length)
}
