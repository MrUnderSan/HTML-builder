const fs = require("fs");

const fsPromises = fs.promises;

fsPromises
  .mkdir("04-copy-directory/files-copy", { recursive: true })
  .then(function () {})
  .catch(function () {
    console.log("failed to create directory");
  });

fs.readdir("04-copy-directory/files/", (err, files) => {
  if (err) throw err;

  files.forEach((elem) => {
    fsPromises
      .copyFile(
        `04-copy-directory/files/${elem}`,
        `04-copy-directory/files-copy/${elem}`
      )
      .then(function () {})
      .catch(function (error) {
        console.log(error);
      });
  });
});
