/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react"

import RootLayout from "./RootLayout"

export const wrapRootElement = ({ element }) => {
  return <RootLayout>{element}</RootLayout>
}
