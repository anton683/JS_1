let list = [12, -4, 5, 32, 2];

let result = 0;
for (let i = 0; i < list.length; i++) {
    if (list[i] > 0) {
        result += list[i];
    }
}
console.log(result);