var express = require('express')
var router = express.Router()
let model = require('../models')
// define the home page route
router.get('/', function (req, res) {
  model.Student.findAll().then(dataStudents => {
    res.render('student',{dataStudents:dataStudents})
  })
})
router.get('/add',(req, res)=>{
  res.render('addStudent')
})

router.post('/add', (req, res)=>{
  let inputStudent = req.body;
  // console.log(inputStudent)
  model.Student.create({ 
    first_name: inputStudent.first_name,
    last_name: inputStudent.last_name ,
    email: inputStudent.email
  })
  .then(()=>{
    res.redirect('/student');
  })
})

router.get('/edit/:id', (req,res)=>{
  model.Student.findById(req.params.id).then(getStudent => {
    res.render('editStudent',{getStudent:getStudent});
    // res.send(getStudent)
  })
})
router.post('/edit/:id', (req,res)=>{
  let updateStudent = req.body;
  model.Student.update(
    { 
      first_name: updateStudent.first_name,
      last_name: updateStudent.last_name ,
      email: updateStudent.email},
      {
         where: {
           id: req.params.id
          }
    }).then(()=>{
      res.redirect('/student');
  })
})

router.get('/delete/:id', (req, res)=>{
  // console.log(req.params.id)
    model.Student.destroy({
      where: {
        id: req.params.id
      }
    }).then(()=>{
      res.redirect('/student');
  });
})


module.exports=router;