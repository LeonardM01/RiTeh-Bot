const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('raspored')
    .setDescription('Komanda za prikazivanje rasporeda predavanja tekuće akademske godine'),
  async execute(interaction) {
    await interaction.reply({
      embeds: [new EmbedBuilder().setColor('BLUE')
        .setImage('https://i.imgur.com/ibDBYdP.png')
        .setTitle('Raspored semestra')
        .setURL('http://www.riteh.uniri.hr/media/filer_public/43/5a/435a8f75-142a-4fdd-9b8c-6612721d9e30/raspored_pss_rac_2022_2023_zimski_v1.pdf')],
    });
  },
};
