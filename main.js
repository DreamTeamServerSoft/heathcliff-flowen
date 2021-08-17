// Discord App Dependencies.
const { Message } = require("discord.js");
const Discord = require("Discord.js");
const cli = new Discord.Client();

// All Server Role (IDs).
const dcv1 = "700385883395981413"; // PSO Dreamcast Version 1.

// When the client is running, log it in the console.
cli.once("ready", () => {
    console.clear();
    console.log("Healthcliff Flowen: Running....")
});

// '!help' Command.
cli.on("message", function (message) {
    if (message.content === "!help") {
        message.channel.send("Hi there! Assigning a role or using a command is easy. All you need to do is head over to #📝-assign-roles and pick a command or role from the list provided in the channel. Once you find a role you like, you can aquire it by going to #📝-assign-roles and entering a valid command. If you entered the correct command or role, you should get a message from me confirming it. You can also remove roles by going to #📝-assign-roles and typing the command '!remove' followed by a space and the name of the role you'd like to remove. For instance, if you want to remove the role '!role dcv2' you would enter '!remove dcv2'. I hope you found this helpful!");
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

// '!roll dice' Command.
cli.on("message", function (message) {
    if (message.content === "!roll dice") {
        // Generate Random Integers Between 1 & 6.
        const RandInt = Math.floor(Math.random() * 6) + 1;

        // Display Random Int.
        message.channel.send("- Throws Di On Table -");
        message.channel.send("The Di Has Landed On Side: (" + RandInt + ")!");
    }
});

// '!role dcv1' Command.
cli.on("message", function (message) {
    if (message.content == "!role dcv1") {
        message.member.roles.add(dcv1);
        message.channel.send("You are now assigned to 'PSO Dreamcast Version 1!'");
    } else if (message.content == "!remove dcv1") {
        message.member.roles.remove(dcv1);
        message.channel.send("You have successfully removed 'PSO Dreamcast Version 1' from your Discord account.");
    }
});




// Bot Login Token.
cli.login("NzEzNzIyODQ2NTQ2NzU1NjI0.XskQMg.WJzTlf23rtISMvsP3j873RoZ0xE"); // If you are seeing this on Github, this token has expired.np