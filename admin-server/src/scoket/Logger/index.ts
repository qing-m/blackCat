import * as fs from 'fs'
import  { Console } from 'console'

const output = fs.createWriteStream(__dirname + '/log/stdout.log')
const errorOutput = fs.createWriteStream(__dirname + '/err/stderr.log')

const logger = new Console({ stdout: output, stderr: errorOutput });

export default logger