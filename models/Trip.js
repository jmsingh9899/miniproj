const { Model, Datatypes, DataTypes, DECIMAL } = require('sequelize');
const sequelize = require('../config/connection');


class Trip extends Model {};

Trip.init(
    {
        trip_budget: {
            type: DataTypes.DECIMAL
        },
        traveller_amount: {
            type: DataTypes.INTEGER
        }
    },
    {
        sequelize
    }
)


module.exports = Trip;