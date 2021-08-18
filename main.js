// Discord App Dependencies.
const { Message } = require("discord.js");
const Discord = require("Discord.js");
const cli = new Discord.Client();

// All PSO Game Role (IDs).
const dcv1 = "700385883395981413"; // PSO Dreamcast Version 1.
const dcv2 = "700390319027650610"; // PSO Dreamcast Version 2.
const psogc = "700390658460090389"; // PSO GameCube.
const psopc = "700386019345956865"; // PSO PC.
const psobb = "713743313701961749"; // PSO BB.
const psox = "713744416367444058"; // PSOX.
const pso2 = "716064125188309024"; // PSO2.

// Other Misc DreamTeam Role (IDs).
const pingme = "770733104775036929" // Subscribe to 'Announcements'.

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

// '!role pingme' Command.
cli.on("message", function (message) {
    if (message.content == "!role pingme") {
        message.member.roles.add(pingme);
        message.channel.send("You are now subscribed to DreamTeam announcements! You will be pinged by the 'Announcements' channel when something new comes to DreamTeam. You will also be notified if a YouTube video is posted on our official YouTube channel.");
    } else if (message.content == "!remove pingme") {
        message.member.roles.remove(pingme);
        message.channel.send("You have unsubscribed from DreamTeam announcements. :(");
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

// '!role dcv2' Command.
cli.on("message", function (message) {
    if (message.content == "!role dcv2") {
        message.member.roles.add(dcv2);
        message.channel.send("You are now assigned to 'PSO Dreamcast Version 2!'");
    } else if (message.content == "!remove dcv2") {
        message.member.roles.remove(dcv2);
        message.channel.send("You have successfully removed 'PSO Dreamcast Version 2' from your Discord account.");
    }
});

// '!role psogc' Command.
cli.on("message", function (message) {
    if (message.content == "!role psogc") {
        message.member.roles.add(psogc);
        message.channel.send("You are now assigned to 'PSO GameCube!'");
    } else if (message.content == "!remove psogc") {
        message.member.roles.remove(psogc);
        message.channel.send("You have successfully removed 'PSO GameCube' from your Discord account.");
    }
});

// '!role psopc' Command.
cli.on("message", function (message) {
    if (message.content == "!role psopc") {
        message.member.roles.add(psopc);
        message.channel.send("You are now assigned to 'PSO PC!'");
    } else if (message.content == "!remove psopc") {
        message.member.roles.remove(psopc);
        message.channel.send("You have successfully removed 'PSO PC' from your Discord account.");
    }
});

// '!role psobb' Command.
cli.on("message", function (message) {
    if (message.content == "!role psobb") {
        message.member.roles.add(psobb);
        message.channel.send("You are now assigned to 'PSO Blue Burst!'");
    } else if (message.content == "!remove psobb") {
        message.member.roles.remove(psobb);
        message.channel.send("You have successfully removed 'PSO Blue Burst' from your Discord account.");
    }
});

// '!role psox' Command.
cli.on("message", function (message) {
    if (message.content == "!role psox") {
        message.member.roles.add(psox);
        message.channel.send("You are now assigned to 'PSO Xbox!'");
    } else if (message.content == "!remove psox") {
        message.member.roles.remove(psox);
        message.channel.send("You have successfully removed 'PSO Xbox' from your Discord account.");
    }
});

// '!role pso2' Command.
cli.on("message", function (message) {
    if (message.content == "!role pso2") {
        message.member.roles.add(pso2);
        message.channel.send("You are now assigned to 'PSO 2!'");
    } else if (message.content == "!remove pso2") {
        message.member.roles.remove(pso2);
        message.channel.send("You have successfully removed 'PSO 2' from your Discord account.");
    }
});


// Bot Login Token.
cli.login("NzEzNzIyODQ2NTQ2NzU1NjI0.XskQMg.tfqJQaf7Xcsawuy8iG6dv6DxSHE"); // If you are seeing this on Github, this token has expired.