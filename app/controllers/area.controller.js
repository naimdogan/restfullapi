const Area = require('../models/area.model.js');

// Create and Save a new Note
exports.create = (req, res) => {
    // Validate request
    if(!req.body.description) {
        return res.status(400).send({
            message: "Area content can not be empty"
        });
    }

    // Create a Area
    const area = new Area({
        title: req.body.title || "Untitled Area", 
        description: req.body.description,
        country: req.body.country,
        district: req.body.district,
        region: req.body.region,
        hotel: req.body.hotel,
        food: req.body.food,
        activity: req.body.activity,
        visit: req.body.visit,
        flora: req.body.flora,
        fauna: req.body.fauna,
        comments: req.body.comments,
    });


    // Save Note in the database
    area.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Area."
        });
    });
};

// Retrieve and return all area from the database.
exports.findAll = (req, res) => {
    Area.find()
    .then(areas => {
        res.send(areas);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving area."
        });
    });
};

// Find a single area with a areaId
exports.findOne = (req, res) => {
    Area.findById(req.params.areaId)
    .then(area => {
        if(!area) {
            return res.status(404).send({
                message: "area not found with id " + req.params.areaId
            });            
        }
        res.send(area);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "area not found with id " + req.params.areaId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving area with id " + req.params.areaId
        });
    });
};

// Update a area identified by the area in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "area content can not be empty"
        });
    }

    // Find area and update it with the request body
    Area.findByIdAndUpdate(req.params.areaId, {
        title: req.body.title || "Untitled area",
        content: req.body.content
    }, {new: true})
    .then(area => {
        if(!area) {
            return res.status(404).send({
                message: "area not found with id " + req.params.areaId
            });
        }
        res.send(area);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "area not found with id " + req.params.areaId
            });                
        }
        return res.status(500).send({
            message: "Error updating area with id " + req.params.areaId
        });
    });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Area.findByIdAndRemove(req.params.areaId)
    .then(area => {
        if(!area) {
            return res.status(404).send({
                message: "area not found with id " + req.params.areaId
            });
        }
        res.send({message: "area deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "area not found with id " + req.params.areaId
            });                
        }
        return res.status(500).send({
            message: "Could not delete area with id " + req.params.areaId
        });
    });
};