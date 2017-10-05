var express = require('express')
var router = express.Router()
let model = require('../models')
// define the home page route
router.get('/', function (req, res) {
  model.Subject.findAll().then(dataSubjects => {
    res.render('subject',{dataSubjects:dataSubjects})
  })
})

module.exports=router;