const Twit = require("twit");
const express = require("express");
const app = express();

const apikey = "xxx";
const apiSecretKey = "xxx";
const accessToken = "xxx";
const accessTokenSecret = "xxx";

const monkey = require("./monkey");
const thirty_minutes = 30 * 60 * 1000;

var T = new Twit({
  consumer_key: apikey,
  consumer_secret: apiSecretKey,
  access_token: accessToken,
  access_token_secret: accessTokenSecret,
});

for (var i = 0; i < 2; i++) {
  var i = 1; //  set your counter to 1

  function myLoop() {
    //  create a loop function
    setTimeout(function () {
      //  call a 30m setTimeout when the loop is called

      // Getting a random number to define quote's lenght
      var random_3_to_15_Number = Math.floor(Math.random() * 15 + 1);

      // Using the Monkey function and the variable above to type the random tweet
      var quote = monkey.createRandomString(random_3_to_15_Number);

      T.post(
        "statuses/update",
        { status: `${quote}` },
        function (err, data, response) {
          console.log("Tweeted Succefully");
        }
      );

      i++; //  increment the counter
      if (i > -1) {
        //  if the counter < 10, call the loop function
        myLoop(); //  ..  again which will trigger another
      }
    }, thirty_minutes); // setting Timeout()
  }

  myLoop();
}
