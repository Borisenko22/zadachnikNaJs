// Задача 16: Даны стороны прямоугольника a и b. 
// Найти его площадь S=a*b и периметр P=2*(a+b)

function countPer (a,b) {
    const P = 2*(a+b);
    console.log(`Периметр равен ${P}`)   
}
function countSq (a,b) {
    const S = a*b;
    console.log(`Площадь равна ${S}`)  
}

countPer(4,10)
countSq(4,10)


