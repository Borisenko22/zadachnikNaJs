// Задача 12: Даны два целых числа A и B (A < B).
// Вывести в порядке возрастания все целые числа,
// расположенные между A и B (включая сами числа A и B),
// а также количество N этих чисел.

// const A = 10
// const B = 20

// for(let n = 10; n<=B; n++ ){
//     console.log(n)
// }

const A = 10;
const B = 20;
function enumFromAToB(a, b) {
  for (let i = a; i <= b ; i++) {
    console.log(i);
  }
}
enumFromAToB(A, B);
