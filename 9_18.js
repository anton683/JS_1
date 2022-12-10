/*
В программе объявлена переменная list, в которую записан массив из объектов. 
В каждом объекте записаны название продукта и его стоимость.
Выведите в консоль название продукта, цена которого является максимальной в заданном массиве. 
Если таких несколько, выведите название первого из них.
*/

let list = [
    { product: "Apple", price: 25 },
    { product: "Cherry", price: 32 },
    { product: "Strawberry", price: 45 }];
    
let pos = 0, max = 0;
for ( let i = 0; i <= list.length -1; i++) {
    if (list[i]["price"] > max) { 
        max = list[i]["price"];
        pos = i;
    }
}
console.log(list[pos]["product"]);