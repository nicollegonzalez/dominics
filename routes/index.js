const express = require('express');
const router  = express.Router();
const path    = require('path');
const Recaptcha = require('express-recaptcha').RecaptchaV3;
//import Recaptcha from 'express-recaptcha'
const recaptcha = new Recaptcha('SITE_KEY', 'SECRET_KEY');

const Location = require('../models/location');
const Customer = require('../models/customer');

/* GET home page */
router.get('/', (req, res, next) => {
  // res.render('index');
  Location.find()
  .then(allTheLocations => {
    res.render('index', { locations: allTheLocations});
  })
  .catch(error => {
    console.log('Error while getting the locations from the DB: ', error);
  })
});
/* GET locations page */
router.get('/locations', (req, res, next) => {
  Location.find()
  .then(allTheLocations => {
    // console.log('Retrieved locations from DB:', allTheLocations);
    res.render('location-views/locations', { locations: allTheLocations});
  })
  .catch(error => {
    console.log('Error while getting the locations from the DB: ', error);
  })
});
/* GET location page */
router.get('/locations/:location', (req, res, next) => {
  // theLocation = req.params.location;
  Location.findOne({ locationRoute: req.params.location})
    .then(theLocation => {
      console.log(theLocation.mapURL);
      console.log(theLocation.locationAddress.addressURL);
      console.log("*******",theLocation,"*******");
      console.log("*******",theLocation.lunchMenu,"*******");
      console.log("Menu:",theLocation.menu);
      res.render(`location-views/location`, {location: theLocation});
    })
    .catch(error => {
      console.log('Error while retrieving location details: ', error);
    })
});
/* GET careers page */
router.get('/careers', (req, res, next) => {
  res.render(`careers-views/careers`);
});
/* GET about page */
router.get('/about', (req, res, next) => {
  res.render(`about-views/about`);
});




// Post
router.post('/deals-user-info',(req, res, next) => {
  // let name = req.body.name;
  // let email = req.body.email;
  // if (!req.recaptcha.error) {
    // success code
    const { name, email} = req.body;

  Customer.exists({email: email}, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      if (!result ) {
        const newCustomer = new Customer({ name, email});
        newCustomer.save()
        .then((customer) => {
          console.log('Done saving customer')
          res.redirect('back');
        })
        .catch((error) => {
          console.log(error);
        })   
      }else{
        console.log("You already signed up for email deals");
        res.redirect('back');
      }
    }
  });
  // }else{
    // error code
  // }

});

module.exports = router;
