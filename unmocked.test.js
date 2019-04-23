const { configureRollbar } = require('./index')

describe('configureRollbar()', () => {
  it('returns a configured Rollbar object', () => {
    const accessToken = 'token'
    const environment = 'vegas'
    const rollbarObject = configureRollbar({ accessToken, environment })
    expect(rollbarObject.options.accessToken).toEqual(accessToken)
    expect(rollbarObject.options.environment).toEqual(environment)
  })
})
