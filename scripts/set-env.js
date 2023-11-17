import { writeFile, message, dotEnvFilePath, upsertFile } from './utils'
import {
  buildLocalSpecificProperties,
  LOCAL_BASE_URL,
} from '../src/config/env/_common/utils'
import DEFAULT_ENV from '../src/config/env/_common'

async function importFlavoredFiles(flavor, env) {
  const { default: FLAVOR_SPECIFIC_ENV } = await import(
    `../src/config/env/${flavor}/_common`
  )
  const { default: ENVIRONMENT_SPECIFIC_ENV } = await import(
    `../src/config/env/${flavor}/${env}`
  )

  return { FLAVOR_SPECIFIC_ENV, ENVIRONMENT_SPECIFIC_ENV }
}

async function getLocalSpecificEnv(flavor, env, local) {
  const { FLAVOR_SPECIFIC_ENV, ENVIRONMENT_SPECIFIC_ENV } =
    await importFlavoredFiles(flavor, env)

  if (local) {
    return buildLocalSpecificProperties({
      externalBaseUrl: LOCAL_BASE_URL,
      siteUid: FLAVOR_SPECIFIC_ENV.NEXT_PUBLIC_API_SITE_UID,
      isDebug: true,
    })
  }

  return buildLocalSpecificProperties({
    externalBaseUrl: ENVIRONMENT_SPECIFIC_ENV.NEXT_PUBLIC_PROTOCOL_AND_HOST,
    siteUid: FLAVOR_SPECIFIC_ENV.NEXT_PUBLIC_API_SITE_UID,
  })
}

export async function setEnvironment(flavor, env, local) {
  message.info(
    `Updating environment to ${flavor} ${env} ${local ? 'local' : ''}`,
  )
  message.info(`Generating environment object`)
  const { FLAVOR_SPECIFIC_ENV, ENVIRONMENT_SPECIFIC_ENV } =
    await importFlavoredFiles(flavor, env)
  const LOCAL_SPECIFIC_ENV = await getLocalSpecificEnv(flavor, env, local)

  const ENV = {
    ...DEFAULT_ENV,
    ...FLAVOR_SPECIFIC_ENV,
    ...ENVIRONMENT_SPECIFIC_ENV,
    ...LOCAL_SPECIFIC_ENV,
  }

  const dotEnvContent = Object.keys(ENV).reduce(
    (result, key) =>
      result ? `${result}\n${key}=${ENV[key]}` : `${key}=${ENV[key]}`,
    '',
  )

  message.info(`Creating .env file`)
  await upsertFile(dotEnvFilePath)
  writeFile(dotEnvFilePath, dotEnvContent)
  message.success('.env file successfully updated')
}
