const setPalindrome = (frase) => {
    // pasamos la frase a texto en minuscula sin espacios
    const fraseOriginal = frase.toLowerCase().replace(/\s/g, '');
    // frase invertida
    const fraseReverse = frase.split("").reverse().join("").replace(/\s/g, '');
    // comparacion
    return fraseOriginal === fraseReverse 
    ? frase + ' es palindromo'       
    : frase + ' no es palindromo'
}

const frase = process.argv[2]

console.log(setPalindrome(frase))