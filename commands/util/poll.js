// poll import iz packagea
const { poll } = require('discord.js-poll');

module.exports = {
    name: 'poll',
    description: 'Komanda za otvaranje glasovanja u odredenom kanalu',
    usage: '?poll [ime kanala] [ime glasovanja] + [opcije]+ [opcije]',
    execute(message, args) {
        poll(message, args, '+', 'BLUE');
    }
}