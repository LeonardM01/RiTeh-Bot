const { DiscordAPIError, MessageEmbed } = require("discord.js")
const fs = require("fs");

module.exports = {
    name: 'help',
    description: "Help komanda za ispisivanje svi mogućih komandi",
    execute(message,args){
        const embed = new MessageEmbed()
            .setTitle("Postojeće komande")
            .setDescription()
        
        message.channel.send({embeds : [embed]});
    }
}