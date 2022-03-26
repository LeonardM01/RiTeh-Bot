//import databaze
const config = require('../../src/main').config;;
let imeRola= "";

module.exports = {
    name: 'removerole',
    description: "Komanda za micanje rola osobe.",
    usage: "?removerole [ime osobe] [role]",
    execute( message, args ) {
        // mention osobe kojoj se mice roles
        const member = message.mentions.members.first();
        //role koji se mice
        if(args[2]==undefined){
            imeRola = args[1];
        }else {
            imeRola = args.slice(1).join(' ');
        }
        // role koji se dodjeljuje
        const role = message.guild.roles.cache.find(role => role.name === imeRola.toUpperCase());
        // provjera je li osoba koja mijenja role admin ili ne
        if(message.member._roles.find(role => role === config['admin-role'])  || message.member.id == config.owner) {
           member.roles.remove(role.id);
        }
    }
}