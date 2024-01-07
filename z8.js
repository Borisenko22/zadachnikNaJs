// Задача 8: Дано целое число в диапазоне 1–7. 
// Вывести строку — название дня недели, 
// соответствующее данному числу 
// (1 — «понедельник», 2 — «вторник» и т. д.)

function one (number) {
    switch(number) {
        case 1:
            return 'Понедельник'
        case 2:
            return 'Вторник'
        case 3:
            return 'Среда'   
        case 4:
            return 'Четверг'   
        case 5:
            return 'Пятница'  
        case 6:
            return 'Субота' 
        case 7:
            return 'Воскресенье'    
    }
}
console.log(one(7))