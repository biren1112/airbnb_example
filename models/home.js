const path = require('path');
const fs = require('fs');
const rootDir = require('../utils/pathUtil');
const registeredHomes = [];

module.exports = class Home {
    constructor(houseName, price, location, rating, photoUrl) {
        this.houseName = houseName;
        this.price = price;
        this.location = location;
        this.rating = rating;
        this.photoUrl = photoUrl;
    }

    save() {
        Home.fetchAll(registeredHomes => {
            registeredHomes.push(this);
            const homeDataPath = path.join(rootDir, 'data', 'homes.json');
            fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), error => {
                console.log("An Error Occurred " + error);
            })
        })
    }

    static fetchAll(callback) {
        const homeDataPath = path.join(rootDir, 'data', 'homes.json');

        fs.readFile(homeDataPath, (error, data) => {
            callback(!error ? JSON.parse(data) : []);
        })
    }

}