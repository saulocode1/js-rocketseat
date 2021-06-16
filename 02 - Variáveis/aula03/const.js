// const e let são locais e só funcionam no escopo onde foi criada

// console.log('existe y antes do block?', y) // não
const y = 'joão'

{
    const y = 'maria'
    console.log('existe y depois do bloco?', y)
    // cria outra const com o mesmo nome porém valores diferentes
    // duas constantes diferentes
}

console.log('existe y depois do bloco?', y) // sim

// não existe antes do bloco
// existe dentro do block e depois da declaração
// existe fora do bloco
// não conseguimos atribuir um novo valor para const, porém podemos criar outra const com o mesmo nome e valor diferente dentro de outro bloco