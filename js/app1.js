/*
1. Даны два различных числа. Определить какое из них больше, а какое меньше.
 */

let n1 = parseInt(prompt('Введи число 1', ' '));
let n2 = parseInt(prompt('Введи число 2', ' '));

if (n1 > n2) {
    document.write('Перше число більше.');
} else if (n1 === n2) {
    document.write('Числа дорівнюють.');
} else if (n2 > n1) {
    document.write('Друге число більше.');
} else {
    document.write('Будь ласка, введіть коректні числа.');
}
