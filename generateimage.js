const Canvas = require("canvas")
const Discord = require("discord.js")
const background = "https://i.imgur.com/kcbM6vZ.png"

const av = {
    size: 256,
    x: 390,
    y: 80
}

const dim = {
    height: 480,
    width: 1000,
    margin: 50
}

const generateImage = async (member) => {
    let username = member.user.username
    let discrim = member.user.discriminator
    let avatarURL = member.user.displayAvatarURL({format: "png", dynamic: false,size: av.size})

    const canvas = Canvas.createCanvas(dim.width, dim.height)
    const ctx = canvas.getContext("2d")
// male im hintergrund
    const backimg = await Canvas.loadImage(background)
    ctx.drawImage(backimg, 0, 0)
//male eine schwarze box
    ctx.fillStyle = "rgba(0,0,0,0.8)"
    ctx.fillRect(dim.margin, dim.margin, dim.width - 2 * dim.margin, dim.height - 2 * dim.margin)

    const avimg = await Canvas.loadImage(avatarURL)
    ctx.save()

    ctx.beginPath()
    ctx.arc(av.x + av.size / 2, av.y + av.size / 2, av.size / 2, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.clip()
    ctx.drawImage(avimg, av.x, av.y)
    ctx.restore()

//text unter bild
    ctx.fillStyle = "white"
    ctx.textAlign = "center"

//male dden willkommenstext
    ctx.font = "50px Sans"
    ctx.fillText("Willkommen!", dim.width / 2, dim.margin + 30)

//male den namen
    ctx.font = "60px Sans"
    ctx.fillText(username + discrim, dim.width/2, dim.height - dim.margin - 30)

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "welcome.png")
    return attachment
}

module.exports = generateImage