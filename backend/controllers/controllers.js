const menuDAO = require("../models/menuModel");
const menu = new menuDAO({ filename: "menu.db", autoload: true });
const orderDAO = require("../models/ordersModel");
const order = new orderDAO({ filename: "orders.db", autoload: true });

//initialise using menuModel and create a new .db file
exports.newList = function (req, res) {
  menu.init();
  res.redirect("/");
};

//list all the menus
exports.listMenu = function (req, res) {
  menu.getAllEntries()
    .then((list) => {
      res.json(list);
      console.log(list);
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });
};


exports.listOrders = function (req, res) {
  order.getAllEntries()
    .then((list) => {
      res.json(list);
      //console.log(list);
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });
};
exports.addOrder = function (req, res) {
  console.log("req body to add to database : ", req.body);
  order.addEntry(req.body).catch((err) => {
    console.log("promise rejected", err);
  });
  res.redirect("/");
};

//update rating
exports.updateRating = function (req, res) {
  menu.updateRating(req.body.id, req.body.name, req.body.description, req.body.price, req.body._id, req.body.category, req.body.available, req.body.ingredients, req.body.recipe, req.body.rating);
  res.redirect('back');
}