var express = require('express');
var router = express.Router();

/* POST game */
router.post('/', function(req, res) {

  console.log('*****************');
  console.log(req.body);

  /*let error = false;
  let fieldWithError = '';
  if(!req.body.firstName) {
    error = true;
    fieldWithError = 'First name';
  } else if(!req.body.lastName) {
    error = true;
    fieldWithError = 'Last name';
  } else if(!req.body.email) {
    // TODO: Validate that the email format is valid
    error = true;
    fieldWithError = 'Email';
  } else if(!req.body.subject) {
    error = true;
    fieldWithError = 'Subject';
  }

  if (error) {
    return res.status(400).send({
      success: 'false',
      message: `${fieldWithError} is required`
    });
  }*/


  return res.status(200).send({
    success: 'true',
    message: 'Game created successfully'
  })
});

module.exports = router;
