const guildModel = require('../../databases/schemas/guildschema');
const { Permissions } = require('discord.js');
const {mongoose,myCache} = require('../../src/main');

module.exports = {
    name: 'setlog',
    description:"postavi log channel",
    usage: "<prefix>setlog <log channel id / #log>",
    async execute(message, args){
        if(args[0] == undefined){
            message.reply("nisi specificirao log channel");
        }else{
            let channel = message.mentions.channels.first();
            if(channel == undefined){
                if(args[0].length != 18){
                    message.reply("niste iskoristili komandu dobro");
                    return;
                }else{
                    channel = args[0];
                }
            }
            if(message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)){
                const tGuild = await guildModel.findOneAndUpdate({guildId : message.guildId},{log : channel.id},{ returnOriginal: false });
                myCache.set(tGuild.guildId,tGuild);
            }else{
                message.reply("ne mozes koristiti ovu komandu");
            }
        }   
    }
}