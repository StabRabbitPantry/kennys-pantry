const request = require('supertest');
import { jest, describe, expect, test } from '@jest/globals'; 
const server = 'http://localhost:8080';
const fs = require('fs');
const path = require('path');

//works - testing to see that fetch request to our 3rd party api works
describe('Route integration', () => {
    describe('/', () => {
        describe('GET', () => {
        it('responds with 200 status and json', () => {
          return request(server)
            .get('/api/get')
            .expect('Content-Type', /json/)
            .expect(200);
        });
        });
    });
});