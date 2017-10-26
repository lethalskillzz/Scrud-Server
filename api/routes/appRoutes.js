'use strict';
module.exports = function(app) {
    var record = require('../controllers/appController');

    //app Routes
    app.route('/students')
        .get(record.list_all_students)
        .post(record.create_a_student)
        .get(record.count_all_students);

    app.route('/students/:regno')
        .get(record.read_a_student)
        .put(record.update_a_student)
        .delete(record.delete_a_student);
};