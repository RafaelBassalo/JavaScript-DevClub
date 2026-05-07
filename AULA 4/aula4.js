const number = 200

console.log(number)

function digaMeuNome() { //criando uma função chamada digaMeuNome
    console.log("Meu nome é João") //exibindo uma mensagem no console
}

digaMeuNome()  //chamando a função digaMeuNome para que a mensagem seja exibida no console


function digaQualquerNome(nome){

    console.log(nome)
}

digaQualquerNome("Maria") //chamando a função digaQualquerNome e passando o argumento "Maria" para que a mensagem seja exibida no console
digaQualquerNome("Pedro") //chamando a função digaQualquerNome e passando o argumento "Pedro" para que a mensagem seja exibida no console

function soma(n1, n2) { //criando uma função chamada soma que recebe dois parâmetros: n1 e n2
    const resultado = n1 + n2 //somando os dois parâmetros e armazenando o resultado em uma variável
    console.log(resultado) //exibindo o resultado no console
}


soma(10, 20) //chamando a função soma e passando os argumentos 10 e 20 para que o resultado seja exibido no console
soma(5, 15) //chamando a função soma e passando os argumentos 5 e 15 para que o resultado seja exibido no console


function soma(n1, n2) { //criando uma função chamada soma que recebe dois parâmetros: n1 e n2
    const resultado = n1 + n2 //somando os dois parâmetros e armazenando o resultado em uma variável
    return resultado //retornando o resultado para que possa ser utilizado em outras partes do código
}

const resultadoSoma = soma(10, 20) //chamando a função soma e armazenando o resultado em uma variável

console.log(resultadoSoma) //exibindo o resultado da soma no console


function estaEndividado(salario, divida) { //criando uma função chamada estaEndividado que recebe dois parâmetros: salario e divida
    if (divida > salario) { //verificando se a dívida é maior que o salário
        return "Esta no Azul" //retornando true se a dívida for maior que o salário
    } else { //caso contrário, retornando false
        return "Esta no Vermelho"
    }
}

const resultadoEndividamento = estaEndividado(3000, 4000) //chamando a função estaEndividado e armazenando o resultado em uma variável  

console.log(resultadoEndividamento) //exibindo o resultado do endividamento no console


const digaMeuNomeArrow = () => { //criando uma função arrow chamada digaMeuNomeArrow
    console.log("Meu nome é João") //exibindo uma mensagem no console
}

digaMeuNomeArrow() //chamando a função digaMeuNomeArrow para que a mensagem seja exibida no console