## Commands
```
git clone git@github.com:RayStroud/jest-requireActual-inconsistency.git
cd jest-requireActual-inconsistency
yarn install
yarn run jest
```
## Result

```
$  yarn run jest
yarn run v1.15.2
warning package.json: No license field
$ /path/to/jest-requireActual-inconsistency/node_modules/.bin/jest
 FAIL  ./mocked.test.js
  ● configureRollbar() › returns a configured Rollbar object

    TypeError: Cannot read property 'accessToken' of undefined

      13 |     const environment = 'test'
      14 |     const rollbarObject = configureRollbar({ accessToken, environment })
    > 15 |     expect(rollbarObject.options.accessToken).toEqual(accessToken)
         |                                  ^
      16 |     expect(rollbarObject.options.environment).toEqual(environment)
      17 |   })
      18 | })

      at Object.accessToken (mocked.test.js:15:34)

 PASS  ./unmocked.test.js

Test Suites: 1 failed, 1 passed, 2 total
Tests:       1 failed, 1 passed, 2 total
Snapshots:   0 total
Time:        1.307s
Ran all test suites.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
