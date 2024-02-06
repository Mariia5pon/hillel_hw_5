/*
4. Дано число. Определить, заканчивается оно четной цифрой или нечетной? Вывести последнюю цифру.
 */
let number = prompt("Введіть число:");

let lastDigit = parseInt(number.charAt(number.length - 1));

let message = (lastDigit % 2 === 0) ? "Остання цифра є парною." : "Остання цифра є непарною.";

console.log("Остання цифра:", lastDigit);
console.log(message);