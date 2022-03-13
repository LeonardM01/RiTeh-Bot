const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'raspored',
    description: "Raspored za semestar",
    usage: "?raspored",
    execute(message, args) {
        const embed = new MessageEmbed()
            .setImage('https://i.imgur.com/ibDBYdP.png');

            message.channel.send({embeds : [embed]});
    }
}