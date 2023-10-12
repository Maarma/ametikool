/*
 * See skript arvutab failis 'numbers.txt' olevate numbrite summa.
 * Aga teeb seda ebaefektiivselt: umbes paarkümmend millisekundit.
 *
 * ÜLESANNE: optimeeri koodi nii, et programmi käivitus võtaks aega umbes paar millisekundit.
 */

// TODO: Optimize this function
function calculateSum(fileName) {
    let sum = 0;
    const fs = require('fs');
    const data = fs.readFileSync(fileName, 'utf8');
    lines = data.split('\n');

    for (i = 0; i < 1000; i++) {
        sum += Number(lines[i]);
    }
    return sum;
}

console.time('Timer');
const sum = calculateSum('numbers.txt');
console.timeEnd('Timer');
console.log(sum);
console.assert(sum === 856204);
