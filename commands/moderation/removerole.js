const { Permissions } = require('discord.js');
let imeRola= "";
const { MessageEmbed } = require('discord.js'); // embed funkcija

module.exports = {
    name: 'removerole',
    description: "Komanda za micanje rola osobe.",
    usage: "?removerole [ime osobe] [role]",
    execute( message, args, cache) {
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
        if(message.member._roles.find(role => role === cache.moderator) || message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
           member.roles.remove(role.id);
        }
        const embed = new MessageEmbed()
            .setThumbnail(member.displayAvatarURL({dynamic: true}))
            .setColor('BLUE')
            .setTitle(member.nickname + " je izgubio role:exclamation:")
            .setDescription(message.member.nickname + " je maknuo role: " + imeRola.toUpperCase())
            .setTimestamp()
        client.channels.cache.get(cache.log).send({embeds : [embed]});
    }
}