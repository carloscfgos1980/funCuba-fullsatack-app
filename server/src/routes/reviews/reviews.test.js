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

    describe('Test GET / reviews', ()=>{
    test('It should respond with 200 success', async ()=>{
        const response = await request(app)
        .get('/v1/reviews')
        .expect('Content-Type', /json/)        
        .expect(200);
        });
    });

    describe('Test POST / review', ()=>{
        const completeReview = {
            feedId: "luisa",
            name: "Carlos",
            type: "airB",
            rate: 3,
            comment: "super super super super ",
            country: "Mexico"
        }
        const incompleteReview = {
            type: "airB",
            rate: 3,
            comment: "super super super super super super super super super super super super super super super super super super super super super super super super super super super super super super ",
            name: "Maikol",
            country: "Mexico"
        };
        const ReviewWrongRrate = {
            feedId: "luisa",
            type: "airB",
            rate: "3",
            comment: "super super super super super super super super super super super super super super super super super super super super super super super super super super super super super super ",
            name: "Maikol",
            country: "Mexico"
        };

        const reviewWithNonExistanceCountry = {
            feedId: "luisa",
            type: "airB",
            rate: 5,
            comment: "super super super super super super super super super super super super super super super super super super super super super super super super super super super super super super ",
            name: "Maikol",
            country: "Guantanamo"
        };
        test('It should respond with 201 success', async ()=>{
            const response = await request(app)
                .post('/v1/reviews')
                .send(completeReview)
                .expect('Content-Type', /json/)
                .expect(201);
        });

        test('It should catch invalid rate', async ()=>{
            const response = await request(app)
                .post('/v1/reviews')
                .send(ReviewWrongRrate)
                .expect('Content-Type', /json/)
                .expect(400);
            expect(response.body).toStrictEqual({
                error: 'rate must be a number!',
            });
        });
        test('It should catch missing property',async ()=>{
            const response = await request(app)
                .post('/v1/reviews')
                .send(incompleteReview)
                .expect('Content-Type', /json/)
                .expect(400);
            expect(response.body).toStrictEqual({
                error: 'Missing required review property',
            });
        });
        test('It should catch country does not exist', async ()=>{
            const response = await request(app)
                .post('/v1/reviews')
                .send(reviewWithNonExistanceCountry)
                .expect('Content-Type', /json/)
                .expect(400);
            expect(response.body).toStrictEqual({
                error: 'This country does not exist!',
            });
        });
    });
})


