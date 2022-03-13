const fs  = require('fs');

module.exports = (config,name,value) => {
    tempConfig = require('../databases/db.json');
    tempConfig[name] = value;
    fs.writeFile('./databases/db.json', JSON.stringify(tempConfig), function writeJSON(err) {
        if (err) return console.log(err);
      });
    config = tempConfig
} 