const mongoose = require('mongoose');

const guildSchema = new mongoose.Schema({
  owner : String,
  serverName : String,
  moderator : String,
  log : String,
  prefix : String,
  guildId : String,
  reminders : {
    name : String,
    date : Date,
    description : String,
  }
});

  module.exports = mongoose.model('guilds',guildSchema);