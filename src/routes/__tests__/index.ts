import request from 'supertest';
import app from '../../app';

describe('GET /', () => {
  it('should return 200', () => {
    return request(app).get(`/`).expect('Content-Type', /json/).expect(200);
  });
});

describe('GET /non-exist-route', () => {
  it('should return 404', () => {
    return request(app)
      .get(`/non-exist-route`)
      .expect('Content-Type', /json/)
      .expect(404);
  });
});
