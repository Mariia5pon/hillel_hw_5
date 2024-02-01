/*
3. Определить, является ли число a делителем числа b ? И наоборот. (Дать два ответа)
 */
let a = parseFloat(prompt("Введіть число a:"));
let b = parseFloat(prompt("Введіть число b:"));

if (!isNaN(a) && !isNaN(b)) {
    if (b % a === 0) {
        document.write('a є дільником b<br>');
    } else {
        document.write('a не є дільником b<br>');
    }

    if (a % b === 0) {
        document.write('b є дільником a<br>');
    } else {
        document.write('b не є дільником a<br>');
    }
} else {
    document.write("Введено некоректні числа.");
}