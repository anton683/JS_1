let list = ["Банан","Груша","Сок"];

let result = "";
for (let i = 0; i < list.length; i++) {
    if (list[i].length > result.length) {
     result = list[i];
    }
}
console.log(result); 