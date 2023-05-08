// Discord App Dependencies.
const Discord = require("discord.js");
const cli = new Discord.Client();

// All PSO Game Role (IDs).
const dcv1 = "1105248131358130261"; // PSO Dreamcast Version 1.
const dcv2 = "700390319027650610"; // PSO Dreamcast Version 2.
const psox = "1043165806856507444"; // PSO For Xbox.
const psogc = "700390658460090389"; // PSO GameCube.
const psopc = "700386019345956865"; // PSO PC.

// Server Color Customization (IDs).
const orange = "983707491688927232";
const blue = "983707652594991104";
const yellow = "983707779971833856";
const green = "983707839891636245";
const purple = "983707905855475762";
const brown = "983708005885423626";
const cyan = "983846795077648455";
const red = "1001148655245459487";
const pink = "1001149925372993566";

// Other Game Role (IDs).
const quake3 = "754023346097750068"; // Quake III Arena.
const Halo = "902041200159240272"; // Halo

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
            "Sure",
            "Maybe.",
            "Definitely.",
            "Absolutely not.",
            "I'm busy right now, ask me later.",
            "I don't get paid enough to answer that question.",
            "Hey man, I'm trying to finish this poptart, can a guy have a moment?"
        ];
``
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

// '!role quake3' Command.
cli.on("message", function (message) {
    if (message.content == "!role quake3") {
        message.member.roles.add(quake3);
        message.channel.send("You are now assigned to 'Quake III Arena!'");
    } else if (message.content == "!remove quake3") {
        message.member.roles.remove(quake3);
        message.channel.send("You have successfully removed 'Quake III Arena' from your Discord account.");
    }
});

// '!role halo' Command.
cli.on("message", function (message) {
    if (message.content == "!role halo") {
        message.member.roles.add(Halo);
        message.channel.send("You are now assigned to 'Halo!'");
    } else if (message.content == "!remove halo") {
        message.member.roles.remove(Halo);
        message.channel.send("You have successfully removed 'Halo' from your Discord account.");
    }
});

// '!uname orange' Command.
cli.on("message", function (message) {
  if (message.content == "!uname orange") {
    message.member.roles.add(orange);
    message.channel.send("Bam! Your nickname will now show up 'Dreamcast Orange (US)'!");
  } else if (message.content == "!remove orange") {
    message.member.roles.remove(orange);
    message.channel.send(
      "The nickname color 'Dreamcast Orange (US)' has been removed."
    );
  }
});

// '!uname blue' Command.
cli.on("message", function (message) {
  if (message.content == "!uname blue") {
    message.member.roles.add(blue);
    message.channel.send("Bam! Your nickname will now show up 'Dreamcast Blue (Europe)'!");
  } else if (message.content == "!remove blue") {
    message.member.roles.remove(blue);
    message.channel.send(
      "The nickname color 'Dreamcast Blue (Europe)' has been removed."
    );
  }
});

// '!uname yellow' Command.
cli.on("message", function (message) {
  if (message.content == "!uname yellow") {
    message.member.roles.add(yellow);
    message.channel.send("Bam! Your nickname will now show up 'Rappy Yellow'!");
  } else if (message.content == "!remove yellow") {
    message.member.roles.remove(yellow);
    message.channel.send(
      "The nickname color 'Rappy Yellow' has been removed."
    );
  }
});

// '!uname green' Command.
cli.on("message", function (message) {
  if (message.content == "!uname green") {
    message.member.roles.add(green);
    message.channel.send("Bam! Your nickname will now show up 'Chief Green'!");
  } else if (message.content == "!remove green") {
    message.member.roles.remove(green);
    message.channel.send(
      "The nickname color 'Chief Green' has been removed."
    );
  }
});

// '!uname purple' Command.
cli.on("message", function (message) {
  if (message.content == "!uname purple") {
    message.member.roles.add(purple);
    message.channel.send("Bam! Your nickname will now show up 'Ruins Purple'!");
  } else if (message.content == "!remove purple") {
    message.member.roles.remove(purple);
    message.channel.send(
      "The nickname color 'Ruins Purple' has been removed."
    );
  }
});

// '!uname brown' Command.
cli.on("message", function (message) {
  if (message.content == "!uname brown") {
    message.member.roles.add(brown);
    message.channel.send("Bam! Your nickname will now show up 'Doo-Doo Brown'!");
  } else if (message.content == "!remove brown") {
    message.member.roles.remove(brown);
    message.channel.send(
      "The nickname color 'Doo-Doo Brown' has been removed."
    );
  }
});

// '!uname cyan' Command.
cli.on("message", function (message) {
  if (message.content == "!uname cyan") {
    message.member.roles.add(cyan);
    message.channel.send("Bam! Your nickname will now show up 'Uranus Green'!");
  } else if (message.content == "!remove cyan") {
    message.member.roles.remove(cyan);
    message.channel.send(
      "The nickname color 'Uranus Green' has been removed."
    );
  }
});

// '!uname red' Command.
cli.on("message", function (message) {
    if (message.content == "!uname red") {
      message.member.roles.add(red);
      message.channel.send("Bam! Your nickname will now show up 'Bloody Red'!");
    } else if (message.content == "!remove red") {
      message.member.roles.remove(red);
      message.channel.send(
        "The nickname color 'Bloody Red' has been removed."
      );
    }
  });

  // '!uname pink' Command.
cli.on("message", function (message) {
    if (message.content == "!uname pink") {
      message.member.roles.add(pink);
      message.channel.send("Bam! Your nickname will now show up 'Manly Red!");
    } else if (message.content == "!remove pink") {
      message.member.roles.remove(pink);
      message.channel.send(
        "The nickname color 'Manly Red' has been removed."
      );
    }
  });
  

// Bot Login Token.
cli.login("NzEzNzIyODQ2NTQ2NzU1NjI0.GtzaZ4.xBevGM-_34w_5uvcQrmdY_9wVLi2KaSuZn3Ipc"); // If you are seeing this on Github, this token has expired.