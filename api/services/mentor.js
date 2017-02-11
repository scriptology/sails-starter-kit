module.exports.create = function(req, res, data) {
  Mentor.create(data).exec(function (err, createData){
    if (err) { return res.serverError(err); }
    return res.ok(createData);
  });
}
module.exports.getAll = function(req, res) {
  Mentor.find().exec((err, findData)=> {
    if(err) {return res.serverError(err); }
    return res.ok(findData);
  })
}
