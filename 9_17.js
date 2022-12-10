let obj = {
    "Яблоко": "фрукт",
    "Арбуз": "ягода",
    "Помидор": "овощ",
    "Огурец": "овощ",
    "Вишня": "ягода"
};

hash = {};

for (let k in obj) {
    // console.log(obj[k]);
    if (hash[obj[k]]) {
        hash[obj[k]]++;
    } else {
        hash[obj[k]] = 1;
    }
    // v2
    // let result = hash[obj[k]];
    // hash[obj[k]] = result ? ++result : 1
}
console.log(hash);