// poll import iz packagea
const { poll } = require('discord.js-poll');
const guildModel = require('../../databases/schemas/guildschema');
const { Permissions } = require('discord.js');
const {mongoose,myCache} = require('../../src/main');

module.exports = {
    name: 'poll',
    description: 'Komanda za otvaranje glasovanja u odredenom kanalu',
    usage: '?poll [ime kanala] [ime glasovanja] + [opcije]+ [opcije]',
    execute(message, args, cache) {
        if(message.member._roles.find(role => role === cache.moderator) || message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)){
            poll(message, args, '+', 'BLUE');
        }else{
            message.channel.send("Niste moderator stoga, ne mozete napraviti poll :confused:");
            message.delete();
        }
    }
}