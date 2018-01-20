const discord = require('discord');
const path = require('path');
const client = new discord.Client();
const settings = require('settings.json');

client.on("ready", () => {
    console.log(settings.botName + ' started...');
});

client.login(settings.token);