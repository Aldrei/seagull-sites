const fs = require('fs')

const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
}
const flavorConfigPath = 'src/config/flavors'
const availableFlavors = fs.readdirSync(flavorConfigPath).map(f => {
  console.log('TEST f:', f)
  return f.replace(/\.[^/.]+$/, '')
})

console.log('FLAVOR availableFlavors:', availableFlavors)

const availableEnvironments = ['dev', 'hml', 'hyb', 'prd', 'stg', 'hot']
const dotEnvFilePath = '.env'

async function upsertFile(path) {
  try {
    // try to read file
    await fs.promises.readFile(path)
  } catch (error) {
    // create empty file, because it wasn't found
    await fs.promises.writeFile(path, '')
  }
}

function writeFile(file, string) {
  if (fs.existsSync(file)) {
    fs.writeFileSync(file, string)
    return true
  }
  error(`File "${file}" not found.`)
  process.exit(1)
}

function readFile(file) {
  if (fs.existsSync(file)) {
    const fileData = fs.readFileSync(file, 'utf8', () => {
      error(`An error ocurred while reading ${file}.`)
      process.exit(1)
    })
    return fileData
  }
  error(`File "${file}" not found.`)
  process.exit(1)
}

function error(message) {
  console.log(colors.red, message, colors.reset)
}

function success(message) {
  console.log(colors.green, message, colors.reset)
}

function info(message) {
  console.log(colors.reset, message)
}

const message = { error, success, info }

module.exports = {
  colors,
  flavorConfigPath,
  availableFlavors,
  availableEnvironments,
  dotEnvFilePath,
  upsertFile,
  writeFile,
  readFile,
  message,
}
