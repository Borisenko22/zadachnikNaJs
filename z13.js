// Задача 13: Дано целое число. Если оно является положительным, 
// то прибавить к нему 1; 
// в противном случае вычесть из него 2. 
// Вывести полученное число

function one(number){
    if (number>0){
        number ++;
    } else if (number<0){
        number = number -(-2); 
    }
    return number
}
console.log(one(-8))