// Discord App Dependencies.
const { Message } = require("discord.js");
const Discord = require("Discord.js");
const cli = new Discord.Client();

// When the client is running, log it in the console.
cli.once("ready", () => {
    console.clear();
    console.log("Healthcliff Flowen: Running....")
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
cli.login("NzEzNzIyODQ2NTQ2NzU1NjI0.XskQMg.HbzPzA6JoEtbECsOcItyFSUmYTQ"); // If you are seeing this on Github, this token has expired.