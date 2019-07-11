function UsuariosDAO(connection){
    this._connection = connection;
}

// CREATE
UsuariosDAO.prototype.createUser = function(user, callback){
    console.log('MYSQL : UsuariosDAO.createUser');
    this._connection.query('INSERT INTO users SET ?', user, callback);
}

// READ
UsuariosDAO.prototype.getUsers = function(callback){
    console.log('MYSQL : UsuariosDAO.getUsers');
    this._connection.query('SELECT nm_user FROM users', callback);
}

// UPDATE
UsuariosDAO.prototype.updateUser = function(campos, id, callback){
    console.log('MYSQL : UsuariosDAO.updateUser');
    this._connection.query('UPDATE users SET ? WHERE id_user = ?', [campos, id], callback)
}

// DELETE
UsuariosDAO.prototype.deleteUser = function(id, callback){
    console.log('MYSQL : UsuariosDAO.deleteUser');
    this._connection.query('DELETE FROM users WHERE id_user = ?', id, callback);
}

// AUTENTICATION
UsuariosDAO.prototype.autenticateUser = function(user, callback){
    console.log('MYSQL : UsuariosDAO.autenticateUser');
    this._connection.query('SELECT id_user, nm_user, nm_pass FROM users WHERE nm_user = ? AND nm_pass = ?', [user.nm_user, user.nm_pass], callback);
}

module.exports = function(){
    console.log('MODEL : UsuariosDAO');
    return UsuariosDAO;
}
