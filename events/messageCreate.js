const { client } = require('../src/main');
const {fetchCache} = require('../src/cache');


client.on('messageCreate',async (message)=>{
    
    var cache = await fetchCache(message.guildId);
    
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