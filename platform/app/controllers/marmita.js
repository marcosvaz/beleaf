module.exports.index = function (application, req, res, id) {
    console.log('controller : marmita', {});

    var request = require('request');

    const hostname = "http://apibeleaf-env.nuydu3iia5.us-east-2.elasticbeanstalk.com";
    const path = "/marmitas";

    request((hostname + path), (err, response, body) => {
        if (err){
            res.status(400).send("Error");
        } else {
            body = JSON.parse(body);
            res.render('marmita', { api : body, id : id-1 });
        }
    });

}
