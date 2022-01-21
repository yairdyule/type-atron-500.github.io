const express = require("express");
const cors = require("cors");

const app = express();

const CORS_DOMAINS = ["https://typerino.vercel.app/", "http://localhost:3000"];
// const domainsFromEnv = process.env.CORS_DOMAINS || "http://localhost:3000";
// const whitelist = domainsFromEnv.split(",").map((item) => item.trim());
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || CORS_DOMAINS.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

const texts = [
  "oh no, are you going to finish that?",
  "my thought as well",
  "the quick brown fox jumped over the lazy dog",
  "hello, world!",
];

app.get("/", (req, res) => {
  res.send({ msg: "ohshit" });
});

app.get("/getText", (req, res) => {
  const text = texts[Math.floor(Math.random() * texts.length)];
  res.send({ text });
});

app.listen(8000, () => {
  console.log("listening on http://localhost:8000");
});
