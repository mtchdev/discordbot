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


});

client.login(settings.token);