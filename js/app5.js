/*
5. Дано двузначное число. Определить, какая из его цифр больше: первая или вторая?
 */
let number = prompt("Введіть двозначне число:");

if (number.length !== 2 || isNaN(parseInt(number))) {
    console.log("Будь ласка, введіть двозначне число.");
} else {
    let firstDigit = parseInt(number.charAt(0));
    let secondDigit = parseInt(number.charAt(1));

    switch (true) {
        case firstDigit > secondDigit:
            console.log("Перша цифра більша за другу.");
            break;
        case firstDigit < secondDigit:
            console.log("Друга цифра більша за першу.");
            break;
        default:
            console.log("Цифри рівні.");
    }
}