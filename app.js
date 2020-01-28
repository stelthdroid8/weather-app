require('dotenv').config();
const express = require('express');
const app = express();

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if (!address) {
  console.log('please provide an address');
} else {
  geocode(address, (error, geocodeData) => {
    if (error) {
      return console.log(error);
    }

    forecast(
      geocodeData.latitude,
      geocodeData.longitude,
      (error, forecastData) => {
        if (error) {
          return console.log(error);
        }

        console.log(geocodeData.location);
        console.log(forecastData);
      }
    );
  });
}
