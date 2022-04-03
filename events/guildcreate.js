const guildModel = require('../databases/schemas/guildschema');
const {client, myCache}= require('../src/main');

client.on('guildCreate', async (guild) => {
   //console.log(guild);
   var tGuild = await guildModel.findOne({guildId : guild.id});
   if(tGuild == null){
       tGuild = new guildModel({
           guildId : guild.id,
           owner : guild.ownerId,
           serverName : guild.name,
           moderator : null,
           log : null,
           prefix : '?'
       });
       tGuild.save();
       myCache.set(tGuild.guildId,tGuild);
   }else{
       if(myCache.get(tGuild.guildId) == undefined){
       myCache.set(tGuild.guildId,tGuild);
       }
   }
});