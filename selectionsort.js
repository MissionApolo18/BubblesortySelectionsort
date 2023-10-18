/*Atenea Gutiérrez
Mission_Apolo18
*/
let arrayLenght = prompt('Ingrese el tamaño del arreglo: ');
function arrand(length) {
    let randArray = []
    for (let i = 0; i < length; i++) {
        let randNum = Math.floor(Math.random() * 100)
        randArray.push(randNum);
    }
    return randArray
}
function select(arrand) {
    for (let y = 0; y < arrand.length - 1; y++) {
        let min = y;
        for (let x = i + 1; x < arrand.length - 1; x++) {
            if (arrand[j] < arrand[min]) {
                arrand[i] = arrand[min];
                min = j;
            }
        }
    }
    return arrand;
}

console.log(select(arrand));