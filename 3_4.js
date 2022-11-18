let value="5.4"
//округлите значение переменной "вверх" до целого значения;  console.log(Math.ceil(value));  
//округлите значение переменной "вниз" до целого значения;  console.log(Math.floor(value));  
//округлите значение переменной по правилам математики до целого значения;  console.log(Math.round(value));  
//посчитайте сумму полученных выше значений и из результата возьмите корень квадратный;  console.log(Math.sqrt((Math.ceil(value))+(Math.floor(value))+(Math.round(value))));  

//из результата возьмите целую часть числа и выведите в консоль.
console.log(Math.trunc((Math.sqrt((Math.ceil(value))+(Math.floor(value))+(Math.round(value)))))); // 4