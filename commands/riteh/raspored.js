const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('raspored')
    .setDescription('Komanda za prikazivanje rasporeda predavanja tekuće akademske godine')
    .addStringOption(option =>
      option.setName('semestar')
        .setDescription('Izaberite tekući semestar')
        .setRequired(true)
        .addChoices(
          { name: 'Prvi', value: '1' },
          { name: 'Treći', value: '3' },
          { name: 'Peti', value: '5' },
        ),
    ),
  async execute(interaction) {
    switch (interaction.options.getString('semestar')) {
      case '1':
        await interaction.reply({
          embeds: [new EmbedBuilder().setColor('BLUE')
            .setImage('https://i.imgur.com/hy73BIR.png')
            .setTitle(`Raspored ${interaction.options.getString('semestar')}. semestra`)
            .setURL('https://imgur.com/a/Uww0MPn')],
        });
        break;
      case '3':
        await interaction.reply({
          embeds: [new EmbedBuilder().setColor('BLUE')
            .setImage('https://i.imgur.com/ldLLIP5.png')
            .setTitle(`Raspored ${interaction.options.getString('semestar')}. semestra`)
            .setURL('https://imgur.com/a/99NYAPG')],
        });
        break;
      case '5':
        await interaction.reply({
          embeds: [new EmbedBuilder().setColor('BLUE')
            .setImage('https://i.imgur.com/78JuNQc.png')
            .setTitle(`Raspored ${interaction.options.getString('semestar')}. semestra`)
            .setURL('https://imgur.com/a/OniHXUt')],
        });
        break;
    }
  },
};
