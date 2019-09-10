import React, { ReactElement } from "react"
import { Toolbar, Typography, Link, makeStyles } from "@material-ui/core"

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
    <>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h2"
          variant="h4"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          Walee 🤖
        </Typography>
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
    </>
  )
}

export default NavBar
