var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res) {
  let error = false;
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
  }

  console.log('************************************************************');
  console.log('CONTACT INFORMATION');
  console.log('************************************************************');
  console.log(req.body);
  console.log('************************************************************');

  return res.status(200).send({
    success: 'true',
    message: 'Contact info sent successfully'
  })
});

module.exports = router;
