// Discord App Dependencies.
const { Message } = require("discord.js");
const Discord = require("Discord.js");
const cli = new Discord.Client();

// When the client is running, log it in the console.
cli.once("ready", () => {
    console.clear();
    console.log("Healthcliff Flowen: Running....")
});

// '!help' Command.
cli.on("message", function (message) {
    if (message.content === "!help") {
        message.channel.send("Hi there! Assigning a role or using a command is easy. All you need to do is head over to #📝-assign-roles and pick a command or role from the list provided in the channel. Once you find a role you like, you can aquire it by going to #📝-assign-roles and entering a valid command. If you entered the correct command or role, you should get a message from me confirming it.");
    }
});

// '!Ask' Command.
cli.on("message", function (message) {
    if (message.content === "!ask") {
        // Array of Possible Answers.
        const answers = [
            "Yes.",
            "No.",
            "Maybe.",
            "I'm busy right now, ask me later."
        ];

        // Based On the Above Strings, randomly loop through all possibilities.
        let answer = answers[Math.floor(Math.random() * answers.length)];
        // Respond to the user with an answer.
        message.channel.send(answer);
    }
});

// Bot Login Token.
cli.login("NzEzNzIyODQ2NTQ2NzU1NjI0.XskQMg.cmpQmSESuznKv9QiYZiqH9kv2eY"); // If you are seeing this on Github, this token has expired.np