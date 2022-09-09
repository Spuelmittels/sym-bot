const Discord = require("discord.js")

const TOKEN = "OTEzNzk2NTk0OTIxNTA0Nzk4.GBsj8M.XJkYLlgrR7eY6DSZxtbpBjzhkBzv155uo6FGuM"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})







client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("bitch") 
    }
})

client.login(TOKEN)











