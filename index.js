const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '?';


client.once('ready', () => {
    console.log(`${client.user.tag} is now online!`);
    client.user.setActivity('over your gay-ness', {type: "WATCHING"});
});

client.once('channelDelete', (messageDelete) => {
    const channel = messageDelete.guild.channels.find(ch => ch.name === '846913153064239126');
    channel.send(`The message : "${messageDelete.content}" by ${messageDelete.author} was deleted. Their id is ${messageDelete.author.id}`);
});

client.once('message', async (message) => {
    if(message.content.startsWith(`${prefix}yourGay`){
       setInterval(() => {
            message.channel.send("if you see this, `Nigga` you gay as shit"); 
       }, 3600000)
    }
}




client.login(process.env.token);
