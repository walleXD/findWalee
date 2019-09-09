import React, { ReactNode, FC } from "react"
import { Helmet } from "react-helmet"
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/styles"
import { light, dark } from "../../src/lib/theme"

interface Props {
  children: ReactNode
  isDark?: boolean
}

const TopLayout: FC<Props> = ({ children, isDark = false }) => (
  <>
    <Helmet>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    {/** ToDo: Figure out how to handle dark/ light theming properly */}
    <ThemeProvider theme={isDark? dark : light}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  </>
)

export default TopLayout
