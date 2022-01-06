const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.static("public"));

const readFile = (fileName, numWords) => {
  return new Promise((resolve, reject) => {
    const readStream = fs.createReadStream(__dirname + `/data/${fileName}`, {
      highWaterMark: 1,
    });
    readStream.setEncoding("UTF8");

    let words = [];
    let word;
    let numWords = 0;
    let char = "";

    readStream.on("data", (byte) => {
      char = byte.toString("UTF-8");
      if (char == "\n") {
        words.push(word);
        word = "";
      } else {
        word += char;
      }
    });

    readStream.on("end", () => {
      console.log("done reading");
      resolve(words);
    });

    readStream.on("error", (err) => {
      reject(err);
      return;
    });
  });
};

app.get("/getText", (req, res) => {
  let amount = req.query.amount;
  readFile("eng_1k.txt")
    .then((data) => {
      let words = [];
      for (let i = 0; i < amount; i++) {
        let index = Math.floor(Math.random() * data.length);
        words.push(data[index]);
      }
      res.send({ words: words });
    })
    .catch((err) => {
      console.error(err);
      res.send({ words: null, error: "unable to read words" });
    });
});

app.listen(process.env.PORT || 8000, () =>
  console.log(
    `server listening on http://localhost:${process.env.PORT || 8000}`
  )
);
