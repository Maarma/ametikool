/*
 * See skript arvutab kõikide arvude 1..100000000 summa.
 * Aga teeb seda väga ebaefektiivselt: umbes paar sekundit.
 *
 * ÜLESANNE: optimeeri koodi nii, et programmi käivitus võtaks aega umbes paar millisekundit.
 */

// TODO: Optimize this function
function sumUpTo(n) {
    let sum = BigInt(0);
    for (let i = BigInt(1); i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.time('Timer');
console.log(sumUpTo(BigInt(100_000_000)));
console.timeEnd('Timer');
