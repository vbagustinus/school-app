'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: {
    type : DataTypes.STRING,
    allowNull : false,
    },
    last_name: {
      type : DataTypes.STRING,
      allowNull : false,
    },
    email: {
      type : DataTypes.STRING,
      isUnique : true,
      allowNull: false,
      validate:{
        isEmail : true
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Student;
};