function rankOfTheNumber(num){
    if(!Number.isInteger(num) || num >999 || num < 0){
        console.log ("Число должно быть больше нуля и входить в диапазон от 0 до 999");
        return{};
    }
    return{
        unit: num % 10,
        ten: Math.floor (num / 10) % 10,
        hundered: Math.floor(num / 100),
    }
}
console.log(rankOfTheNumber(726));