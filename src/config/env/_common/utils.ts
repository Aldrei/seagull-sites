import { LocalSpecificProperties } from './types'

type BuildApiBaseUrlParams = {
  baseUrl: string
  siteUid: string
}

type BuildLocalSpecificProperties = {
  internalBaseUrl?: string
  externalBaseUrl: string
  siteUid: string
  isDebug?: boolean
}

export const buildApiBaseUrl = ({ baseUrl, siteUid }: BuildApiBaseUrlParams) =>
  `${baseUrl}/imobmobile/v2/${siteUid}`

export const buildLocalSpecificProperties = ({
  internalBaseUrl,
  externalBaseUrl,
  siteUid,
  isDebug,
}: BuildLocalSpecificProperties): LocalSpecificProperties => ({
  NEXT_PUBLIC_API_INTERNAL_BASE_URL: buildApiBaseUrl({
    baseUrl: internalBaseUrl || externalBaseUrl,
    siteUid,
  }),
  NEXT_PUBLIC_API_EXTERNAL_BASE_URL: buildApiBaseUrl({
    baseUrl: externalBaseUrl,
    siteUid,
  }),
  NEXT_PUBLIC_IS_DEBUG: !!isDebug,
})

export const LOCAL_BASE_URL = 'http://inherits.local:3000'
