const Discord = require('discord.js');
const path = require('path');
const Client = new discord.Client();
const settings = require('./settings.json');

client.on("ready", () => {
    console.log(settings.botName + ' started...');
});

client.on('message', message => {
    var args = message.content.split(/[ ]+/);

    if (msg.content === prefix + 'info'){
        const myEmbed = new Discord.RichEmbed()
                .setAuthor("Hexadecimal", "https://i.imgur.com/k7AZ2EI.png")
                .setColor(16107290)
                .setTimestamp()
                .addField("Version", "0.1", true)
                .addField("Author", "whenofficial\nArcadex", true)
                .addField("Description", "error", true);
        
        msg.channel.send({ embed: myEmbed });
        
            }

    //shit goes here
    if (message.content === settings.prefix + 'info') {
        message.channel.send('Hey! I\'m just a lonely bot.');
        console.log('sent message to ' + message.author);
    }
    if (message.content === settings.prefix + 'rank') {
        if (message.member.roles.find("name", "cunt")) {
            message.reply('you are a cunt');
        } else {
            message.reply('you are a good boy');
        }
    }

});

client.login(settings.token);