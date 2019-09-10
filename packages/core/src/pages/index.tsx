import React, { ReactElement } from "react"
import { Typography, Box } from "@material-ui/core"

import Layout from "../components/Layout"
import pic from "../images/landing.gif"

const LandingPage = (): ReactElement => (
  <Layout>
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box pt={[3, 8, 4, 5]}>
        <Typography variant="h5">Hi, I&apos;m Walee! 👋🏽</Typography>
      </Box>
      <Box py={[4, 10, 7, 7]} textAlign="center">
        <Typography variant="h5">
          I like building software and meeting new people.
        </Typography>
      </Box>
      <Box p={[2, 4, 4, 3]}>
        <img style={{ width: "100%", height: "auto" }} src={pic} />
      </Box>
    </Box>
  </Layout>
)

export default LandingPage
