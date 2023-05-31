const request = require('request');
const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({ checkUpdate: false });

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

let friendId = '<ID>' // ID d'un ami

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

client.on('ready', async () => {
    console.log(`Selfbot connecté sur ${client.user.tag} !`)
})

client.on('messageCreate', async message => {
    if (message.content.startsWith('+lock')) { // Commande à éxecuté dans le groupe a lock (.lock)
        message.delete().catch(console.error)
        setInterval(async () => {
                request(`https://discord.com/api/v9/channels/${message.channel.id}/recipients/${friendId}`, {
                    headers: {
                        authorization: client.token,
                    },
                    method: "PUT",
                });
        }, 500);
    }
})

client.login('<T0KEN>'); // Token du compte
