const guildModel = require('../../databases/schemas/guildschema');
const { Permissions } = require('discord.js');
const {mongoose,myCache} = require('../../src/main');
const { MessageEmbed, Guild } = require('discord.js');

module.exports = {
    name: 'setadminrole',
    description: "Komanda za postavljanje admin role u botovu databazu",
    usage: "?setAdminRole [id rolea]",
    async execute(message, args, cache){

        if(message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)){
                let role = message.guild.roles.cache.find(role => role.name === args[0]);
                let tGuild = await guildModel.findOneAndUpdate({guildId : message.guildId},{moderator : role},{ returnOriginal: false });
                myCache.set(tGuild.guildId,tGuild);
                
                // sending logs to the log channel
                const embed = new MessageEmbed()
                    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
                    .setColor('BLUE')
                    .setTitle("Admin role je postavio: " + message.member.nickname)
                    .setDescription(":exclamation:Role imena '" + args[0] + "' je postavljen kao 'admin-role' i ima mogućnost moderacije!:exclamation:")
                    .setTimestamp()
                //channel.send({embeds : [embed]});
        }else{
            const embed = new MessageEmbed()
                    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
                    .setColor('BLUE')
                    .setTitle("User: " + message.member.nickname + " je htio postaviti admin role!")
                    .setDescription(":exclamation: Pojeo je govno :exclamation:middle_finger:")
                    .setTimestamp()
                message.reply({embeds : [embed]});
        }
        
    }
}