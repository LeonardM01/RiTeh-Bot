const { MessageEmbed } = require("discord.js"); // import embeded messages

module.exports = {
    name: 'kolokviji',
    description:"Raspored kolokvija u semestru",
    usage: "?kolokviji",
    execute(message, args, cache){
        const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle("Raspored kolokvija")
                .setImage('https://i.imgur.com/TgGvQbA.png') // slika umjesto pdfa
                .setURL('http://www.riteh.uniri.hr/media/filer_public/c1/01/c101d2c7-9519-415c-b8b4-e01c0389a685/plan_kolokvija_pss_ra_2021-2022.pdf') // link do pdf datoteke
            message.channel.send({embeds : [embed]});
    }
}
