import React, { FC, ReactNode } from "react"
import { Theme, makeStyles, Box, Container } from "@material-ui/core"
import { Helmet } from "react-helmet"

import Footer from "./Footer"
import NavBar from "./NavBar"

interface Props {
  children: ReactNode
  pageTitle?: string
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: "100vh",
  },
}))

const Layout: FC<Props> = ({ children, pageTitle }) => {
  const { root } = useStyles()

  return (
    <Box display="flex" flexDirection="column" className={root}>
      {pageTitle && (
        <Helmet>
          <title>{pageTitle}</title>
        </Helmet>
      )}

      <Box component="header">
        <NavBar />
      </Box>

      <Box flexGrow="1" component="main">
        <Container>{children}</Container>
      </Box>

      <Box component="footer">
        <Footer />
      </Box>
    </Box>
  )
}

export default Layout
