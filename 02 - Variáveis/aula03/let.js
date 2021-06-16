// const e let são locais e só funcionam no escopo onde foi criada

// console.log('existe y antes do block?', y) // não
let y = 1

{
    y = 0 
}

console.log('existe y depois do bloco?', y) // não

// não existe antes do bloco
// existe dentro do block e depois da declaração
// não existe fora do bloco
// conseguimos atribuir um novo valor de let se estiver num bloco externo ou no mesmo bloco