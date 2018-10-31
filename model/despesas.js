module.exports = function() {
    var db = require('./../libs/connect_db')();
    var Schema = require('mongoose').Schema;

    var despesa = Schema({
        mes: String,
        valor: String        
    });

    return db.model('despesas', despesa);
}