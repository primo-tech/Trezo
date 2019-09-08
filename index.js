const Discord = require('discord.js');
const prefix = "-"; //require('./config.json');
const client = new Discord.Client();

client.once('ready', () =>
{
	console.log('Ready!')
});

client.on('guildMemberAdd', member =>
{
	const channel = member.guild.channels.find(ch => ch.name === 'member-log');

	if (!channel) return;
	
	const welcome = message.guild.channels.find(ch => ch.name === 'welcome');
        const intro  = message.guild.channels.find(ch => ch.name === 'introduction');
        const roles = message.guild.channels.find(ch => ch.name === 'roles');

        message.channel.send(`Welcome to PrimoTech, ${member} !`);
	
	if(!welcome || !intro) return;

        message.channel.send(`Please read ${welcome} and leave an intro in ${intro} !`);
	
	if(!roles) return;

        message.channel.send(`Get your Role from ${roles} !`);
});

client.on('message', message =>
{
	//console.log(message.guild.memberCount);

	if(message.content.startsWith(`${prefix}hello`))
	{
		message.channel.send("Greetings Ningen!");
	}

	else if(message.content.startsWith(`${prefix}troll`))
	{
		let user = message.mentions.members.first();
		message.channel.send(`Silly Ningen! ${user}`);
	}
	
	else if(message.content.startsWith(`${prefix}welcome`))
	{
		let user = message.mentions.members.first();

		const welcome = message.guild.channels.find(ch => ch.name === 'welcome');
		const intro  = message.guild.channels.find(ch => ch.name === 'introduction');
		const roles = message.guild.channels.find(ch => ch.name === 'roles');

		message.channel.send(`Welcome to PrimoTech, ${user} !`);
        	message.channel.send(`Please read ${welcome} and leave an intro in ${intro} !`);
        	message.channel.send(`Get your Role from ${roles} !`);
	}
});

client.login(process.env.BOT_TOKEN);

