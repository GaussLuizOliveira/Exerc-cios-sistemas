// Array para armazenar os números
let numeros = [];

// Loop para ler 5 números
for (let i = 1; i <= 5; i++) {
    let numero = prompt("Digite o número " + i + ":");
    
    // Converte o input para número e adiciona ao array
    numeros.push(parseFloat(numero));
}

// Ordena os números em ordem decrescente
numeros.sort(function(a, b) {
    return b - a;
});

// Imprime os números ordenados no console
console.log("Números em ordem decrescente: " + numeros.join(', '));
