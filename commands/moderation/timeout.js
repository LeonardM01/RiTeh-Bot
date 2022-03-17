const config = require('../../src/main').config; //databaza gdje je admin role spremljen

module.exports = {
    name: 'timeout',
    description: "Komanda za timeout-anje željenog usera",
    usage: "?timeout [mention usera] [vrijeme timeouta u sekundama]",
    execute(message, args){
        // prva osoba mentioned koja ce biti timeoutana
        const member = message.mentions.members.first();
        
        //funkcija koja provjerava ako osoba koja je poslala poruku ima admin role i onda banna "member" varijablu
        if(message.member._roles.find(role => role === config['admin-role'])  || message.member.id == config.owner){
            member.timeout(1000 * parseInt(args[1]), "Timeout na " + args[1] + "sekundi!");
            message.reply(member.nickname + " je timeout-an na " + args[1] + " sekundi.");
        }else{
            message.reply("Niste administrator!");
        }
    }
}