require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const favicon = require("serve-favicon");
const hbs = require("hbs");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

mongoose
  // .connect('mongodb://localhost/dominics', { useUnifiedTopology: true, useNewUrlParser: true }
  //   )
  // .connect(process.env.MONGODB_URI, { useNewUrlParser: true , useUnifiedTopology: true})
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();
const Recaptcha = require("express-recaptcha").RecaptchaV3;
//import Recaptcha from 'express-recaptcha'
const recaptcha = new Recaptcha("SITE_KEY", "SECRET_KEY");

const mapsKey = process.env.MAPSKEY;
hbs.registerHelper("maps_api_url", function () {
  let apiUrl = `https://maps.googleapis.com/maps/api/js?key=${mapsKey}`;
  return apiUrl;
});

const fontAwesomeKey = process.env.FONTAWESOMEKEY;
hbs.registerHelper("font_awesome_api_url", function () {
  let apiUrl = `https://kit.fontawesome.com/${fontAwesomeKey}.js`;
  return apiUrl;
});

let currentYear = new Date().getFullYear();
hbs.registerHelper("current_year", function () {
  return currentYear;
});

// Middleware Setup
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(
  require("node-sass-middleware")({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    sourceMap: true,
  })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));
// registers the location of partials
hbs.registerPartials(__dirname + "/views/partials");

// default value for title local
app.locals.title = "Dominic's Pizza & Pasta";

const index = require("./routes/index");
app.use("/", index);

module.exports = app;
