import React, { ReactElement } from "react"
import { Typography, Box, Paper } from "@material-ui/core"

const Footer = (): ReactElement => (
  <Box display="flex" justifyContent="center" component={Paper} p={2}>
    <Box flexDirection="row">
      <Typography variant="body2">
        all work © Walee Ahmed 2019 • all rights reserved
      </Typography>
    </Box>
  </Box>
)

export default Footer
