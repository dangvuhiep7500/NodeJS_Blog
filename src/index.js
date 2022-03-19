const express = require("express");
const path = require("path");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const app = express();
const port = 3000;
// const mongoose = require("mongoose");

const route = require("./routes");
const db = require('./config/db');

//connect db
db.connect();
// mongoose
//   .connect("mongodb://localhost:27017/QLBanDoDienTu")
//   .then(console.log("Connected !!!"));


const hbs = exphbs.create({
  // helpers: {
  //   sayHello: function () {
  //     alert("Hello World");
  //   },
  //   getStringifiedJson: function (value) {
  //     return JSON.stringify(value);
  //   },
  // },
  extname: ".hbs",
  // defaultLayout: "main",
  // partialsDir: path.join(__dirname, "resources\\views\\partials"),
});

app.use(express.static(path.join(__dirname, "public")));

//HTTP logger
// app.use(morgan('combined'))

//template engine
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources\\views"));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

//routes
route(app);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
