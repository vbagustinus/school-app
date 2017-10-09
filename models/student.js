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
  });
  Student.associate = model =>{
    Student.hasMany(model.Subject_Student ,{as: 'StudentId'})
    Student.belongsToMany(model.Subject,
    {
      through: 'Subject_Students',
      foreignKey: 'StudentId'
    })
  }

  return Student;
};
