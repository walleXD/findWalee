import React, { ReactElement } from "react"
import { Typography, Box } from "@material-ui/core"
import Layout from "../components/Layout"

const LandingPage = (): ReactElement => (
  <Layout>
    <Box>
      <Typography>Hello world!</Typography>
    </Box>
  </Layout>
)

export default LandingPage
