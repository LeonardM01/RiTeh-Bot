module.exports = {
    name: 'stup',
    description: "Glasanje za stavljanje usera na stup srama",
    usage: "!stup [mention osobe]",
    //metoda za stavljanje ljudi na stup srama
    execute: async (message, args) => {
        //bot reagira na poruku da se reakcija ne mora traziti
        message.react('👍').then(() => message.react('👎'));
        //uzima se prva osoba koja je mentionana za stavit na role
        const member = message.mentions.members.first();
        
        const collector = message.createReactionCollector({time: 300000}) ;

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