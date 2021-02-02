const path = require('path')
const mkdirp = require('mkdirp');
const fs = require('fs');
const install = require('../untils/install')

module.exports = async function (name) {
    const projectDir = path.join(process.cwd(), name)
    await mkdirp(projectDir)
    const { template, dir, fileName } = require('../generator/package')(name)
    fs.writeFileSync(path.join(projectDir, dir, fileName), template.trim())
    install({ cwd: projectDir, isYarn: true })
}
