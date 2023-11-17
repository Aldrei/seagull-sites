export enum EnvMode {
  dev = 'development',
  hml = 'homologation',
  stg = 'staging',
  prd = 'production',
}

export enum BrandId {
  TemplateOne = 'template_one',
}

export type DefaultProperties = {
  NEXT_PUBLIC_API_CLIENT_ID: string
  NEXT_PUBLIC_API_CLIENT_SECRET: string
  NEXT_PUBLIC_API_SCOPE: string
  NEXT_PUBLIC_GRANT_TYPE_PASSWORD: string
  NEXT_PUBLIC_GRANT_TYPE_REFRESH_TOKEN: string
  NEXT_PUBLIC_GRANT_TYPE_CLIENT: string
  NEXT_PUBLIC_GRANT_TYPE_EMPLOYEE: string
  NEXT_PUBLIC_API_TOKEN_TYPE: string
  NEXT_PUBLIC_API_TIMEOUT: number
}

export type FlavorSpecificProperties = {
  NEXT_PUBLIC_NAME: string
  NEXT_PUBLIC_ID: BrandId
  NEXT_PUBLIC_API_SITE_UID: string
  NEXT_PUBLIC_META_OG_IMAGE: string
}

export type EnvironmentSpecificProperties = {
  NEXT_PUBLIC_MODE: EnvMode
  NEXT_PUBLIC_PROTOCOL_AND_HOST: string
  NEXT_PUBLIC_CDN_URL: string
  NEXT_PUBLIC_RECAPTCHA_SITE_KEY: string
}

export type LocalSpecificProperties = {
  NEXT_PUBLIC_API_EXTERNAL_BASE_URL: string
  NEXT_PUBLIC_API_INTERNAL_BASE_URL: string
  NEXT_PUBLIC_IS_DEBUG: boolean
}

export type EnvProperties = DefaultProperties &
  FlavorSpecificProperties &
  EnvironmentSpecificProperties &
  LocalSpecificProperties
