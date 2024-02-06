/*
6. Дано трехзначное число.
    a. Определить является ли четной сумма его цифр.
    b. Определить, кратна ли сумма его цифр пяти.
    c. Определить является ли произведение его цифр больше 100.
 */
let number = prompt("Введіть трьохзначне число:");

if (number.length !== 3 || isNaN(parseInt(number))) {
    console.log("Будь ласка, введіть трьохзначне число.");
} else {
    let digit1 = parseInt(number.charAt(0));
    let digit2 = parseInt(number.charAt(1));
    let digit3 = parseInt(number.charAt(2));

    let sum = digit1 + digit2 + digit3;

    document.write(sum % 2 === 0 ? "Сума цифр є парною." : "Сума цифр є непарною.")
}