const { sendEmail } = require('../services/emails');
const Trip = require('./trips.mongo');

async function getAllTrips(){
    return await Trip.find({}, {
        '_id':0, '__v':0
    }).sort({createdAt:-1})
}

async function addTrip(trip) {
    await Trip.create(trip);
    await sendEmail(trip.clientData.email, trip.reservationId)
}

module.exports = {
    getAllTrips,
    addTrip,
  }