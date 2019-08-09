require("dotenv").config();
var keys = require("./keys.js"); //don't know if i need this since its for the front-end

var express = require('express');
var app = express();
var fetch = require('node-fetch');