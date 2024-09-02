require("dotenv").config({ path: __dirname + "/.env" });
const { twitterClient } = require("./twitter.js")

const tweet = async () => {
  try {
    await twitterClient.v2.tweet("Holuuu");
  } catch (e) {
    console.log(e)
  }
}

tweet();