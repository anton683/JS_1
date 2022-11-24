let price = 10000;
let range = "day";

switch (range){
    case "day":
        range="день";
        break;
    case "week":
        range="неделю";
        break;
    case "month":
        range="месяц";
        break;    
};

console.log(price+' Р в '+range);