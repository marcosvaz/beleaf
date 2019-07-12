module.exports = function(application, req, res){
    var md5 = require('md5'),
        jwt = require('jsonwebtoken');
    
    var conn = application.config.dbConnection(); // Conexão com o banco

    application.get('/', function (req, res) {
        res.status(200).send('API online!');
    });

    var MarmitasDAO = new application.app.models.MarmitasDAO(conn); // Marmitas
    var UsuariosDAO = new application.app.models.UsuariosDAO(conn); // Usuários

    // MARMITAS
    // CREATE
    application.post('/marmitas/add', verifyJWT, function(req, res) {
        var marmita = req.body;
        marmita.nr_discount = (marmita.nr_discount / 100);
        MarmitasDAO.addMarmita(marmita, function(error, result){
            if(error){
                res.status(400).send(error);
            } else {
                res.status(200).send('' + result.insertId + '');
            }
        });
    });
    // READ
    application.get('/marmitas', function(req, res) {
        MarmitasDAO.getMarmitas(function (error, result) {
            if (error) {
                res.status(400).send(error);
            } else {
                res.status(200).send(result);
            }
        });
    });
    // UPDATE
    application.put('/marmitas/update/:id', verifyJWT, function(req, res){
        var campos = req.body;
        marmita.nr_discount = (marmita.nr_discount / 100)
        MarmitasDAO.updateMarmita(campos, req.params.id, function(error, result){
            if(result.changedRows == 0 || error){
                res.status(400).send(error);
            } else {
                res.status(200).send('' + req.params.id + '');
            }
        });
    });
    // DELETE
    application.delete('/marmitas/delete/:id', verifyJWT, function(req, res) {
        MarmitasDAO.deleteMarmita(req.params.id, function(error, result){
            if (result.affectedRows == 0) {
                res.status(400).send(error);
            } else {
                res.status(200).send();
            }
        });
    });
    // ORDER BY name
    application.get('/marmitas/orderbyname', function (req, res) {
        MarmitasDAO.getMarmitasByName(function (error, result) {
            if (error) {
                res.status(400).send(error);
            } else {
                res.status(200).send(result);
            }
        });
    });
    // ORDER BY price
    application.get('/marmitas/orderbyprice', function (req, res) {
        MarmitasDAO.getMarmitasByPrice(function (error, result) {
            if (error) {
                res.status(400).send(error);
            } else {
                res.status(200).send(result);
            }
        });
    });

    // USERS
    // CREATE
    application.post('/users/add', verifyJWT, function(req, res){
        var user = req.body;
        user.nm_pass = md5(user.nm_pass);
        UsuariosDAO.createUser(user, function(error, result){
            if(error){
                res.status(400).send(error);
            } else {
                res.status(200).send('' + result.insertId + '');
            }
        });
    });
    // READ
    application.get('/users', verifyJWT, function(req, res){
        UsuariosDAO.getUsers(function(error, result){
            if(error){
                res.status(400).send(error);
            } else {
                res.status(200).send(result);
            }
        });
    });
    // UPDATE
    application.put('/users/update/:id', verifyJWT, function (req, res) {
        var campos = req.body;
        if(campos.nm_pass != null){
            campos.nm_pass = md5(campos.nm_pass);
        }
        UsuariosDAO.updateUser(campos, req.params.id, function(error, result) {
            if (result.changedRows == 0 || error) {
                res.status(400).send(error);
            } else {
                res.status(200).send('' + req.params.id + '');
            }
            res.status(400).send(error);
        });
    });
    // DELETE
    application.delete('/users/delete/:id', verifyJWT, function (req, res) {
        UsuariosDAO.deleteUser(req.params.id, function (error, result) {
            if (result.affectedRows == 0) {
                res.status(400).send(error);
            } else {
                res.status(200).send();
            }
        });
    });


    // AUTENTICATION
    application.post('/autentication', function(req, res){
        var user = req.body;
        user.nm_pass = md5(user.nm_pass);
        UsuariosDAO.autenticateUser(user, function(error, result){
            if(result[0] == null){
                res.status(401).send({ auth: false, token: null });
            } else {
                var id = result[0].id_user;
                var token = jwt.sign({ id }, process.env.SECRET, {
                    expiresIn: 300 // 5min
                });
                res.status(200).send({ auth: true, token: token });
            }
        });
    });

    // Validação
    function verifyJWT(req, res, next){
        var token = req.headers['x-access-token'] || req.headers['authorization'];
        if(token.startsWith('Bearer ')){
            token = token.slice(7, token.length);
        }
        if(!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

        jwt.verify(token, process.env.SECRET, function(error, decoded){
            if(error) return res.status(400).send({ auth: false, message: 'Failed to authenticate token.' });

            req.userId = decoded.id;
            next();
        });
    }
}