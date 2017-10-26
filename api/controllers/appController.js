'use strict';

var mongoose = require('mongoose'),
    Resource = mongoose.model('StudentResource');

exports.list_all_students = function(req, res) {
    Resource.find({}, function(err, resource) {
        if (err)
            res.send(err);
        res.json(resource);
    });
};


exports.create_a_student = function(req, res) {
    var new_resource = new Resource(req.query);
    new_resource.save(function(err, resource) {
        if (err)
            res.send(err);
        res.json(resource);
    });
};


exports.count_all_students = function(req, res) {
    Resource.count({}, function(err, resource) {
        if (err)
            res.send(err);
        res.send(resource);
    });
};


exports.read_a_student = function(req, res) {
    Resource.findOne({
        regno: req.params.regno
    }, function(err, resource) {
        if (err)
            res.send(err);
        res.json(resource);
    });
};


exports.update_a_student = function(req, res) {
    Resource.findOneAndUpdate({
        regno: req.params.regno
    }, req.body, { new: true }, function(err, resource) {
        if (err)
            res.send(err);
        res.json(resource);
    });
};


exports.delete_a_student = function(req, res) {
    Resource.remove({
        regno: req.params.regno
    }, function(err, resource) {
        if (err)
            res.send(err);
        res.json({ message: 'Student deleted successfully' });
    });
};