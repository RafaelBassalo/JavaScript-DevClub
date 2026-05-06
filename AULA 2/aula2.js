


//const numero = 30

//const abacatudo = `Abacatudo é uma fruta deliciosa e versátil e custa ${numero} reais.`



//console.log(abacatudo)
/*const meuArray = [

   {
    nome: "João",
    idade: 25,
    casado: true
},

{
    nome: "Maria",
    idade: 30,
    casado: false
}

]

console.log(meuArray)
*/

const enviarCidade = () => {
            const cidadeInput = document.getElementById('cidade') //pegando o valor do input
            const cidade = cidadeInput.value //armazenando o valor do input em uma variável
            const populacaoInput = document.getElementById('populacao') //pegando o valor do input
            const populacao = populacaoInput.value //armazenando o valor do input em uma variável
            if (populacao >= 300000) {  //verificando se a população é maior ou igual a 300.000
                alert(`A cidade ${cidade} é considerada uma cidade grande.`) //exibindo um alerta com a mensagem
            } else { //caso contrário, exibindo um alerta com a mensagem
                alert(`A cidade ${cidade} é considerada uma cidade pequena.`)
            }
        }