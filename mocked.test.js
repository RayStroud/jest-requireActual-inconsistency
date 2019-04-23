const Rollbar = require('rollbar')
const { configureRollbar } = require('./index')

jest.mock('rollbar')

describe('configureRollbar()', () => {
  beforeEach(() => {
    Rollbar.mockImplementation(() => jest.requireActual('rollbar'))
  })

  it('returns a configured Rollbar object', () => {
    const accessToken = 'token'
    const environment = 'test'
    const rollbarObject = configureRollbar({ accessToken, environment })
    expect(rollbarObject.options.accessToken).toEqual(accessToken)
    expect(rollbarObject.options.environment).toEqual(environment)
  })
})
