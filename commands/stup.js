module.exports = {
    name: 'stup',
    description: "Glasanje za stavljanje usera na stup srama",
    usage: "!stup [mention osobe]",
    execute: async (message, args) => {
        var temp = 0;
        message.react('👍').then(() => message.react('👎'));
        
        const collector = message.createReactionCollector({time: 5000}) ;
        
        collector.on('collect', (reaction, user) => {
            if(reaction.emoji.name === '👍'){
                temp++;
            }
            if(reaction.emoji.name === '👎'){
                temp--;
            }
        });
        
        collector.on('end', collected => {
            if(temp > 1){
                const member = message.mentions.members.first();
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