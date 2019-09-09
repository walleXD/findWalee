/* eslint-disable react/prop-types, @typescript-eslint/explicit-function-return-type*/

import React from "react"
import TopLayout from "./TopLayout"

export const wrapRootElement = ({ element }) => {
  return <TopLayout>{element}</TopLayout>
}
