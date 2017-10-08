'use strict';
module.exports = (sequelize, DataTypes) => {
  var Subject_Student = sequelize.define('Subject_Student', {
    SubjectId: DataTypes.INTEGER,
    StudentId: DataTypes.INTEGER,
    score: DataTypes.INTEGER

  });

  Subject_Student.associate = model =>{
    Subject_Student.belongsTo(model.Student);
    Subject_Student.belongsTo(model.Subject);
  }
  return Subject_Student;
};
