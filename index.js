const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '?';


client.once('ready', () => {
    console.log(`${client.user.tag} is now online!`);
    client.user.setActivity('over your gayness', {type: "WATCHING"});

    setInterval(() => {
        client.channels.get('846913153064239126').send('If you see this than you are gay as fuckkkk');
    }, 3600000)
});

client.once('channelDelete', (messageDelete) => {
    const channel = messageDelete.guild.channels.find(ch => ch.name === '846913153064239126');
    channel.send(`The message : "${messageDelete.content}" by ${messageDelete.author} was deleted. Their id is ${messageDelete.author.id}`);
});





















































client.login(process.env.token);