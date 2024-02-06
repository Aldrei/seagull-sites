import { render } from '@testing-library/react'

import { ThemeProvider } from '@/hooks/useTheme'

import { WhatsAppCommon } from './index'

describe('Common component', () => {
  it('Render WhatsAppCommon', () => {
    const el = render(
      <ThemeProvider>
        <WhatsAppCommon />
      </ThemeProvider>,
    )
    expect(el.baseElement).toMatchSnapshot()
  })
})
