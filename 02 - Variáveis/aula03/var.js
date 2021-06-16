//  var é global e local
// hoisting - puxa a var e joga lá em cima
// var x | cria var porém sem valor

console.log('existe x antes do block?', x)

{
    var x = 0 // x = 0
}

console.log('existe x depois do bloco?', x)

// existe x antes do block? undefined
// existe x depois do bloco? 0