let list = [23, 13, 3];

function count(list) {
    let sum = 0;
    list.forEach(function(item){
        sum += item
    })
    return sum;
}
console.log(count(list));