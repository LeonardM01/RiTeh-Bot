const {mongoose,client,myCache} = require('../src/main');
const guildModel = require('../databases/schemas/guildschema');

client.on('messageCreate',async (message)=>{
    let cache = myCache.get(message.guildId);
    //console.log(cache);
    if(cache == undefined){
        var tGuild = await guildModel.findOne({guildId : message.guildId});
        if(tGuild == null){
            return;
        }else{
            myCache.set(tGuild.guildId,tGuild);
            cache = tGuild;
        }
    }
    if(!message.content.startsWith(cache.prefix) || message.author.bot) return;
    const args = message.content.slice(cache.prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if (!client.commands.has(command)) return;
    try {
        client.commands.get(command).execute(message,args, cache);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
});