var express = require('express')
var router = express.Router()
let model = require('../models')
let scoreLetter =  require('../helper/scoreLetter')
// define the home page route
router.get('/', function (req, res) {
  model.Subject.findAll({
    include:['Teachers']
  })
  .then(dataSubjects => {
    console.log(dataSubjects)
    res.render('subject',
    {
      dataSubjects:dataSubjects
    })
  })
})

router.get('/:id/enrolledstudents',(req, res)=>{
  // console.log(scoreLetter(70));
    model.Subject.findById(req.params.id)
      .then(dataSubjects=>{
        model.Subject_Student.findAll(
          {
            include: ['Student']
          })
          .then(dataId =>{
            res.render('enrolledstudents',
              {
                dataSubjects: dataSubjects,
                dataId: dataId,
                scoreLetter:scoreLetter
              });
          })
    })
})
  router.get('/:id/:id/givescore',(req, res)=>{
    model.Subject_Student.findById(req.params.id)
      .then(dataId=>{
          model.Subject_Student.findAll({include: ['Student']})
            .then(dataStudent=>{
              model.Subject.findAll()
              .then(dataSubject=>{
                res.render('givescore',
                  {
                    dataId:dataId,
                    dataStudent:dataStudent,
                    dataSubject:dataSubject
                  })
              })
            })
      })
  })
  router.post('/:id/givescore',(req, res)=>{
    // res.redirect('/subject')
    model.Subject_Student.update({
      score: req.body.score
    },
      {
        where :
            {
              id: req.params.id
            }
      })
        .then(()=>{
            res.redirect('/subject')
        })
  })

module.exports = router;
