const {myCache,client} = require('./main');
const guildModel = require('../databases/schemas/guildschema');
 
async function isCacheAvailable(id){
    if(myCache.get(id) == undefined){
        return 0;
    }else{
        return 1;
    }
}

async function fetchCache(id){
    if(await isCacheAvailable(id)){
        return myCache.get(id);
    }else{
        var tGuild = await guildModel.findOne({guildId : id});
        if(tGuild == null){
            let guild = client.guilds.cache.get(id);
            tGuild = new guildModel({
                guildId : guild.id,
                owner : guild.ownerId,
                serverName : guild.name,
                moderator : null,
                log : null,
                prefix : '?'
            });
            tGuild.save();
        }
        myCache.set(tGuild.guildId,tGuild);
        return tGuild;
    }
}

async function updateCache(tGuild){
    myCache.set(tGuild.guildId,tGuild);
}

module.exports.fetchCache = fetchCache;