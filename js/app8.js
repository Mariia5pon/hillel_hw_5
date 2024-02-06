/*
8. Определить, является ли заданное шестизначное число зеркальным? (123321, 147741)
 */
let number = prompt("Введіть шестизначне число:");

if (number.length !== 6 || isNaN(parseInt(number))) {
    console.log("Будь ласка, введіть шестизначне число.");
} else {
    let digit1 = parseInt(number.charAt(0));
    let digit2 = parseInt(number.charAt(1));
    let digit3 = parseInt(number.charAt(2));
    let digit4 = parseInt(number.charAt(3));
    let digit5 = parseInt(number.charAt(4));
    let digit6 = parseInt(number.charAt(5));

    let isMirror = digit1===digit6 && digit2===digit5 && digit3===digit4;

    if (isMirror) {
        console.log("Число є зеркальним.");
    } else {
        console.log("Число не є зеркальним.");
    }
}