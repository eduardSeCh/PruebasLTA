const setTicket = (ticket) => {
    // convertir cadena a array de numeros
    const numbers = ticket.split('').map(Number)
    let firstNumbers = 0
    let secondNumbers = 0
    // verificar si son Number
    if (!isNaN(numbers[0])) {
        for (let i = 0; i < numbers.length; i++) {
            // sumar los numeros hasta llegar a la mitar del array
            if (i < numbers.length / 2) {
                firstNumbers += numbers[i];
            } //sumar los siguientes despues de la mitad
            else {
                secondNumbers += numbers[i];
            }
        }
        // mostrar el par de numeros junto con el resultado
        console.log(firstNumbers,'   ',secondNumbers)
        return firstNumbers === secondNumbers 
            ? 'GANADOR!'
            : 'PERDEDOR'
    } else {
        return (ticket," debe ser un número")
    }
}

const ticket = process.argv[2]
console.log(setTicket(ticket))