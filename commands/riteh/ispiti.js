const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ispiti')
    .setDescription('Komanda za prikazivanje ispitnih rokova tekuće akademske godine'),
  async execute(interaction) {
    await interaction.reply({
      embeds: [new EmbedBuilder().setColor('BLUE')
        .setTitle('Raspored ispita')
        .setImage('https://i.imgur.com/quhM7Nj.png')
        .setURL('http://www.riteh.uniri.hr/media/filer_public/1c/86/1c867b09-cbdc-4f07-8c4a-a067f83c8973/ispitni-rokovi_pss_ra_2021-2022.pdf')],
    });
  },
};
