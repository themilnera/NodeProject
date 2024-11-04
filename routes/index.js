const myController = require("../controllers");
const routes = require("express").Router();

routes.get("/", myController.helloFunction);
routes.get("/ttech", myController.ttechFunction);
routes.get("/new", myController.newFunction);
module.exports = routes;