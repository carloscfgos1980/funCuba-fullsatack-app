const {
    getAllReviews,
    addReview,
} = require('../../models/reviews.model');

const country_list = require('../../services/countries')

async function httpGetAllReviews(req, res) {
    return res.status(200).json(await getAllReviews());
};

async function httpAddReview(req, res) {
    const review = req.body
    const {name, country, feedId, type, rate, comment} = review;

    if(!name || !country || !feedId || !type || !rate || !comment){
        return res.status(400).json({
            error: "Missing required review property"
        })
    };
    if(typeof(rate)!=='number'){  
        return res.status(400).json({
            error: "rate must be a number!"
        })
    };
    const countryExist = country_list.includes(country)
    if(!countryExist){
        return res.status(400).json({
            error: "This country does not exist!"
        })
    }

    await addReview(review);
    return res.status(201).json(review);
};


module.exports = {
    httpGetAllReviews,
    httpAddReview
}