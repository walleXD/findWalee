import React, { ReactElement } from "react"
import { Typography, Box } from "@material-ui/core"

const Footer = (): ReactElement => (
  <Box display="flex" justifyContent="center" p={2}>
    <Typography variant="body2">all works © Walee Ahmed 2019</Typography>
  </Box>
)

export default Footer
