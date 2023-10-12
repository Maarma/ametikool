/*
 * See skript teeb 5 päringut erinevatele neti.ee lehtedele ja loeb kokku neis esinevate linkide arvu.
 *
 * ÜLESANNE: optimeeri skripti sedasi et päringuid tehtaks samaaegselt.
 * Kasuta selleks Promise.all funktsiooni.
 */

async function countSiteLinks(site) {
    console.log(`Fetching ${site}...`);
    // adding a delay to mimic slow connection
    await new Promise(resolve => setTimeout(resolve, 1000));

    const result = await fetch(site);
    const html = await result.text();

    return html.length;
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

    for (const site of sites) {
        const count = await countSiteLinks(site);
        console.log(`Links count: ${count}`);
        total += count;
    }

    console.log(`Total links count: ${total}`);
}

readNetiSites();
