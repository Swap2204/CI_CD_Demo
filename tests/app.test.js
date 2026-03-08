const app = require('../app');
const request = require('supertest');

describe('App Tests', () => {
  describe('Health Check', () => {
    it('should return healthy status', async () => {
      const res = await request(app).get('/health');
      expect(res.statusCode).toBe(200);
      expect(res.body.status).toBe('healthy');
      expect(res.body).toHaveProperty('timestamp');
    });
  });

  describe('GET /items', () => {
    it('should return all items', async () => {
      const res = await request(app).get('/items');
      expect(res.statusCode).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
      expect(res.body.length).toBeGreaterThan(0);
    });
  });

  describe('GET /items/:id', () => {
    it('should return a single item', async () => {
      const res = await request(app).get('/items/1');
      expect(res.statusCode).toBe(200);
      expect(res.body.id).toBe(1);
      expect(res.body.name).toBe('Item 1');
    });

    it('should return 404 for non-existent item', async () => {
      const res = await request(app).get('/items/999');
      expect(res.statusCode).toBe(404);
      expect(res.body.error).toBe('Item not found');
    });
  });

  describe('POST /items', () => {
    it('should create a new item', async () => {
      const newItem = {
        name: 'Test Item',
        description: 'This is a test item'
      };
      const res = await request(app).post('/items').send(newItem);
      expect(res.statusCode).toBe(201);
      expect(res.body.id).toBeGreaterThan(0);
      expect(res.body.name).toBe('Test Item');
    });

    it('should return 400 when name is missing', async () => {
      const res = await request(app).post('/items').send({ description: 'No name' });
      expect(res.statusCode).toBe(400);
      expect(res.body.error).toBe('Name is required');
    });
  });

  describe('PUT /items/:id', () => {
    it('should update an existing item', async () => {
      const updatedItem = {
        name: 'Updated Item',
        description: 'This item was updated'
      };
      const res = await request(app).put('/items/1').send(updatedItem);
      expect(res.statusCode).toBe(200);
      expect(res.body.name).toBe('Updated Item');
    });

    it('should return 404 for non-existent item', async () => {
      const res = await request(app).put('/items/999').send({ name: 'Test' });
      expect(res.statusCode).toBe(404);
      expect(res.body.error).toBe('Item not found');
    });

    it('should return 400 when name is missing', async () => {
      const res = await request(app).put('/items/1').send({ description: 'No name' });
      expect(res.statusCode).toBe(400);
      expect(res.body.error).toBe('Name is required');
    });
  });

  describe('DELETE /items/:id', () => {
    it('should delete an existing item', async () => {
      // Update nextId to 4 for consistency
      const app1 = require('../app');
      const res = await request(app1).delete('/items/3');
      expect(res.statusCode).toBe(204);
    });

    it('should return 404 for non-existent item', async () => {
      const res = await request(app).delete('/items/999');
      expect(res.statusCode).toBe(404);
      expect(res.body.error).toBe('Item not found');
    });
  });
});