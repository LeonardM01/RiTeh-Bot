const mongoose = require('mongoose');

const guildSchema = new mongoose.Schema({
    owner : Number,
    admin : Number,
    log : Number,
    prefix : String,
    guildID : Number,
  });

  module.exports = mongoose.model('guilds',guildSchema);