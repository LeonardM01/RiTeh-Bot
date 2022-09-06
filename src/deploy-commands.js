const fs = require('node:fs');
const path = require('node:path');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord.js');
// eslint-disable-next-line no-unused-vars
const dotenv = require('./main');

const commands = [];
const commandsPath = path.join(__dirname, '../commands/');
const commandFiles = fs.readdirSync(commandsPath);

for (const dir of commandFiles) {
  for (const file of fs.readdirSync(commandsPath + dir)) {
    const filePath = path.join(commandsPath + dir, file);
    const command = require(filePath);
    commands.push(command.data.toJSON());
  }
}

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands })
  .then((data) => console.log(`Successfully registered ${data.length} application commands.`))
  .catch(console.error);
