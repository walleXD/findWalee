import React, { ReactElement } from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Link,
  makeStyles,
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "center",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}))

const sections = [
  {
    name: "About",
    link: "/",
  },
  {
    name: "Now",
    link: "/now",
  },
  {
    name: "Reading List",
    link: "/read-list",
  },
  {
    name: "Contact",
    link: "/contact",
  },
]

const NavBar = (): ReactElement => {
  const classes = useStyles()

  return (
    <AppBar>
      <Toolbar>
        <Box flex="1">
          <Typography
            component="h2"
            variant="h4"
            color="inherit"
            align="center"
            noWrap
          >
            Walee 🤖
          </Typography>
        </Box>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections.map(section => (
          <Link
            color="inherit"
            noWrap
            key={section.name}
            variant="body2"
            href="#"
            className={classes.toolbarLink}
          >
            {section.name}
          </Link>
        ))}
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
