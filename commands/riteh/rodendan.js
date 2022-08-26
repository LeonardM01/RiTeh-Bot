const { MessageEmbed } = require("discord.js");// import embeded messagea

module.exports = {
    name: 'rodendan',
    description: "Sretan rockas!!!",
    usage: "?rodendan",
    execute(message, args, cache) {
            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle("Sretan rođendan :partying_face: :partying_face: ")
                .setImage('https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
                .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
            message.channel.send({embeds : [embed]});
    }
}