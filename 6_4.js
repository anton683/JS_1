let num = 2;

function getSquares(n, cnt = 3) {
    let result = n;
    let str = "";
    while (cnt) {
        result = result ** 2;
        if (cnt !==1) {
            str +=result + " ";
        } else {
            str += result;
        }
        cnt--;
    }
    return str;
}
console.log(getSquares(num));