'use strict'

const cfenv = require('cfenv')

module.exports = (serviceName) => {
  try {
    let appEnv = cfenv.getAppEnv()
    let serviceDetails = appEnv.getService(serviceName)

    return serviceDetails ? serviceDetails['credentials']['uri'] : undefined
  } catch (err) {
    console.log(`Bluemix: ${err}`)
  }
}
