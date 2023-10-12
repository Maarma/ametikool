/*
 * See skript teeb 6 päringut erinevatele neti.ee lehtedele ja loeb kokku neis esinevate linkide arvu.
 *
 * ÜLESANNE: optimeeri skripti sedasi et päringuid tehtaks samaaegselt.
 * Kasuta selleks Promise.all funktsiooni.
 */

const { resolve } = require("path");

async function countSiteLinks(site) {
    console.log(`Fetching ${site}...`);
    // adding a delay to mimic slow connection
    await new Promise(resolve => setTimeout(resolve, 1000));

    const result = await fetch(site);
    const html = await result.text();

    return (html.match(/<a\ /g) || []).length;
}

// TODO: Optimize this function
async function readNetiSites() {
    const sites = [
        'https://www.neti.ee/cgi-bin/teema/RIIK_JA_YHISKOND/',
        'https://www.neti.ee/cgi-bin/teema/INFO_JA_MEEDIA/',
        'https://www.neti.ee/cgi-bin/teema/HARIDUS_JA_KULTUUR/',
        'https://www.neti.ee/cgi-bin/teema/ARI/',
        'https://www.neti.ee/cgi-bin/teema/MEELELAHUTUS_JA_HOBID/',
        'https://www.neti.ee/cgi-bin/teema/TERVIS/',
    ];

    let total = 0;
    const promises = [];


    for (const site of sites) {
        const count = promises.push(countSiteLinks(site));
        //console.log(`Links count: ${count}`);
        //total += count;
    }

    const allCounts = await Promise.all(promises);
    console.log(allCounts);
    
    for (let i = 0; i < allCounts.length; i++ ) {
        total += allCounts[i];
      }

    console.log(`Total links count: ${total}`);
}

(async () => {
    console.time('Timer');
    await readNetiSites();
    console.timeEnd('Timer');
})();
