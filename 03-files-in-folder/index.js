const fs = require("fs");

fs.readdir("03-files-in-folder/secret-folder/", (err, files) => {
  if (err) throw err;
  console.log("В папке находятся файлы:" + files);

  files.forEach((elem) => {
    fs.stat(`03-files-in-folder/secret-folder/${elem}`, (err, stats) => {
      if (err) {
        console.error(err);
        return;
      }
      let lastDot = elem.lastIndexOf(".");
      if (stats.isFile()) {
        console.log(
          `${elem.slice(0, lastDot)} - ${elem.slice(lastDot + 1)} - ${
            stats.size / 1000
          }kb`
        );
      }
    });
  });
});
