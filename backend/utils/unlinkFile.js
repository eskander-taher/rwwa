const fs = require("fs");
const path = require("path");

// delete files from storage
const unlinkfile = (name) => {
  const filePath = path.join(__dirname, `../storage/${name}`);
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File deleted successfully");
  });
};

module.exports = {
  unlinkfile,
};
