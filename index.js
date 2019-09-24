const Discord = require('discord.js');
const client = new Discord.Client();
const exampleEmbed = new Discord.RichEmbed();

const prefix = "-";

client.once('ready', () =>
{
	console.log('Ready!')
});

client.on('guildMemberAdd', member =>                                           // On addition of a new memeber....
{
	const sysChannel = member.guild.channels.find(ch => ch.name === 'general'); // find the member log channel

	if (!sysChannel) return;                                                       // do nothing if not found
	
	const serverName = message.guild.name;
	const welcome = message.guild.channels.find(ch => ch.name === 'welcome');
    const intro  = message.guild.channels.find(ch => ch.name === 'introduction'); // find the intro, roles and welcome chanlles
    const roles = message.guild.channels.find(ch => ch.name === 'roles');

    sysChannel.send(`Welcome to ${serverName} ${member.user.username} !`);
	
	if(!welcome || !intro) return;                                               // do nothing if they arent found

    sysChannel.send(`Please read ${welcome} and leave an intro in ${intro} !`);
	
	if(!roles) return;

    sysChannel.send(`Get your Role from ${roles} !`);                  // return welcome messgae to member log channel
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
		message.channel.send(" ```Greetings Ningen!``` ");                          
	}
	else if(message.content.startsWith(`${prefix}troll`))
	{
		let user = message.mentions.members.first();
		message.channel.send("```\n Silly Ningen! " +user.displayName+"\n```");
	}
	else if(message.content.startsWith(`${prefix}welcome`))                // test welcome message
	{
		let user = message.mentions.members.first();
		const noUser = " ";
		
		if (!user)
		{
			user = noUser;
		}
		
		const sysChannel = message.guild.channels.find(ch => ch.name === 'general'); // find the member log channel

		if (!sysChannel)
		{ 
			return;                                                       // do nothing if not found
		}
	
		const serverName = message.guild.name;
		const welcome = message.guild.channels.find(ch => ch.name === 'welcome');
		const intro  = message.guild.channels.find(ch => ch.name === 'introduction'); // find the intro, roles and welcome chanlles
		const roles = message.guild.channels.find(ch => ch.name === 'roles');

		exampleEmbed.setColor('#0099ff');
		exampleEmbed.setTitle('Some title');
		exampleEmbed.setURL('https://discord.js.org/');
		exampleEmbed.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org');
		exampleEmbed.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

		if(!welcome || !intro) return;                                               // do nothing if they arent 
		if(!roles) 
		{	
			//sysChannel.send(`  \n Welcome to ${serverName}, ${user.displayName} ! \n Please read:  ${welcome} \n leave an intro in:  ${intro} \n  `);                 // return welcome messgae to member log channel
		}
		else
		{
			//sysChannel.send(` \n Welcome to ${serverName}, ${user.displayName} ! \n Please read:  ${welcome} \n leave an intro in: ${intro} \n Get your Role from: ${roles} \n  `);                 // return welcome messgae to member log channel
			message.channel.send({embed: {
				color: 3447003,
				description: "A very simple Embed!"
			  }});
			sysChannel.send({embed: {
				color: 3447003,
				description: "A very simple Embed!"
			}});
		}
	}
	else if(message.content.startsWith(`${prefix}addrole`))
	{
		const newRole = message.content.substring(8);
		message.guild.createRole
		({
			name: newRole
		})
		.then(role => message.channel.send("```\n Created new role with name: " +role.name+ "\n```"))
	}
});

client.login(process.env.BOT_TOKEN);                                      //  invoke bot token from Heroku variables