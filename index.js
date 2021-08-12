const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '?';


client.once('ready', () => {
    console.log(`${client.user.tag} is now online!`);
    client.user.setActivity('over your gayness', {type: "WATCHING"});
});

client.on('message', async message => {

    if(message.content.startsWith(`${prefix}yourGay`)) {
        message.channel.send(`Now sending Gay messages!`);
        var interval = setInterval(function () {
            message.channel.send("If you see this you gay as fuck!").catch(console.error);
            
        }, 1000 * 60000);
    }
});























































client.login('ODY5OTY4MzgyMjQ4NzY3NTA4.YQF7MQ.FEff_RE5bEvbSdHmNnIGbCzCNI8');