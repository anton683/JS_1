list = [];
let sum = 0;
let n = 0;
while(n++ < 100) { // 0 < 100 ? 0 => 1
    list.push(n);
}

for (let i = 0; i < list.length; i++) {
    if (list[i] >= 2) {
        sum += list[i];
        for (let j = i; j < list.length; j++) {
            if (list[i] !== list[j] && list[j] % list[i] === 0) {
                list[j] = null;
            }
        }
    }
}
console.log(sum);

