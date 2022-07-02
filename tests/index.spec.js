const app = require('../src/index')
const request = require("supertest");
describe("GET /api/listado-rarity", () => {
    test("should respond with a 200 status code", async () => {
        const response = await request(app).get('/api/listado-rarity').send();
        expect(response.statusCode).toBe(200);
    })

})

describe("GET /api/listado-card-set", () => {
    test("should respond with a 200 status code", async () => {
        const response = await request(app).get('/api/listado-card-set').send();
        expect(response.statusCode).toBe(200);
        
    })

})
