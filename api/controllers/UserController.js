/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	/**
   * @api {post} /user Create
   * @apiGroup User
   *
   * @apiParam {String} firstname firstname
	 *
   * @apiParam {String} lastname lastname
   *
	 *
	 * @apiSuccess {String} id user id
   *
   * @apiSuccess {String} firstname firstname
   *
   * @apiSuccess {String} lastname lastname
   *
   * @apiSuccess {Date} createdAt created At
   *
   * @apiSuccess {Date} updatedAt update At
   *
   */
  create: function(req, res) {
    var newData = {
			firstname: req.param('firstname'),
      lastname: req.param('lastname')
    };
    user.create(req, res, newData);
  },

	/**
	 * @api {get} /user/:id Show
	 * @apiGroup User
	 *
	 * @apiParam {String} id User id
	 *
	 * @apiSuccess {String} id user id
   *
   * @apiSuccess {String} firstname firstname
   *
   * @apiSuccess {String} lastname lastname
   *
   * @apiSuccess {Date} createdAt created At
   *
   * @apiSuccess {Date} updatedAt update At
	 *
	 */
	get: function(req, res) {
		var data = {
			id: req.param('id')
		}
		user.get(req, res, data);
	},

  /**
  * @api {get} /user/ Get users

  * @apiGroup User
  *
  * @apiSuccess {Array} array list users.
  */
  getList: function(req, res) {
    user.getList(req, res);
  },

  /**
   * @api {put} /user/:id Edit
   * @apiGroup User
	 *
	 * @apiParam {String} id User id
   *
	 * @apiParam {String} firstname firstname
	 *
   * @apiParam {String} lastname lastname
   *
   *
	 * @apiSuccess {String} id user id
   *
   * @apiSuccess {String} firstname firstname
   *
   * @apiSuccess {String} lastname lastname
   *
   * @apiSuccess {Date} createdAt created At
   *
   * @apiSuccess {Date} updatedAt update At
   *
   */
  update: function(req, res) {
		var oldData = {
      id: req.param('id')
    };
    var newData = {
      id: req.param('id'),
      firstname: req.param('firstname'),
      lastname: req.param('lastname')
    };
    user.update(req, res, oldData, newData);
  },

	/**
   * @api {delete} /user/:id Delete
   * @apiGroup User
   *
   * @apiParam {String} id User id
   *
	 * @apiSuccess {String} id user id
   *
   * @apiSuccess {String} firstname firstname
   *
   * @apiSuccess {String} lastname lastname
   *
   * @apiSuccess {Date} createdAt created At
   *
   * @apiSuccess {Date} updatedAt update At
   *
   */
  destroy: function(req, res) {
		var data = {
			id: req.param('id')
		}
    user.destroy(req, res, data);
  }
};
