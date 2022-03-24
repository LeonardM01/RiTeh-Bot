//import databaze
const config = require('../../src/main').config;;
let imeRola = "";

module.exports = {
    name: 'setrole',
    description: "Komanda za davanje nekog rola osobi.",
    usage: '?setrole [mention osobe] [role]',
    execute(message, args){
        //dobivanje mentionane osobe
        // args[2] ce biti role koji se navedenoj osobi dodjeljuje
        const member = message.mentions.members.first();
        if(args[2]==undefined){
            imeRola = args[1];
        }else {
            imeRola = args[1] + " " + args[2];
        }
        // role koji se dodjeljuje
        const role = message.guild.roles.cache.find(role => role.name === imeRola.toUpperCase());
        // provjera je li osoba koja mijenja role admin ili ne
        if(message.member._roles.find(role => role === config['admin-role'])  || message.member.id == config.owner) {
           member.roles.add(role.id);
        }
    }
}