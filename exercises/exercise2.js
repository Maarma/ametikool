
/*
 * See skript trükib ekraanile 100 esimest arvu, mis jaguvad 23456789-ga.
 * Aga teeb seda väga ebaefektiivselt: programmmi töö võtab aega mitu sekundit.
 *
 * ÜLESANNE: optimeeri koodi nii, et programmi käivitus võtaks aega mõned millisekundid.
 */

// TODO: Optimize this function
function printNumbersDivisibleBy(divisibleByNr, printCount) {
    let count = 0;
    let tryThisNumber = 0;
    while (count < printCount) {
        //if (0 == tryThisNumber % divisibleByNr) {
        //    console.log(tryThisNumber);
        //    count++;
        //}
        tryThisNumber+=divisibleByNr;
    }
}

console.time('Timer');
printNumbersDivisibleBy(23456789, 100);
console.timeEnd('Timer');
