const config = require('../../src/main').config; //databaza gdje je admin role spremljen
const client = require('../../src/main').client; // client za dobivanje svi channela
const { MessageEmbed } = require('discord.js'); // embed funkcija

module.exports = {
    name: 'ban',
    description: "Komanda za bannanje željenog usera",
    usage: "?ban [mention usera] [razlog]",
    execute: async(message, args) => {
        // prvi mention u poruci koji predstavlja osobu koju se banna
        const member = message.mentions.members.first();
        args.shift();
        let reason = args.join(" ");
        // embed poruka koja se salje
        const embed = new MessageEmbed()
            .setThumbnail(member.displayAvatarURL({dynamic: true}))
            .setColor('BLUE')
            .setTitle(member.nickname + " je bannan:exclamation:")
            .setDescription(message.member.nickname + " je bannao usera: " + member.nickname + "\nRazlog: " + reason)
            .setTimestamp()
        //funkcija koja checka ako autor poruke ima administrator ulogu
        if(message.member._roles.find(role => role === config['admin-role']) || message.member.id == config.owner){
            // ban function
            member.ban({reason: reason});
            // tekstualni kanal u koji se salju poruke o moderaciji
            client.channels.cache.get(config['admin-channel']).send({embeds : [embed]});
            // notify the user
            try{
                if(reason.length != 0){
                    await member.send(reason);
                }
            }catch(error){
                console.error(error);
            }
        // ako member nije admin
        }else{
            message.reply("Niste administrator!");
        }
    }
}