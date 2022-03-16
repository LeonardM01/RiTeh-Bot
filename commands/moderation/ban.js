const config = require('../../src/main').config; //databaza gdje je admin role spremljen

module.exports = {
    name: 'ban',
    description: "Komanda za bannanje željenog usera",
    usage: "?ban [mention usera] [razlog]",
    execute: async(message, args) => {
        // prvi mention u poruci koji predstavlja osobu koju se banna
        const member = message.mentions.members.first();
        args.shift();
        let reason = args.join(" ");
       
        //funkcija koja checka ako autor poruke ima administrator ulogu
        if(message.member._roles.find(role => role === config['admin-role'])){
            // ban function
            member.ban({reason: reason});
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