import React, { FC, ReactNode } from "react"
import { Theme, makeStyles, Box } from "@material-ui/core"
import { Helmet } from "react-helmet"

interface Props {
  children: ReactNode
  pageTitle?: string
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
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

      <Box component="header">Hello</Box>

      <Box flexGrow="1" component="main">
        {children}
      </Box>

      <Box component="footer">NOOOOOO</Box>
    </Box>
  )
}

export default Layout
