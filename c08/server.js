const express = require("express");
const https = require("https");
const fs = require("fs");
const history = require("connect-history-api-fallback");
const jsonServer = require("json-server");
const bodyParser = require('body-parser');
const auth = require("./authMiddleware");
const router = jsonServer.router("serverdata.json");

const enableHttps = false;
const ssloptions = {}
if (enableHttps) {
  ssloptions.cert =  fs.readFileSync("./ssl/sportsstore.crt");
  ssloptions.key = fs.readFileSync("./ssl/sportsstore.pem");
}

const port = 2112;
const app = express();
app.use(bodyParser.json());
app.use(auth);
app.use("/api", router);
app.use(history());
app.use("/", express.static("./dist/c05"));
app.listen(port, () => console.log(`HTTP Server running on port ${port}`));

if (enableHttps) {
  https.createServer(ssloptions, app).listen(443, () => console.log("HTTPS Server running on port 443"));
} else {
  console.log("HTTPS disabled");
}
