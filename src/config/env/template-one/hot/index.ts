import {
  EnvironmentSpecificProperties,
  EnvMode,
} from '@/config/env/_common/types'

const ENVIRONMENT_SPECIFIC_ENV: EnvironmentSpecificProperties = {
  NEXT_PUBLIC_MODE: EnvMode.hml,
  NEXT_PUBLIC_PROTOCOL_AND_HOST: '',
  NEXT_PUBLIC_CDN_URL: '',
  NEXT_PUBLIC_RECAPTCHA_SITE_KEY: '',
}

export default ENVIRONMENT_SPECIFIC_ENV
