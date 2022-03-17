const config = require('../../src/main').config; // databaza sa potrebnim podacima
const { MessageEmbed, Guild } = require('discord.js');
const configManager = require('../../src/configManager'); // funkcija za ispisitavnje stvari u .json file
const client = require('../../src/main').client; // client za dobivanje svi channela

module.exports = {
    name: 'setadminrole',
    description: "Komanda za postavljanje admin role u botovu databazu",
    usage: "?setAdminRole [id rolea]",
    execute(message, args){
        // varijabla koja odreduje u koji se channel salje promjena admin rola
        var channel = client.channels.cache.get(config['admin-channel']);
        
        // provjera je li owner servera vec settan, ako nije onda se seta 
        if(config.owner.length == 0){
            configManager(config, 'owner', client.guilds.cache.get(message.guildId).ownerId);
        }
        if(message.member._roles.find(role => role === config['admin-role']) || message.member.id == config.owner){
            if(message.member._roles.find(role => role === config['admin-role'])){
                let role = message.guild.roles.cache.find(role => role.name === args[0]);
                configManager(config, "admin-role", role.id);
                const embed = new MessageEmbed()
                    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
                    .setColor('BLUE')
                    .setTitle("Admin role je postavio: " + message.member.nickname)
                    .setDescription(":exclamation:Role imena '" + args[0] + "' je postavljen kao 'admin-role' i ima mogućnost moderacije!:exclamation:")
                    .setTimestamp()
                channel.send({embeds : [embed]});
            }
        }else{
            const embed = new MessageEmbed()
                    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
                    .setColor('BLUE')
                    .setTitle("User: " + message.member.nickname + " je htio postaviti admin role!")
                    .setDescription(":exclamation: Pojeo je govno :exclamation")
                    .setTimestamp()
                channel.send({embeds : [embed]});
        }
        
    }
}