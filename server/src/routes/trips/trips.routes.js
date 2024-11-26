const express = require('express');

const {
    httpGetAllTrips,
    httpAddTrip,
} = require('./trips.controllers');

const reviewRouter = express.Router();

reviewRouter.get('/', httpGetAllTrips);
reviewRouter.post('/', httpAddTrip);

module.exports = reviewRouter;