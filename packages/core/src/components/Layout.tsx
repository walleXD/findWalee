import React, { FC, ReactNode } from "react"
import { Theme, makeStyles } from "@material-ui/core"

interface Props {
  children: ReactNode
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: "100vh",
  },
}))

const Layout: FC<Props> = ({ children }) => {
  const { root } = useStyles({})

  return <div className={root}>{children}</div>
}

export default Layout
