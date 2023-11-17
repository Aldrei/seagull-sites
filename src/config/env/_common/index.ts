import { DefaultProperties } from './types'

const DEFAULT_ENV: DefaultProperties = {
  NEXT_PUBLIC_API_CLIENT_ID: 'inherits-client',
  NEXT_PUBLIC_API_CLIENT_SECRET: 'inherits-1234',
  NEXT_PUBLIC_API_SCOPE: 'basic',
  NEXT_PUBLIC_GRANT_TYPE_PASSWORD: 'password',
  NEXT_PUBLIC_GRANT_TYPE_REFRESH_TOKEN: 'refresh_token',
  NEXT_PUBLIC_GRANT_TYPE_CLIENT: 'client_credentials',
  NEXT_PUBLIC_GRANT_TYPE_EMPLOYEE: 'store_employee',
  NEXT_PUBLIC_API_TOKEN_TYPE: 'Bearer',
  NEXT_PUBLIC_API_TIMEOUT: 60_000,
}

export default DEFAULT_ENV
