const { fetchCache } = require('../src/cache');
const { client } = require('../src/main');
const { MessageEmbed } = require('discord.js'); // embed funkcija

client.on("guildMemberRemove", async function(member){
    const cache = await fetchCache(member.guild.id);
    
    const embed = new MessageEmbed()
        .setThumbnail(member.displayAvatarURL({dynamic: true}))
        .setColor('BLUE')
        .setDescription(`${member.nickname} je napustio server :exclamation:`)
        .setTimestamp()

    client.channels.cache.get(cache.log).send({embeds : [embed]});
});