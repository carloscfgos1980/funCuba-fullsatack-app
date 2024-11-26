const Review = require('./reviews.mongo');

async function getAllReviews(){
    return await Review.find({}, {
        '_id':0, '__v':0
    }).sort({createdAt:-1})
}


async function addReview(review) {
    console.log('add review')

    await Review.create(review);
}




  module.exports = {
    getAllReviews,
    addReview,
  }