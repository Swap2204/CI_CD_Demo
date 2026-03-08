const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// In-memory data store
let items = [
  { id: 1, name: 'Item 1', description: 'First item' },
  { id: 2, name: 'Item 2', description: 'Second item' }
];

let nextId = 3;

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// GET all items
app.get('/items', (req, res) => {
  res.json(items);
});

// GET single item
app.get('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) {
    return res.status(404).json({ error: 'Item not found' });
  }
  res.json(item);
});

// POST new item
app.post('/items', (req, res) => {
  const { name, description } = req.body;
  
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }
  
  const newItem = {
    id: nextId++,
    name,
    description: description || ''
  };
  
  items.push(newItem);
  res.status(201).json(newItem);
});

// PUT update item
app.put('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const itemIndex = items.findIndex(i => i.id === id);
  
  if (itemIndex === -1) {
    return res.status(404).json({ error: 'Item not found' });
  }
  
  const { name, description } = req.body;
  
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }
  
  items[itemIndex] = {
    id,
    name,
    description: description || ''
  };
  
  res.json(items[itemIndex]);
});

// DELETE item
app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex(i => i.id === id);
  
  if (index === -1) {
    return res.status(404).json({ error: 'Item not found' });
  }
  
  items.splice(index, 1);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;