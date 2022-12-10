/*
В программе объявлена переменная list, в которую записан массив. 
Используя цикл, сформируйте массив numbers_list, 
который содержит в себе только числа из массива list. 
Если в процессе прохода циклом по массиву list обнаружится значение false,
 последующие значения рассматривать не нужно. В конце программы выведите значение переменной numbers_list в консоль.
*/

list = [2, "привет", 23, true, 2, false, 2]

let numbers_list = [];
for (let value of list) {
    if (value == false) break;
    if (!isNaN(value) && value !== true) numbers_list.push(value);
}
console.log(numbers_list);