import { setEnvironment } from './set-env'
import { setFlavor } from './set-flavor'
import { availableEnvironments, availableFlavors } from './utils'

const argsParams = require('yargs').argv
console.log('ARGS ', argsParams)

const { flavor, env, local } = require('yargs')
  .command(
    'Prepare starting...',
    'Prepare start options',
    yargs => {
      // return yargs
      //   .positional('port', {
      //     describe: 'port to bind on',
      //     default: 5000
      //   })
      console.info(`Option env: ${argv.env}`)
    },
    argv => {
      // if (argv.verbose) console.info(`start server on :${argv.port}`)
      // serve(argv.port)
      console.info(`Option env: ${argv.env}`)
    },
  )
  .option('flavor', {
    alias: 'f',
    describe: 'Flavor name',
    choices: availableFlavors,
  })
  .option('env', {
    alias: 'e',
    describe: 'Environment',
    choices: availableEnvironments,
  })
  .option('local', {
    boolean: true,
    default: true,
  })
  .demandOption(['env'], 'Please provide a valid environment.')
  .demandOption(['flavor'], 'Please provide a valid flavor name.')
  .help()
  .version(false).argv

console.log('-f ', flavor)
console.log('-e ', env)

setFlavor(flavor)
setEnvironment(flavor, env, local)
