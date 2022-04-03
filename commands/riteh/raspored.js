const { MessageEmbed } = require("discord.js"); // import embeded messagea

module.exports = {
    name: 'raspored',
    description: "Raspored za semestar",
    usage: "?raspored",
    execute(message, args, cache) {
        const embed = new MessageEmbed()
            .setColor('BLUE')
            .setImage('https://i.imgur.com/ibDBYdP.png')
            .setTitle("Raspored semestra")
            .setURL('http://www.riteh.uniri.hr/media/filer_public/c8/5c/c85c8ebb-788c-49df-87d7-649e5d13b5e5/raspored_pss_rac_2021_2022_ljetni_v4.pdf')
            message.channel.send({embeds : [embed]});
    }
}