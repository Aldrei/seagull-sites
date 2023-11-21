import * as fs from 'fs'
import { writeFile, message, flavorConfigPath } from './utils'

const flavoredFiles = [
  'src/styles/colors/index.ts',
  'src/images/index.ts',
  'src/styles/button-variants/index.ts',
  'src/fonts/index.ts',
  'src/layouts/index.ts',
  'src/components/index.ts',
  'src/strings/index.ts',
  'src/constants/index.ts',
  'src/icons/index.ts',
]

function readFlavorConfig(flavor) {
  const path = `${flavorConfigPath}/${flavor}.json`
  if (fs.existsSync(path)) {
    return JSON.parse(fs.readFileSync(path, 'utf8'))
  }
  message.error(`Flavor config file "${flavor}.json" not found`)
  process.exit(1)
}

function writeToFlavorFiles(export_string) {
  flavoredFiles.forEach((flavorFile) => {
    writeFile(flavorFile, export_string)
  })
}

export async function setFlavor(flavorName) {
  message.info(`Setting flavor to ${flavorName}`)
  const { export_string } = readFlavorConfig(flavorName)
  writeToFlavorFiles(export_string)
  message.success(`Flavor successfully set to ${flavorName}`)
}
