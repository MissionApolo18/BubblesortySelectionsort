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
function bubble(arrand) {
    for (let i = 0; i < arrand.length - 1; i++) {
        for (let j = 0; j < arrand.length - 1; j++) {
            if (arrand[j + 1] < arrand[j]) {
                let aux = arrand[j];
                arrand[j] = arrand[j + 1];
                arrand[j + 1] = aux;
            }
        }
    }
    return arrand;
}

console.log(bubble(arrand));