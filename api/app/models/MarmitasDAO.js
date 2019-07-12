function MarmitasDAO(connection){
    this._connection = connection;
}

// CREATE
MarmitasDAO.prototype.addMarmita = function(marmita, callback){
    console.log('MYSQL : MarmitasDAO.addMarmita');
    this._connection.query('INSERT INTO menu SET ?', marmita, callback);
}

// READ
MarmitasDAO.prototype.getMarmitas = function (callback) {
    console.log('MYSQL : MarmitasDAO.getMarmitas');
    this._connection.query('SELECT * FROM menu', callback);
}

// UPDATE
MarmitasDAO.prototype.updateMarmita = function(campos, id, callback){
    console.log('MYSQL : MarmitasDAO.updateMarmita');
    this._connection.query('UPDATE menu SET ? WHERE id_menu = ?', [campos, id], callback);
}

// DELETE
MarmitasDAO.prototype.deleteMarmita = function(id, callback){
    console.log('MYSQL : MarmitasDAO.deleteMarmita');
    this._connection.query('DELETE FROM menu WHERE id_menu = ?', id, callback);
}

// READ SPECIFIC
MarmitasDAO.prototype.getMarmitasSpecific = function (id, callback) {
    console.log('MYSQL : MarmitasDAO.getMarmitas.specific');
    this._connection.query('SELECT nm_name, ds_description, nr_price, ds_ingredients, nr_stock, ds_image_url, nr_discount FROM menu WHERE id_menu = ?', id, callback);
}

// ORDER BY name
MarmitasDAO.prototype.getMarmitasByName = function (callback) {
    console.log('MYSQL : MarmitasDAO.getMarmitasByName');
    this._connection.query('SELECT * FROM menu ORDER BY nm_name', callback);
}

// ORDER BY price
MarmitasDAO.prototype.getMarmitasByPrice = function (callback) {
    console.log('MYSQL : MarmitasDAO.getMarmitasByPrice');
    this._connection.query('SELECT * FROM menu ORDER BY nr_price', callback);
}

module.exports = function(){
    console.log('MODEL : MarmitasDAO');
    return MarmitasDAO;
}