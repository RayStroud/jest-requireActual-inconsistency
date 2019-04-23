const Rollbar = require('rollbar')

exports.configureRollbar = (config) => {
  return new Rollbar({ ...config })
}
