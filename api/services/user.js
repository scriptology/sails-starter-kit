module.exports.create = function(req, res, data) {
  User.create(data).exec(function (err, createData){
    if (err) { return res.serverError(err); }
    return res.ok(createData);
  });
}
module.exports.getList = function(req, res) {

  var filters = req.param('_filters') ? JSON.parse(req.param('_filters')) : {};

  if(filters.q) {
    filters.email = {contains: filters.q};
    delete filters.q;
  }

  User.find(filters).paginate({page: req.param('_page'), limit: req.param('_limit')}).exec((err, findData)=> {
    if(err) {return res.serverError(err); }
    return res.ok(findData);
  })
}
module.exports.update = function(req, res, oldData, data) {
  User.update(oldData, data).exec(function(err, updated) {
    if (err) {
      return res.serverError(err);
    }
    return res.ok(updated);
  })
}
module.exports.destroy = function(req, res, data) {
  User.destroy(data).exec(function(err, destroyed) {
    if (err) {
      return res.serverError(err);
    }
    return res.ok(destroyed);
  })
}
module.exports.get = function(req, res, data) {
  User.findOne(data).exec(function(err, find) {
    if (err) {
      return res.serverError(err);
    }
    if (!find) {
      return res.notFound('Could not find, sorry.');
    }
    return res.ok(find);

  })
}
