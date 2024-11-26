const request = require('supertest');
const app = require('../../app');
const {
    mongoConnect,
    mongoDisconnect,
} = require('../../services/mongo');


describe('Reviews API', ()=>{
    beforeAll(async ()=>{
        await mongoConnect();
    });
    afterAll(async ()=>{
        await mongoDisconnect();
    });

    describe('Test GET / trips', ()=>{
    test('It should respond with 200 success', async ()=>{
        const response = await request(app)
        .get('/v1/trips')
        .expect('Content-Type', /json/)        
        .expect(200);
        });
    });

    describe('Test POST / review', ()=>{
        const completeTrip = {
            clientData: {
                name: 'Flaki', lastName: 'Linda', country: 'Cuba', email: 'flaki@gmail.com'
            },
            reservationId: 1731593278066,
            totalAmount: 1380,
            tripDateEnd: "2024-12-08",
            tripDateStart: "2024-11-18",
            tripDays: 20,
            routes: [{
                days: 6,
                id: "1-Havana",
                routeDateEnd: "2024-11-24",
                routeDateStart: "2024-11-18",
                routeEnd: "Havana",
                routeStart: "Airport",
                taxiPrice : 50,
                totalAir: 420,
                totalChill: 100,
                totalRoute: 520,
                airBnBs: [
                    {
                        hab: 2,
                        id: "analsa",
                        name: "Analsa",
                        price: 35,
                        subTotal: 420
                    }
                ],
                totalOuts: [
                    {
                        dateChill: "2024-11-20",
                        id: "Havana_tour",
                        name: "Havana City tour",
                        subTotal: 100
                    }
                ]
            }]
        }
        const tripInvalidEmail = {
            clientData: {
                name: 'Flaki', lastName: 'Linda', country: 'Cuba', email: 'flaki.gmail.com'
            },
            reservationId: 1731593278066,
            totalAmount: 1380,
            tripDateEnd: "2024-12-08",
            tripDateStart: "2024-11-18",
            tripDays: 20,
            routes: [{
                days: 6,
                id: "1-Havana",
                routeDateEnd: "2024-11-24",
                routeDateStart: "2024-11-18",
                routeEnd: "Havana",
                routeStart: "Airport",
                taxiPrice : 50,
                totalAir: 420,
                totalChill: 100,
                totalRoute: 520,
                airBnBs: [
                    {
                        hab: 2,
                        id: "analsa",
                        name: "Analsa",
                        price: 35,
                        subTotal: 420
                    }
                ],
                totalOuts: [
                    {
                        dateChill: "2024-11-20",
                        id: "Havana_tour",
                        name: "Havana City tour",
                        subTotal: 100
                    }
                ]
            }]
        }
        const clientDataNonCountryTrip = {
            clientData: {
                name: 'Flaki', lastName: 'Linda', country: 'Zwolle', email: 'flaki@gmail.com'
            },
            reservationId: 1731593278066,
            totalAmount: 1380,
            tripDateEnd: "2024-12-08",
            tripDateStart: "2024-11-18",
            tripDays: 20,
            routes: [{
                days: 6,
                id: "1-Havana",
                routeDateEnd: "2024-11-24",
                routeDateStart: "2024-11-18",
                routeEnd: "Havana",
                routeStart: "Airport",
                taxiPrice : 50,
                totalAir: 420,
                totalChill: 100,
                totalRoute: 520,
                airBnBs: [
                    {
                        hab: 2,
                        id: "analsa",
                        name: "Analsa",
                        price: 35,
                        subTotal: 420
                    }
                ],
                totalOuts: [
                    {
                        dateChill: "2024-11-20",
                        id: "Havana_tour",
                        name: "Havana City tour",
                        subTotal: 100
                    }
                ]
            }]
        }
        test('It should respond with 201 success', async ()=>{
            const response = await request(app)
                .post('/v1/trips')
                .send(completeTrip)
                .expect('Content-Type', /json/)
                .expect(201);
        });
        test('It should catch country does not exist', async ()=>{
            const response = await request(app)
                .post('/v1/trips')
                .send(clientDataNonCountryTrip)
                .expect('Content-Type', /json/)
                .expect(400);
            expect(response.body).toStrictEqual({
                error: 'This country does not exist!',
            });
        });
    });
})


