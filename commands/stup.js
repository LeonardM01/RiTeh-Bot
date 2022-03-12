module.exports = {
    name: 'stup',
    description: "Glasanje za stavljanje usera na stup srama",
    usage: "!stup [mention osobe]",
    execute: async (message, args) => {
        var temp = 0;
        message.react('👍').then(() => message.react('👎'));
        const member = message.mentions.members.first();
        
        const collector = message.createReactionCollector({time: 5000}) ;
        
        collector.on('end', collected => {
            if(collected.get('👍').count-collected.get('👎').count > 5){
                    member.roles.add("913855955786149908");
                    var ime = member.nickname;
                    if(ime == null){
                        ime = member.user.username;
                    }
                    message.reply(ime.toUpperCase() + ' je na stupu srama');
            }else{
                message.reply("Nedovoljno glasova.");
            }
        });
    }
}