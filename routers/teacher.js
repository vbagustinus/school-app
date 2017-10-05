var express = require('express')
var router = express.Router()
let model = require('../models')
// define the home page route
router.get('/', function (req, res) {
  model.Teacher.findAll().then(dataTeachers => {
    res.render('teacher',{dataTeachers:dataTeachers})
  })
})

module.exports=router;