module.exports = {
    name: 'kolokviji',
    description:"Raspored kolokvija u semestru",
    execute(message, args){
        message.channel.send('http://www.riteh.uniri.hr/media/filer_public/c1/01/c101d2c7-9519-415c-b8b4-e01c0389a685/plan_kolokvija_pss_ra_2021-2022.pdf');
    }
}