const fs = require('fs')
const path = require('path')

function readFile() {
    const file = fs.readFileSync(path.resolve(__dirname, './file-data.txt'), 'utf8')
    return file
}

module.exports = {readFile}
