const Discord = require("Discord.js");
const Client = new Discord.Client();
const prefix = "-";


Client.on(`ready`, ()=> {
   console.log("AlienManBot is ready"); 
})

Client.on(`message`, (message)=> {
    if(!message.content.startsWith(prefix)) return;

    if(message.content.startsWith(prefix + "talk with Alien Bot")){
        message.channel.send("*what are you doing Alien Bot?");
    }

    if(!message.content.startsWith(prefix)) return;

    if(message.content.startsWith(prefix + "nothing, you then?")){
        message.channel.send("*not that much, do you wan't to eat pancakes?");
    }

    if(!message.content.startsWith(prefix)) return;

    if(message.content.startsWith(prefix + "yes, where and when?")){
        message.channel.send("*5 min on the backside of the moon. ok?")
    }

    if(!message.content.startsWith(prefix)) return;

    if(message.content.startsWith(prefix + "spam")){
        message.channel.send("*spam");
    } 

    if(!message.content.startsWith(prefix)) return;

    if(message.content.startsWith(prefix + "spamm")){
        message.channel.send("-spamm")
    }






});




Client.login(process.en.BOT_TOKEN);
