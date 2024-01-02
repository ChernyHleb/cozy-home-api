const DBconfig = require('../../config/DBconfig.js');
const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize(
    DBconfig.DATABASE,
    DBconfig.USER,
    DBconfig.PASSWORD, {
        host: DBconfig.HOST,
        dialect: DBconfig.DIALECT,
        operatorsAliaces: false
    }
);

sequelize.authenticate()
.then(() => {
    console.log('connected to the database!');
})
.catch(err => {
    console.log("Error: " + err);
});

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.plants = require('./plantsModel.js')(sequelize, DataTypes);

db.sequelize.sync({force: false})
.then(() => {
    console.log('sync is done!')
})

module.exports = db;