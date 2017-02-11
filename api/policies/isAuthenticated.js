/**
 * isAuthenticated
 *
 */
var jwt = require('express-jwt');

var authCheck = jwt({
  secret: new Buffer('hykRWjHbT1mOkpIYvGAOenHbNyFiXyvf51j0lB7yvjqp5j-D6B37yqOPMjDECHdt', 'base64'),
  audience: '83MVB1W0UHuOcLpkz0rZ5bxWckHxwD6V'
});

module.exports = authCheck;
