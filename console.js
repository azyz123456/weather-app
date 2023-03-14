const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("is angelina the best person in the world? ", function (answer) {
if (answer=="yes") {
    console.log("<3");
} else {
    console.log("You will die a violent death today.");
    }

  rl.close();
});
