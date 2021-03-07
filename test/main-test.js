const expect = require('chai').expect;
const request = require('supertest');

const app = require('../index.js');
const req = request(app);
const SUCCESS           = 200
const ACCESS_FORBIDDEN  = 403
const NOT_FOUND         = 404
const RTO               = 408
const INTERNAL_ERROR    = 500

const testCase = {
    "success" : {
        "getMain" : "As a User, I want to be able to view list",
        "getList" : "As a User, I want to be able to get custumer trx list",
        "getListPrivot" : "As a User, I want to be able to get custumer trx list using PRIVOT method",
    },
    "false" : {
        "noDataList" : "As a User, I should got error 404 when I send request with invalid uri",
        "noDataListPrivot" : "As a User, I should got error 404 when I send request with invalid uri"
    }
}

describe('User API Endpoint Tests', () => {
    const id_success = '10156282988163547';
    const id_failed = '123456';

    it(`@get ${testCase.success.getMain}`, async() => {
        const response = await request(app)
        .get(`/`);

        expect(response.statusCode).to.equal(SUCCESS);
    }),

    it(`@get ${testCase.success.getList}`, async() => {
        const response = await request(app)
        .get(`/api/user/trx/list`);

        expect(response.statusCode).to.equal(SUCCESS);
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.equal('Success');
        expect(response.body).to.have.property('data');
    }),

    it(`@get ${testCase.false.noDataList}`, async() => {
        const response = await request(app)
        .get(`/api/user/trx/list/1`);

        expect(response.statusCode).to.equal(NOT_FOUND);
    })


    it(`@get ${testCase.success.getListPrivot}`, async() => {
        const response = await request(app)
        .get(`/api/user/trx/group`);

        expect(response.statusCode).to.equal(SUCCESS);
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.equal('Success');
        expect(response.body).to.have.property('data');
    }),

    it(`@get ${testCase.false.noDataListPrivot}`, async() => {
        const response = await request(app)
        .get(`/api/user/trx/group/1`);

        expect(response.statusCode).to.equal(NOT_FOUND);
    })
});
