//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/new-edition/duplicate-answer.html', function (req, res) {

    // Make a variable and give it the value from 'how-many-balls'
    var duplicateAnswer = req.session.data['duplicateAnswer']

    // Check whether the variable matches a condition
    if (duplicateAnswer == "no"){
      // Send user to next page
      res.redirect('/name-of-form')
    } else {
      // Send user to ineligible page
      res.redirect('/duplicate-answer')
    }

  })