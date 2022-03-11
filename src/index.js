const express = require('express')
const path = require('path')
const morgan = require('morgan')
const exphbs = require("express-handlebars");
const app = express()
const port = 3000


const hbs = exphbs.create({
  // helpers: {
  //   sayHello: function () {
  //     alert("Hello World");
  //   },
  //   getStringifiedJson: function (value) {
  //     return JSON.stringify(value);
  //   },
  // },
  extname:".hbs",
  // defaultLayout: "main",
  // partialsDir: path.join(__dirname, "resources\\views\\partials"),
});

app.use(express.static(path.join(__dirname,"public")));

//HTTP logger
// app.use(morgan('combined'))

//template engine
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources\\views"));
app.use(express.urlencoded({
  extended:true
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});

app.get('/search', (req, res) => {
  res.render('search');
});

app.post('/search', (req, res) => {
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`port: ${port}`)
})
