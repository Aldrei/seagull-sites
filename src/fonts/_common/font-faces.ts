import { css } from 'styled-components'

export const FONT_COMMON = {
  CSS: css`
    @font-face {
      font-family: Ubuntu;
      src:
        url('/fonts/Ubuntu/Ubuntu-Bold.ttf') format('truetype'),
        url('/fonts/Ubuntu/Ubuntu-Bold.ttf') format('truetype');
      font-weight: bold;
      font-display: swap;
    }

    @font-face {
      font-family: Ubuntu;
      src:
        url('/fonts/Ubuntu/Ubuntu-Regular.ttf') format('truetype'),
        url('/fonts/Ubuntu/Ubuntu-Regular.ttf') format('truetype');
      font-weight: normal;
      font-display: swap;
    }

    @font-face {
      font-family: Ubuntu;
      src:
        url('/fonts/Ubuntu/Ubuntu-Light.ttf') format('truetype'),
        url('/fonts/Ubuntu/Ubuntu-Light.ttf') format('truetype');
      font-weight: 300;
      font-display: swap;
    }
  `,
  NAME: 'Ubuntu',
}
