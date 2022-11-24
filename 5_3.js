let word = "Доход";

word = word.toLowerCase();

let drow = "", i;

for (i = word.length-1; i >= 0; i--){
drow = drow + word[i];
} 

if (drow === word) {
    console.log ("Слово является палиндромом!");
} else {
    console.log ("Слово не является палиндромом!");
}