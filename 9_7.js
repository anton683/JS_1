let list = [2, 45, 3, 23, 6];
let max = -Infinity; // 0
let min = Infinity;  // 100
for (let el of list) { // 3
    max = Math.max(max, el); // 45
    min = Math.min(min, el); // 2 
}
console.log(max * min);