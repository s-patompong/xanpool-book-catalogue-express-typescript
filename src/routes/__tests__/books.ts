import request from 'supertest';
import app from '../../app';

describe('GET /books', () => {
  it('should return 200', () => {
    return request(app)
      .get(`/books`)
      .expect('Content-Type', /json/)
      .expect(200);
  });
});

describe('GET /books/1', () => {
  it('should return 200', () => {
    return request(app)
      .get(`/books/1`)
      .expect('Content-Type', /json/)
      .expect(200);
  });
});

describe('GET /books/9999', () => {
  it('should return 404', () => {
    return request(app)
      .get(`/books/9999`)
      .expect('Content-Type', /json/)
      .expect(404);
  });
});
