/*
 * See skript imiteerib töö tegemist 0-10s
 *
 * ÜLESANNE: Teha sedasi, et doWork funktsioon töötab maksimaalselt 3 sekundit.
 * Kui "töö" pole 3 sekundi jooksul valmis, tagastab doWork "defaultresult" stringi.
 * Kasuta selle funktsionaalsuse saavutamiseks Promise.race funktsiooni.
 */

async function work() {
    console.log('Working...');
    // adding a delay to mimic slow connection
    await new Promise(resolve => setTimeout(resolve, Math.random() * 10000));

    return 'realresult';
}

// TODO: Improve this function
async function doWork() {
   return await work();
}

(async () => {
    console.time('Timer');
    console.log(await doWork());
    console.timeEnd('Timer');
})();
