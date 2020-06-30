const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");


const connection = mysql.createConnection({
    host: "localhost",
    user: "me",
    password: "password",
    database: "neighborly",
})