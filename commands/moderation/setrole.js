let imeRola = "";
const { MessageEmbed } = require('discord.js'); // embed funkcija
const { Permissions } = require('discord.js');

module.exports = {
    name: 'setrole',
    description: "Komanda za davanje nekog rola osobi.",
    usage: '?setrole [mention osobe] [role]',
    execute(message, args, cache){
        //dobivanje mentionane osobe
        // args[2] ce biti role koji se navedenoj osobi dodjeljuje
        const member = message.mentions.members.first();
        if(args[2]==undefined){
            imeRola = args[1];
        }else {
            imeRola = args.slice(1).join(' ');
        }
        // role koji se dodjeljuje
        const role = message.guild.roles.cache.find(role => role.name === imeRola.toUpperCase());
        // provjera je li osoba koja mijenja role admin ili ne
        if(message.member._roles.find(role => role === cache.moderator) || message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
           member.roles.add(role.id);
           const embed = new MessageEmbed()
            .setThumbnail(member.displayAvatarURL({dynamic: true}))
            .setColor('BLUE')
            .setTitle(member.nickname + " je dobio role:exclamation:")
            .setDescription(message.member.nickname + " je dodao role: " + imeRola.toUpperCase())
            .setTimestamp()
            client.channels.cache.get(cache.log).send({embeds : [embed]});
        }
    }
}