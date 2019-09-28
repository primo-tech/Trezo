const Discord = require('discord.js');
const client = new Discord.Client();
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
	const welcomeChannel = message.guild.channels.find(ch => ch.name === 'welcome');
    const introChannel  = message.guild.channels.find(ch => ch.name === 'introduction'); // find the intro, roles and welcome chanlles
    const rolesChannel = message.guild.channels.find(ch => ch.name === 'roles');
	
	if(!welcomeChannel || !introChannel || !rolesChannel) return;                                               // do nothing if they arent 
		else
		{
			//sysChannel.send(` \n Welcome to ${serverName}, ${user.displayName} ! \n Please read:  ${welcome} \n leave an intro in: ${intro} \n Get your Role from: ${roles} \n  `);                 // return welcome messgae to member log channel
			var dt = new Date();
			const year = dt.getFullYear();

			const WelcomeEmbed = {
				color: 0x0099ff,
				title: ` Welcome ${member.displayName}, To The ${serverName} Discord Server`,
				author: 
				{
					name: `${serverName}`,
					icon_url: 'https://avatars3.githubusercontent.com/u/52018753?s=200&v=4',
					url: 'https://primotechorg.wordpress.com/',
				},
				description: 'Primo Tech is an Open Source technology initiative which seeks to develop solutions and build communities of solvers',
				fields: 
				[
					{
						name: 'Please read the Welcome Channel',
						value: `${welcomeChannel}`,
					},
					{
						name: 'leave an intro in the Introduction Channel',
						value: `${introChannel}`,
					},
					{
						name: 'Get your role from the Roles Channel',
						value: `${rolesChannel}`,
					},
				],
				timestamp: new Date(),
				footer: 
				{
					text: `Trademark ${year}`,
					icon_url: 'https://avatars3.githubusercontent.com/u/52018753?s=200&v=4',
				},
			}
			
			sysChannel.send({ embed: WelcomeEmbed });
		}
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
		if (!user)
		{
			message.channel.send("```\n Silly Ningen! \n```");
		}
		else
		{
			message.channel.send("```\n Silly Ningen! " +user.displayName+"\n```");
		}
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
		const welcomeChannel = message.guild.channels.find(ch => ch.name === 'welcome');
		const introChannel  = message.guild.channels.find(ch => ch.name === 'introduction'); // find the intro, roles and welcome chanlles
		const rolesChannel = message.guild.channels.find(ch => ch.name === 'roles');

		if(!welcomeChannel || !introChannel || !rolesChannel) return;                                               // do nothing if they arent 
		else
		{
			//sysChannel.send(` \n Welcome to ${serverName}, ${user.displayName} ! \n Please read:  ${welcome} \n leave an intro in: ${intro} \n Get your Role from: ${roles} \n  `);                 // return welcome messgae to member log channel
			var dt = new Date();
			const year = dt.getFullYear();

			const WelcomeEmbed = {
				color: 0x0099ff,
				title: ` Welcome ${user.displayName}, To The ${serverName} Discord Server`,
				author: 
				{
					name: `${serverName}`,
					icon_url: 'https://avatars3.githubusercontent.com/u/52018753?s=200&v=4',
					url: 'https://primotechorg.wordpress.com/',
				},
				description: 'Primo Tech is an Open Source technology initiative which seeks to develop solutions and build communities of solvers',
				fields: 
				[
					{
						name: 'Please read the Welcome Channel',
						value: `${welcomeChannel}`,
					},
					{
						name: 'leave an intro in the Introduction Channel',
						value: `${introChannel}`,
					},
					{
						name: 'Get your role from the Roles Channel',
						value: `${rolesChannel}`,
					},
				],
				timestamp: new Date(),
				footer: 
				{
					text: `Trademark ${year}`,
					icon_url: 'https://avatars3.githubusercontent.com/u/52018753?s=200&v=4',
				},
			};
			sysChannel.send({ embed: WelcomeEmbed });
		}
	}
	else if(message.content.startsWith(`${prefix}roles`))
	{
		const serverName = message.guild.name;

		var rolesRaw = message.guild.roles.array();
		//const Bots =  message.guild.members.filter(member => member.user.bot).array();
		var Roles = rolesRaw.filter(r => r != '@everyone');
		var dt = new Date();
		const year = dt.getFullYear();

		const rolesEmbed = {
			color: 0x0099ff,
			title: 'Roles',
			author: 
			{
				name: `${serverName}`,
				icon_url: 'https://avatars3.githubusercontent.com/u/52018753?s=200&v=4',
				url: 'https://primotechorg.wordpress.com/',
			},
			description: 'Please select an available role from below',
			fields: 
			[
				{
					name: 'Please Choose a Role',
					value: `${Roles}`,
				},
				{
					name: 'Command: -addrole @name-of-role',
				},
			],
			timestamp: new Date(),
			footer: 
			{
				text: `Trademark ${year}`,
				icon_url: 'https://avatars3.githubusercontent.com/u/52018753?s=200&v=4',
			},
		};

		//const rolesChannel = message.guild.channels.find(ch => ch.name === 'roles');

		//if(!rolesChannel)
		//{
			message.channel.send({ embed: rolesEmbed });
		//}
		//else
		//{
			//rolesChannel.send({ embed: rolesEmbed });
			//rolesChannel.send(`${message.member}`);
		//}
	}
	/*else if(message.content.startsWith(`${prefix}addrole`))
	{
		const newRole = message.content.substring(8);
		message.guild.createRole
		({
			name: newRole
		})
		.then(role => message.channel.send("```\n Created new role with name: " +role.name+ "\n```"));
	}*/
});

client.login(process.env.BOT_TOKEN);                                      //  invoke bot token from Heroku variables