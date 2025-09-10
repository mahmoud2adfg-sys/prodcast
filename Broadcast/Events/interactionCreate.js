const client = require("../index.js")
const { EmbedBuilder, ButtonStyle, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { Database } = require("st.db");
client.on('interactionCreate', async interaction => {

	if(interaction.isChatInputCommand()) {
		const Command = client.ŚÇ.get(interaction.commandName)
		if(!Command) return console.log(`❌ | Check ${interaction.commandName}`)
		try {
			await Command.execute(interaction, client)
		} catch(Err) {
			console.log(`Error Executing ${interaction.commandName}`)
			console.log(Err)	
		}
	} else if(interaction.isUserContextMenuCommand()) {
		const Command = client.ŚÇ.get(interaction.commandName)
		if(!Command) return console.log(`❌ | Check ${interaction.commandName}`)
		try {
			await Command.execute(interaction, client)
		} catch(Err) {
			console.log(`Error Executing ${interaction.commandName}`)
			console.log(Err)	
		}
	}
})

