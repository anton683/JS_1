let list_1 = [12, 3];
let list_2 = [2, 1];

let result = [...list_1,...list_2];

for (let i in result) {
  result[i] = result[i] ** 2;
}

console.log(result);