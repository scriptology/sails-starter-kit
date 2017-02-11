/**
 * MentorController
 *
 * @description :: Server-side logic for managing mentors
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {

  getAll: function(req, res) {
    mentor.getAll(req, res);
  },

  create: function(req, res) {
    var newData = {
        firstname: req.param('firstname')
    };
    mentor.create(req, res, newData);
  }

};
