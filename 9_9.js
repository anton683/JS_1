let sentence = "Завтра будет лучше чем вчера";

function stringToarray(sentence) {
    return sentence.trim().split(" ");
}

var arr = stringToarray(sentence);
console.log(arr);