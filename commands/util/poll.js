// poll import iz packagea
const { poll } = require('discord.js-poll');
const config = require('../../src/main').config; // databaza sa potrebnim podacima

module.exports = {
    name: 'poll',
    description: 'Komanda za otvaranje glasovanja u odredenom kanalu',
    usage: '?poll [ime kanala] [ime glasovanja] + [opcije]+ [opcije]',
    execute(message, args) {
        if(message.member._roles.find(role => role === config['admin-role']) || message.member.id === config.owner){
            poll(message, args, '+', 'BLUE');
        }else{
            message.delete();
            message.member.send("Niste moderator stoga, ne mozete napraviti poll :confused:");
        }
    }
}