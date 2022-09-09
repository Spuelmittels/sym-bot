const Discord = require("discord.js")
const TOKEN = "OTEzNzk2NTk0OTIxNTA0Nzk4.GBDWa4.DccMdlCT986bo1mr2yRW2rb5rAHdMsm689K_Jo"
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

const generateImage = require("./generateImage")





client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("hello bitch") 
    }
})

const welcomeChannelId = "1017789710296436909"

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `<@${member.id}>Willkommen auf unserem Klassencord! Schön, dass du da bist!`,
        files: [img]
    })

})
client.login(TOKEN)











