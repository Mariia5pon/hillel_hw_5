/*
Известны два расстояния. Одно в километрах, другое - в футах (1 фут = 0,305м). Какое расстояние меньше?
 */

let distanceKM = parseInt(prompt('Введи в кілометрах', ' '));
let distanceFT = parseInt(prompt('Введи в футах', ' '));

if (isNaN(distanceKM) || isNaN(distanceFT)) {
    document.write('Будь ласка, введіть коректні числа.');
} else {
    if (distanceKM > distanceFT) {
        document.write('Distance 1 is bigger.');
    } else if (distanceKM === distanceFT) {
        document.write('The distances are equal.');
    } else {
        document.write('Distance 2 is bigger.');
    }
}