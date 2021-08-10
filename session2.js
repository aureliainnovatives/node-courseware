const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    /*
    const user = {
      username: "Mayur",
      email: "mayur@gmail.com",
    };

    res.write(JSON.stringify(user));
    res.end();
*/
    const conte = fs.readFileSync("./templates/index.html");
    res.write(conte);
    res.end();
  }
});
server.listen(4000);
server.on("connection", (a) => {
  console.log("CONNECTION READY");
});
