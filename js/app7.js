/*
7. Дано трехзначное число.
    a. Верно ли, что все его цифры одинаковые?
    b. Есть ли среди его цифр одинаковые?
 */
let number = prompt("Введіть трьохзначне число:");

if (number.length !== 3 || isNaN(parseInt(number))) {
    console.log("Будь ласка, введіть трьохзначне число.");
} else {
    let digit1 = parseInt(number.charAt(0));
    let digit2 = parseInt(number.charAt(1));
    let digit3 = parseInt(number.charAt(2));
// a
    let areAllDigitsEqual = digit1 === digit2 && digit2 === digit3;
    if (areAllDigitsEqual) {
        console.log("Усі цифри однакові.");
    } else {
        console.log("Цифри не є однаковими.");
    }
}