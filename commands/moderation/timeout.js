const { MessageEmbed } = require('discord.js'); // embed funkcija
const { Permissions } = require('discord.js');

module.exports = {
    name: 'timeout',
    description: "Komanda za timeout-anje željenog usera",
    usage: "?timeout [mention usera] [vrijeme timeouta u sekundama]",
    execute(message, args, cache){
        // prva osoba mentioned koja ce biti timeoutana
        const member = message.mentions.members.first();
        
        //funkcija koja provjerava ako osoba koja je poslala poruku ima admin role i onda banna "member" varijablu
        if(message.member._roles.find(role => role === cache.moderator) || message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)){
            member.timeout(1000 * parseInt(args[1]), "Timeout na " + args[1] + "sekundi!");
            const embed = new MessageEmbed()
            .setThumbnail(member.displayAvatarURL({dynamic: true}))
            .setColor('BLUE')
            .setTitle(member.nickname + " je timeout-an:exclamation:")
            .setDescription(`${message.member.nickname} je timeout-ao na: ${parseInt(args[1])} sekundi`)
            .setTimestamp()
            client.channels.cache.get(cache.log).send({embeds : [embed]});
        }else{
            message.reply("Niste administrator!");
        }
    }
}