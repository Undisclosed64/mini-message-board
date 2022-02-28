var express = require('express');
var router = express.Router();

const messages = [
  {
    text:'Hi there!',
    user: 'Amanda',
    added: new Date()
  },
  {
    text:'Hello mars!',
    user: 'Charles',
    added: new Date()
  },
]



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages,
   })
});

//post new 
router.post('/new',function(req,res,next){
  messages.push({text:req.body.message,user: req.body.author,added: new Date()});
  res.redirect('/')
  })

module.exports = router;
