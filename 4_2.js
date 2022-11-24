let price = "12 рублей";
if (isNaN(parseInt(price))){
    console.log("Не число");
}else if (parseInt(price) <=0){
    console.log("Число не корректное");
} else {
    console.log(parseInt(price));
}

