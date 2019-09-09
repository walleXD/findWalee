import React, { ReactNode, FC, useState, useEffect, createContext } from "react"
import { Helmet } from "react-helmet"
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/styles"
import { light, dark } from "../../src/lib/theme"

interface Props {
  children: ReactNode
}

const DEFAULT_THEME = "dark"
const DarkModeContext = createContext({ isDark: false, toggleTheme: () => {} })

const TopLayout: FC<Props> = ({ children }) => {
  const [isDark, updateIsDark] = useState(
    JSON.parse(localStorage.getItem("isDark") || "true")
  )

  const toggleTheme = (): void => {
    updateIsDark(!isDark)
    localStorage.setItem("isDark", JSON.stringify(isDark))
  }

  useEffect(() => {
    if (!localStorage.getItem("isDark")) {
      localStorage.setItem(
        "isDark",
        DEFAULT_THEME === "dark" ? "true" : "false"
      )
    }
  })

  return (
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
      <DarkModeContext.Provider value={{ isDark, toggleTheme }}>
        <ThemeProvider theme={isDark ? dark : light}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {children}
        </ThemeProvider>
      </DarkModeContext.Provider>
    </>
  )
}

export default TopLayout
