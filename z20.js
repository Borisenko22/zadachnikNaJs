// Задача 20: Описать процедуру PowerA3(A, B), 
// вычисляющую третью степень (куб) числа A и возвращающую ее в переменной B (A — входной, B — выходной параметр; 
// оба параметра являются вещественными). 
// С помощью этой процедуры найти третьи степени пяти любых чисел


let list = [2,4,6,8,3] // создаем список

function powA(a){
    let b = 0 
    for (let i = 0; i<a.length; i++){
        b = a[i]  //присваем каждый элемент из цикла
        b = b ** 3 // возводим итерируемый элемент в куб 
        console.log(b)
    }
}
powA(list);
