# JS_1
Основы программирования на JavaScript I

JavaScript — интерпретируемый, объектно-ориентированный язык программирования.
Функция — это мини-программа, с помощью которой можно что-то сделать. 
Например, мы хотим вывести сообщение, для этого есть функция alert. alert('Hello, world!')

Команда console.log очень часто используется для вывода отладочной информации. console.log(123);

Тег script позволяет вставить JavaScript-код на сайт. <script></script>
Чтобы подключить внешний файл JavaScript-кода, надо использовать атрибут src: <script src="js/script.js"></script>
Можно указать ссылку на файл (URL-адрес), например: <script src="https://example.com/somescripts/script.js"></script>

Переменная — это область памяти, где можно хранить и изменять данные. 
У переменной всегда есть имя, по нему мы можем обращаться к данным.  let address = "Санкт-Петербург";
Также можно объявлять и инициализировать сразу несколько переменных: let name = "Вася", address = "Санкт-Петербург";

Названия переменных могут состоять из букв, цифр и знаков _ или $. При этом имя переменной не может начинаться с цифры: let 123; // Ошибка!
В JavaScript есть два самых популярных стиля написания составных слов: camelCase и snake_case. let firstName; let first_name;

Неизменяемые значения лучше всего называть словами в верхнем регистре. const PASSWORD_MIN_LENGTH = 8;

С помощью оператора let можно создать переменную, значение которой можно перезаписать: 
let myFavouriteColor = "blue"; 
myFavouriteColor = "orange";

Оператор var — устаревший аналог оператора let. В современных программах его уже не используют.

let year_of_foundation=1841; цифры без ковычек 

Есть однострочные и многострочные комментарии. Такие комментарии начинаются со специальных символов //
Любой текст между // и концом строки будет игнорироваться JavaScript, то есть не будет выполняться. 
Многострочные комментарии начинаются символами /* и заканчиваются */.

Всего на данный момент есть восемь типов данных: string,
number,
boolean,
null,
undefined,
object,
Symbol,
BigInt.

Существует три вида кавычек: Объявление через одинарные и двойные кавычки ничем не отличается.
Одинарные — 'Hello, world!',
Двойные — "Hello, world!",
Обратные — `Hello, world!`.

таблица со всеми последовательностями в JavaScript:
Код	Значение
\0	нулевой символ (символ NUL)
\'	одинарная кавычка
\"	двойная кавычка
\\	обратный слеш
\n	новая строка
\r	возврат каретки
\v	вертикальная табуляция
\t	табуляция
\b	забой
\f	подача страницы
\uXXXX	кодовая точка Unicode
\xXX	символ из кодировки Latin-1
на практике чаще всего используются символы кавычек (\" и \') и новой строки (\n).

Если нужен текст с переносами, можно использовать символ \n: console.log("Первая строка\nВторая строка");

С помощью обратных кавычек мы можем вставлять в текст различные выражения. 
вместо 
const name = "Петр";
const greeting = "Привет " + name + "!"; // Привет Петр!
ставим
const greeting = `Привет ${name}!`;

В шаблонных строках можно и так:
console.log(`Первая строка
Вторая строка`); 

У строк есть лишь одно свойство — str.length, которое показывает длину строки str:
console.log("ООО \"ГринКорп\"".length); // 14
console.log("".length); // 0

Каждый символ в строке имеет свой индекс (позицию). Индексация начинается с 0
Есть несколько способов получить символ по позиции:
1. Используя метод str.charAt(index), где index — значение от 0 до длины строки минус 1. Если index выходит за пределы длины, метод вернет пустую строку 
console.log("Привет".charAt(1)); // р
console.log("Привет".charAt(100)); // пустая строка
2. Используя квадратные скобки [index]: console.log("Привет"[1]); // р
На практике чаще используется метод с квадратными скобками

Метод str.toLowerCase приводит все символы к нижнему регистру: console.log("Привет, Петр".toLowerCase()); // привет, петр
Метод str.toUpperCase приводит все символы к верхнему регистру: console.log("Привет, Петр".toUpperCase()); // ПРИВЕТ, ПЕТР

Иногда мы на вход получаем строку, у которой в начале и конце есть ненужные нам пробельные символы (пробел, табуляцию, перенос строки и пр.). Чтобы избавиться от них, есть метод str.trim(). 
console.log("   Привет, Петр   ".trim()) // "Привет, Петр"

Среди чисел существует еще несколько специальных значений — Infinity и NaN.
Работает Infinity, как и бесконечность в математике: любое число + бесконечность = бесконечность.
Число, деленное на бесконечность, дает 0. Ну а число, деленное на 0, дает бесконечность:
console.log(10 / 0); // Infinity
console.log(1 + Infinity); // Infinity
console.log(10000 / Infinity); // 0

NaN — сокращение от Not A Number, т. е. это не число. NaN появляется при ошибках в вычислении.
Например, если попытаться слово поделить на число, в результате получится NaN:
console.log("Hello" / 2); // NaN
При этом у значения NaN есть несколько особенностей:
Оно ничему не равно, даже другому NaN. 
Какие бы математические операции мы ни проводили с ним, всегда будет получаться NaN.

Операторы делятся на несколько категорий:
1. Бинарные — работают сразу с двумя операндами (слева и справа). Например, оператор плюс (+) в выражении 1 + 2 работает с левым операндом 1 и правым 2.
2. Унарные — работают с 1 операндом. Например, оператор минус (-), который меняет знак:
let a = 1;
let b = -a;
3. Тернарные — работают сразу с тремя операндами. 

Глобальный объект Math:
Math.ceil(x) — округление вверх. Вернет ближайшее большее целое число: console.log(Math.ceil(1.01)); // 2
Math.floor(x) — округление вниз. Вернет ближайшее меньшее целое число:  console.log(Math.floor(1.01)); // 1
Math.round(x) — округление до ближайшего целого числа:  console.log(Math.round(1.01)); // 1
Math.trunc(x) — вернет целую часть числа (не поддерживается в браузере Internet Explorer)  
Поиск максимального и минимального значения:  Math.max(x1 …[, xN]) / Math.min(x1, …[, xN])

Работа со степенями:
Math.pow(x, exponent) — возведение x в степень exponent.
Math.sqrt(x) — возвращение квадратного корня x.
Math.cbrt(x) — возвращение кубического корня x.
Math.exp(x) — возвращение e в степени x.

Работа со знаками:
Math.abs(x) — возвращение абсолютного значения x (отбрасывает знак).
Math.sign(x) — возвращение знака числа x.

Получение случайного числа: Math.random()
К примеру, можем написать функцию, которая выдает случайное целое число меньше max:
function getRandomInt(max) {
  return Math.floor(Math.random() * max);}

Константы:
Math.E — основание натурального логарифма.
Math.LN10 — натуральный логарифм из 10.
Math.LN2 — натуральный логарифм из 2.
Math.PI — число Пи.

Потеря точности:
console.log(0.1 + 0.2 === 0.3); // false
console.log(0.1 + 0.2); // 0.30000000000000004
Чтобы проверить, есть ли ошибки, используйте toFixed.  console.log((0.1 + 0.2).toFixed(1) === "0.3") // true

Типы Boolean, null, undefined
Тип Boolean также называют булевым, или логическим, типом. У него всего два значения: true и false
Объявить булевую переменную можно напрямую, указав true или false: let a = true; let b = false;





