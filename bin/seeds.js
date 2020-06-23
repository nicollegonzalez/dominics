require('dotenv').config();

const mongoose = require('mongoose');
const Location = require('../models/location');

const dbName = 'dominics';
// mongoose.connect(`mongodb://localhost/${dbName}`,{ useUnifiedTopology: true, useNewUrlParser: true })
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true , useUnifiedTopology: true})
.then(x => {
  console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
})
.catch(err => {
  console.error('Error connecting to mongo', err)
});


const locations = [
  {
    locationRoute: "dominicsI",
    locationTagAlt: "Dominic's 1 - Boca Raton",
    locationName:   "Dominic’s I Pizza and Pasta",
    locationCity: "Boca Raton",
    locationNumber: "1",
    locationImage: '/images/dominics-one/exterior.jpg',
    mapURL: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14298.693055152396!2d-80.1726854!3d26.369428!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6e8712880c79d03d!2sDominic&#39;s%20I%20Pizza%20and%20Pasta!5e0!3m2!1sen!2sus!4v1583482760710!5m2!1sen!2sus',
    lunchMenu: '/images/dominics-one/lunch-menu.pdf',
    dinnerMenu: '/images/dominics-one/dinner-menu.pdf',
    childrenMenu: '/images/dominics-one/children-menu.pdf',
    locationAddress: {
      description: 'West Boca Plaza – Next to the Turnpike',
      addressURL: 'https://goo.gl/maps/TsiBJ26DMMoG2Uj66',
      street: '8177 West Glades Road',
      city: 'Boca Raton',
      state: 'Florida',
      zip: '33434',
    },
    locationHours:{
      sunday: '3-9:45PM',
      secondLabel: 'Monday - Thursday',
      mondayThursday: '11AM-9:45PM',
      thirdLabel: 'Friday - Saturday',
      fridaySaturday: '1AM-10:45PM',
    },
    locationContact:{
      locationPhoneNumber: '(561) 487-3186',
      locationEmail: 'dominics1@dominicspizzapasta.com',
    },
    deals: false,
  },
  {
    locationRoute: "dominicsII",
    locationTagAlt: "Dominic's 2 - Boca Raton",
    locationName:   "Dominic’s II Pizza and Pasta ",
    locationCity: "Boca Raton",
    locationNumber: "2",
    locationImage: '/images/dominics-two/exterior.jpg',
    mapURL: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d456815.09507495374!2d-80.34523985522455!3d26.50588010316867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x869a15931ac96c31!2sDominic&#39;s%20II!5e0!3m2!1sen!2sus!4v1583471372804!5m2!1sen!2sus',
    lunchMenu: '/images/dominics-two/lunch-menu.pdf',
    dinnerMenu: '/images/dominics-two/dinner-menu.pdf',
    childrenMenu: '/images/dominics-two/children-menu.pdf',
    locationAddress: {
      description: 'Westwinds of Boca – Next to Home Depot',
      addressURL: 'https://goo.gl/maps/vdq8R1JBkwNW5FHR8',
      street: '9834 West Glades Road',
      city: 'Boca Raton',
      state: 'Florida',
      zip: '33434',
    },
    locationHours:{
      sunday: '12-10PM',
      secondLabel: 'Monday - Thursday',
      mondayThursday: '11AM-10PM',
      thirdLabel: 'Friday - Saturday',
      fridaySaturday: '1AM-11PM',
    },
    locationContact:{
      locationPhoneNumber: '(561) 487-6325',
      locationEmail: 'dominics2@dominicspizzapasta.com',
    },
    deals: false,
  },
  {
    locationRoute: "dominicsIII",
    locationTagAlt: "Dominic's 3 - Lake Worth",
    locationName:   "Dominic’s III Pizza and Pasta",
    locationCity: "Lake Worth",
    locationNumber: "3",
    locationImage: '/images/dominics-three/exterior.jpg',
    mapURL: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d456815.09507495374!2d-80.34523985522455!3d26.50588010316867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x13c77ef87f755278!2sDominics%20III!5e0!3m2!1sen!2sus!4v1583471449953!5m2!1sen!2sus',
    lunchMenu: '/images/dominics-three/lunch-menu.pdf',
    dinnerMenu: '/images/dominics-three/dinner-menu.pdf',
    childrenMenu: '/images/dominics-three/children-menu.pdf',
    locationAddress: {
      description: 'Charleston Square - Next to Winn Dixie',
      addressURL: 'https://goo.gl/maps/2LqXPSy16fx1jN238',
      street: '6566 Hypoluxo Road',
      city: 'Lake Worth',
      state: 'Florida',
      zip: '33467',
    },
    locationHours:{
      sunday: '12-10PM',
      secondLabel: 'Monday - Thursday',
      mondayThursday: '11AM-10PM',
      thirdLabel: 'Friday - Saturday',
      fridaySaturday: '11AM-11PM',
    },
    locationContact:{
      locationPhoneNumber: '(561) 487-3186',
      locationEmail: 'dominics3@dominicspizzapasta.com',
    },
    deals: true,
  },
  {
    locationRoute: "dominicsIV",
    locationTagAlt: "Dominic's 4 - Boynton Beach",
    locationName:   "Dominic's IV",
    locationCity: "Boynton Beach",
    locationNumber: "4",
    locationImage: '/images/dominics-four/exterior.jpg',
    mapURL: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d456815.09507495374!2d-80.34523985522455!3d26.50588010316867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe586fb7a3623f50c!2sDominic&#39;s%20Restaurant!5e0!3m2!1sen!2sus!4v1583471500872!5m2!1sen!2sus',
    lunchMenu: '/images/dominics-four/lunch-menu.pdf',
    dinnerMenu: '/images/dominics-four/dinner-menu.pdf',
    childrenMenu: '/images/dominics-four/children-menu.pdf',
    locationAddress: {
      description: 'Renaissance Commons',
      addressURL: 'https://goo.gl/maps/xenEMwiqNQkvLV9p6',
      street: '1790 North Congress Avenue',
      city: 'Boynton Beach',
      state: 'Florida',
      zip: '33426',
    },
    locationHours:{
      sunday: '12-10PM',
      secondLabel: 'Monday - Wednesday',
      mondayWednesDay: '11AM-10PM',
      thirdLabel: 'Thursday - Saturday',
      thursdaySaturday: '11AM-11PM',
    },
    locationContact:{
      locationPhoneNumber: '(561) 487-3186',
      locationEmail: 'dominics4@dominicspizzapasta.com',
    },
    deals: false,
  },
];

Location.create(locations, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${locations.length} locations`)
  mongoose.connection.close();
});