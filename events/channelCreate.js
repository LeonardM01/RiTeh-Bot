const {client, myCache}= require('../src/main');
const guildModel = require('../databases/schemas/guildschema');
const { MessageEmbed } = require('discord.js'); // embed funkcija

client.on("channelCreate", async function(channel){
    var cache = myCache.get(channel.guild.id.toString());
    console.log(channel.guild.id);
    if(cache == undefined){
        var tGuild = await guildModel.findOne({guildId : channel.guild.id});
        if(tGuild == null){
            return;
        }
        myCache.set(tGuild.guildId,tGuild);
        cache = tGuild;
    }
    if(cache.log == null) return ;
    var logs = client.channels.cache.get(cache.log);
    const embed = new MessageEmbed()
        .setThumbnail(channel.guild.iconURL())
        .setColor('BLUE')
        .setTitle("Napravljen je kanal:exclamation:")
        .setDescription(`${channel} je napravljen ${channel.createdAt.toDateString()} i to je ${channel.type}!`)
        .setTimestamp()
    client.channels.cache.get(cache.log).send({embeds : [embed]});

});