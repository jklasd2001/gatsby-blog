import { ThemeProvider } from 'src/context'

import type { GatsbySSR } from 'gatsby'

export const onRenderBody: GatsbySSR['onRenderBody'] = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `ko` })
}

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>
}
