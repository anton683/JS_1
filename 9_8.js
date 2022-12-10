let list = [2, 45, 3, 23, 6];

function newList(list){
    var a = [];
    for (i = 0; i < list.length; i++){
       a[i] = list[(list.length - 1) - i]
    }
    return a
 }
 console.log(newList(list));