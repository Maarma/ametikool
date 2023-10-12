/*
 * See skript kuvab faili 'article.txt' sisu, niiet iga sõna 'JavaScript' asendatakse sõnga 'Python'
 * Aga teeb seda ebaefektiivselt: programmi töö kestab umbes paarkümmend millisekundit.
 *
 * ÜLESANNE: optimeeri koodi nii, et programmi käivitus võtaks aega umbes paar millisekundit.
 */

// TODO: Optimize this function
function printModifiedFileContent(fileName) {
    const fs = require('fs');
    const data = fs.readFileSync(fileName, 'utf8');
    //lines = data.split('\n');
    //for (const line of lines) {
    const text=data.replaceAll("JavaScript", "Python");
    //words = data.split(' ');
        //for (word of words) {
           // process.stdout.write('JavaScript' == word ? 'Python' : word);
           // process.stdout.write(' ');
       // }
        console.log(text); // Newline
    //}
}

console.time('Timer');
printModifiedFileContent('article.txt');
console.timeEnd('Timer');
