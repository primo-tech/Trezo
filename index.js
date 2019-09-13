const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "-";


client.once('ready', () =>
{
	console.log('Ready!')
});

client.on('guildMemberAdd', member =>                                           // On addition of a new memeber....
{
	const channel = member.guild.channels.find(ch => ch.name === 'member-log'); // find the member log channel

	if (!channel) return;                                                       // do nothing if not found
	
	const serverName = message.guild.name;
	const welcome = message.guild.channels.find(ch => ch.name === 'welcome');
    const intro  = message.guild.channels.find(ch => ch.name === 'introduction'); // find the intro, roles and welcome chanlles
    const roles = message.guild.channels.find(ch => ch.name === 'roles');

    message.channel.send(`Welcome to ${serverName}, ${member} !`);
	
	if(!welcome || !intro) return;                                               // do nothing if they arent found

    message.channel.send(`Please read ${welcome} and leave an intro in ${intro} !`);
	
	if(!roles) return;

    message.channel.send(`Get your Role from ${roles} !`);                  // return welcome messgae to member log channel
});

client.on('message', message =>                                                 // on messgae recieved......
{
	//console.log(message.guild.memberCount);
	if(message.content.startsWith(`${prefix}cmd`))
	{
		message.channel.send(" ``` -cmd \n -hello \n -troll \n -welcome ``` ");
	}
	else if(message.content.startsWith(`${prefix}hello`))
	{
		message.channel.send("Greetings Ningen!");                          
	}

	else if(message.content.startsWith(`${prefix}troll`))
	{
		let user = message.mentions.members.first();
		message.channel.send(`Silly Ningen! ${user}`);
	}
	
	else if(message.content.startsWith(`${prefix}welcome`))                // test welcome message
	{
		let user = message.mentions.members.first();
		
		const serverName = message.guild.name;
		const welcome = message.guild.channels.find(ch => ch.name === 'welcome');
		const intro  = message.guild.channels.find(ch => ch.name === 'introduction');
		const roles = message.guild.channels.find(ch => ch.name === 'roles');

		message.channel.send(`Welcome to ${serverName}, ${user} !`);
		message.channel.send(`Please read ${welcome} and leave an intro in ${intro} !`);
        message.channel.send(`Get your Role from ${roles} !`);
	}
	else if (message.content.startsWith(`${prefix}check`))
	{
		message.channel.send(`Yo!`);
		const sysChannel = message.guild.systemChannel.name; // find the member log channel
		message.channel.send(`This is ${serverName}'s ${sysChannel} channel !`);
	}
});

client.login(process.env.BOT_TOKEN);                                      //  invoke bot token from Heroku variables

