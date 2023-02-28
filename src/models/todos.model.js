const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Todo = db.define('todos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING(60),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        field: 'is_complete'
    }
});
    
module.exports = Todo;