
const Home = require("../models/home");

exports.getHome = (req, res, next) => {
    Home.fetchAll(registeredHomes => {
        res.render('home', { registeredHomes: registeredHomes, pageTitle: 'airbnb Home' });
    });
};

exports.getAddHome = (req, res, next) => {
    res.render('addHome', { pageTitle: 'Add Home to airbnb' });
};

exports.getHomeAdded = (req, res, next) => {
    const { houseName, price, location, rating, photoUrl } = req.body;
    const home = new Home(houseName, price, location, rating, photoUrl);
    home.save();
    res.render('homeAdded', { pageTitle: 'Home Added Successfully' });
};