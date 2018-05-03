module.exports = (app) => {
    const areas = require('../controllers/area.controller.js');

    // Create a new Note
    app.post('/areas', areas.create);

    // Retrieve all Notes
    app.get('/areas', areas.findAll);

    // Retrieve a single Note with noteId
    app.get('/areas/:areaId', areas.findOne);

    // Update a Note with noteId
    app.put('/areas/:areaId', areas.update);

    // Delete a Note with noteId
    app.delete('/areas/:areaId', areas.delete);
}