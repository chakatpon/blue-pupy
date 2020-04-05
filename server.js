const express = require("express");
const path = require("path");
const app = express();

const port = process.env.PORT || 4000;

if (["production"].includes(process.env.NODE_ENV)) {
  console.log("this is production mode ");
  app.use(express.static("dist"));
  //   app.get("/pageA", (req, res) => {
  //     console.log("This is page A");
  //     res.end();
  //   });
  //   app.get("/pageB", (req, res) => {
  //     console.log("This is page B");
  //     res.end();
  //   });
  //   app.get("/pageC", (req, res) => {
  //     console.log("This is page C");
  //     res.end();
  //   });
  app.get("*", (req, res) => {
    res.sendFile(path.resolve("dist", "index.html"));
  });
} else {
  console.log("this is development mode");
}

app.listen(port, () => {
  console.log("Server listen on port : ", port);
});
