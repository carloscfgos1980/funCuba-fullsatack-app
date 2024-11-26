const express = require('express');
const reviewsRouter = require('./reviews/reviews.router')
const tripsRouter = require('./trips/trips.routes')

const api = express();

api.use('/reviews', reviewsRouter);
api.use('/trips', tripsRouter);

module.exports = api;