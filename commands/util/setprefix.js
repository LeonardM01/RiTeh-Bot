const guildModel = require('../../databases/schemas/guildschema');
const { Permissions } = require('discord.js');
const {mongoose,myCache} = require('../../src/main');

module.exports = {
    name: 'setprefix',
    description:"postavi prefix za server",
    usage: "<old prefix>setprefix <new prefix>",
    async execute(message, args, cache){
        if(args[0] == undefined){
            message.reply("nisi specificirao novi prefix");
        }else{
            if(message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)){
                const tGuild = await guildModel.findOneAndUpdate({guildId : message.guildId},{prefix : args[0]},{ returnOriginal: false });
                myCache.set(tGuild.guildId,tGuild);
            }else{
                message.reply("ne mozes koristiti ovu komandu");
            }
        }   
    }
}