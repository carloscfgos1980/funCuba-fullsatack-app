const express = require('express');

const {
    httpGetAllReviews,
    httpAddReview,
} = require('./reviews.controllers');

const reviewRouter = express.Router();

reviewRouter.get('/', httpGetAllReviews);
reviewRouter.post('/', httpAddReview);

module.exports = reviewRouter;