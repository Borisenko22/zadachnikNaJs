// Задача 11: Дано целое число K. Вывести строку-описание оценки, соответствующей числу K (1 — «плохо», 2 — «неудовлетворительно», 3 — «удовлетворительно», 4 — «хорошо», 5 — «отлично»). Если K не лежит в диапазоне 1–5, то вывести строку «ошибка»

function switchCase(number){
    switch(number){
        case 1:
        console.log('Плохо');
        break;
        case 2:
        console.log('Неудовлетворительно');
        break;
        case 3:
        console.log('Удовлетворительно');
        break;
        case 4:
        console.log('Хорошо');
        break;
        case 5:
        console.log('Отлично');
        break;
        default:
        console.log('Ошибка');
    }

}
switchCase(5)