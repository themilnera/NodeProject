const myController = require("../controllers");
const routes = require("express").Router();

routes.get("/", myController.helloFunction);
routes.get("/ttech", myController.ttechFunction);

module.exports = routes;