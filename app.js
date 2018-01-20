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
    if(message.content === settings.prefix + 'info'){
        message.channel.send('Hey! I\'m just a lonely bot.');
        console.log('sent message to ' + message.author);
    }
    if(message.content === settings.prefix + 'rank'){
        if(message.member.roles.find("name", "cunt")){
            message.reply('you are a cunt');
        } else {
            message.reply('you are a good boy');
        }
    }

});

client.login(settings.token);