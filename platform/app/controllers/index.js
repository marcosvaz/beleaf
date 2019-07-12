let hostname = "http://192.168.99.100:3001";

module.exports.index = function (application, req, res){
    console.log('controller : index', {});
    
    var request = require('request');

    let path = "/marmitas";

    request((hostname + path), (err, response, body) => {
        if (err) {
            res.status(400).send("Error");
        } else {
            body = JSON.parse(body);
            res.render('index', { api: body });
        }
    });
}
module.exports.orderbyname = function(application, req, res){
    console.log('controller : orderbyname', {});

    var request = require('request');

    let path = "/marmitas/orderbyname";

    request((hostname + path), (err, response, body) => {
        if (err) {
            res.status(400).send("Error");
        } else {
            body = JSON.parse(body);
            res.render('index', { api: body });
        }
    });
}
module.exports.orderbyprice = function (application, req, res) {
    console.log('controller : orderbyprice', {});

    var request = require('request');

    let path = "/marmitas/orderbyprice";

    request((hostname + path), (err, response, body) => {
        if (err) {
            res.status(400).send("Error");
        } else {
            body = JSON.parse(body);
            res.render('index', { api: body });
        }
    });
}