module.exports = {
    name: 'help',
    description: "Help komanda za ispisivanje svi mogućih komandi",
    execute(message,args){
        message.reply("!ispiti - raspored završnih ispita\n!kolokviji - raspored kolokvija\n!raspored - link za raspored tekućeg semestra\n!news - news feed sa riteg.uniri.hr stranice\n!stup - poll za stavljanje nekoga na stup srama");
    }
}