'use strict';
module.exports = (sequelize, DataTypes) => {
  var Subject = sequelize.define('Subject', {
    subject_name: DataTypes.STRING
  })
  Subject.associate = (model) =>{
    Subject.hasMany(model.Teacher);
    Subject.hasMany(model.Subject_Student,{as: 'SubjectId'});
    Subject.belongsToMany(model.Student, 
      {
        through: 'Subject_Students',
        foreignKey: 'SubjectId'
      });
  };
  return Subject;
};