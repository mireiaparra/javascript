//un contador que se inicia con valor de 0 y aumenta el número cada vez que se llama

function count(num){
   return () => num ++;
}

const counter = count(1);
// console.log(counter());
// console.log(counter());

// Escribir una función que determine si dos objetos son iguales. Recorre las propiedades de ambos objetos y las comparará. Deberá validar si son objetos o arreglos en sí. Si hay objetos anidados habrá que usar recursión.

function equal(obj1, obj2){
if(Array.isArray(obj1) && Array.isArray(obj2)) {
    for (let i = 0; i<= obj1.length; i++) {
        if (!equal(obj1[i], obj2[i])) {
            return false;
        }
    } return true;
}
}

console.log(equal([1, 2, 3], [1, 2, 3]));