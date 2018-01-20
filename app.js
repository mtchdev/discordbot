const discord = require('discord.js');
const path = require('path');
const client = new discord.Client();
const settings = require('./settings.json');

client.on("ready", () => {
    console.log(settings.botName + ' started...');
});

client.on('message', message => {
    var args = message.content.split(/[ ]+/);

    //shit goes here
    if(message.content === settings.prefix + 'hello'){
        message.reply('hey kid');
    }

});

client.login(settings.token);