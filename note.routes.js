module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');

    // Create a new Note
    app.post('/api/posts', notes.create);

    // Retrieve all Notes
    app.get('/api/posts', notes.findAll);

    // Retrieve a single Note with noteId
    app.get('/api/posts/:noteId', notes.findOne);

    // Update a Note with noteId
    app.put('/api/posts/:noteId', notes.update);

    // Delete a Note with noteId
    app.delete('/api/posts/:noteId', notes.delete);
}