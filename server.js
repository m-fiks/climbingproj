const express = require ('express')
const PORT = process.env.PORT || 8080;
const app = express();
const bodyParser = require("body-parser");

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get('/all', (req, res) => {
  
})

app.listen(PORT, () => {
    console.log(`listening at: ${PORT}`)
})