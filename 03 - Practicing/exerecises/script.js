// 1. Declare uma variável de nome weight

let weight

// 2. Que tipo de dado é a variável acima?

console.log(typeof weight) // undefined

/* 
    3. Declare uma variável e atribua valores para cada um dos dados:
    * name: String
    * age: Number (integer) // inteiro
    * stars: Number (float)
    * isSubscribed: Boolean
*/

let name = 'Saulo'
let age = 23
let stars = 4.8
isSubscribed = true

/*
    4. A variável student abaixo é de que tipo de dado?

    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

    4.2 Mostra no console a seguinte mensagem:
        <name> de idade <age> pesa <weight> kg.
*/

// 4
// R - Object

// 4.1
let student = { // object
    name: 'Saulo',
    age: 23,
    isSubscribed: true,
    weight: 55
}; 

// 4.2
console.log(`${student.name}, de idade ${student.age}, pesa ${student.weight} kg.`)

/*
    5. Declare uma varia´vel do tipo array, de nome students e atribua a ela nenhum valor
*/

let students = []

/*
    6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4.
*/

students = [
    student
]

/*
    7. Coloque no console o valor da posição zero do array acima
*/

console.log(students[0])

/*
    8. Crie um novo student e coloque na posição 1 do array students
*/

const john = {
    name: 'john',
    age: 23
}

students = [
    student,
    john
]

students[1] = john

/* 
    9. Qual a resposta da pergunta abaixo e por que?

    console.log(a)
    var a = 1
*/

// undefined; hoisting

/*
    var a

    console.log(a)
    a = 1
*/