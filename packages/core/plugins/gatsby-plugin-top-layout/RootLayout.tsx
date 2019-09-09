import React, { ReactNode, FC, useState, useEffect, createContext } from "react"
import { Helmet } from "react-helmet"
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/styles"

import { light, dark } from "../../src/lib/theme"

interface Props {
  children: ReactNode
}

const supportsDarkMode = (): boolean =>
  window.matchMedia("(prefers-color-scheme: dark)").matches === true

const DarkModeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
  isAuto: true,
  toggleAuto: () => {},
})

const RootLayout: FC<Props> = ({ children }) => {
  const [isDark, updateIsDark] = useState<boolean>(false)
  const [isAuto, updateIsAuto] = useState<boolean>(true)

  const toggleTheme = (): void => {
    updateIsDark(!isDark)
    localStorage.setItem("isDark", JSON.stringify(isDark))
  }

  const toggleAuto = (): void => {
    updateIsAuto(!isAuto)
    localStorage.setItem("isAuto", JSON.stringify(isAuto))
  }

  useEffect(() => {
    const isDarkLocal = JSON.parse(
        localStorage.getItem("isDark") || `${isDark}`
      ),
      isAutoThemeLocal = JSON.parse(
        localStorage.getItem("isAuto") || `${isAuto}`
      )

    // all request will start w/ auto theme
    if (isAutoThemeLocal) updateIsDark(supportsDarkMode())
    // user pref will be used
    else updateIsDark(isDarkLocal)
  }, [isDark, isAuto])

  return (
    <>
      <Helmet titleTemplate="%s | FindWalee" defaultTitle="FindWalee">
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <DarkModeContext.Provider
        value={{ isDark, toggleTheme, isAuto, toggleAuto }}
      >
        <ThemeProvider theme={isDark ? dark : light}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </DarkModeContext.Provider>
    </>
  )
}

export default RootLayout
