let fs = require("fs");

fs.open("02-write-file/text.txt", "w", (err) => {
  console.log("Enter text");
  if (err) throw err;
});

function appendText(text) {
  fs.appendFile("02-write-file/text.txt", `${text}\n`, (err) => {
    if (err) throw err;
  });
}

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function readText() {
  readline.question("", (text) => {
    process.openStdin().on("keypress", function (chunk, key) {
      if (key && key.name === "c" && key.ctrl) {
        console.log("Text saved");
        process.exit();
      }
    });
    if (text === "exit") {
      readline.close();
      console.log("Text saved");
    } else {
      appendText(text);
      readText();
    }
  });
}

readText();
