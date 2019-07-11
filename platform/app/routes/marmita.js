module.exports = function (application) {
    application.get('/marmita/:id', function (req, res) {
        console.log('route:marmita'); // has loaded this page
        var id = req.params.id;
        application.app.controllers.marmita.index(application, req, res, id);
    });
}
