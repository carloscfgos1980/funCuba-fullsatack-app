const {
    getAllTrips,
    addTrip,
} = require('../../models/trips.model');
const country_list = require('../../services/countries');

async function httpGetAllTrips(req, res) {
return res.status(200).json(await getAllTrips());
};

async function httpAddTrip(req, res) {
    const trip = req.body
    console.log(trip);
    const {totalAmount, reservationId, tripDateStart, tripDateEnd} = trip;
    const {name, lastName, country, email} = trip.clientData;

    if(!name || !lastName || !country || !email || !totalAmount || !reservationId){
        res.status(400);
        throw new Error('All fields are mandatory!')
    }
    if(isNaN(totalAmount)) {
        res.status(400);
        throw new Error('Invalid amount, must be a number!')

    }
    if(isNaN(reservationId)) {
        res.status(400);
        throw new Error('Invalid reservation id, must be a number!')

    }
    const countryExist = country_list.includes(country)
    if(!countryExist){
        return res.status(400).json({
            error: "This country does not exist!"
        })
    }
    if(!email.includes('@')){
        res.status(400);
        throw new Error('Invalid email!')        
    }
    const startTripDate = new Date(tripDateStart);
    if(isNaN(startTripDate)){
        return res.status(400).json({
            error: 'Invalid start trip date'
        })
    }
    const endTripDate = new Date(tripDateEnd);
    if(isNaN(endTripDate)){
        return res.status(400).json({
            error: 'Invalid end trip date'
        })
    }
    await addTrip(trip);
    return res.status(201).json(trip)

};


module.exports = {
    httpGetAllTrips,
    httpAddTrip
}