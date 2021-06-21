import React from "react"
import { Global, css } from "@emotion/react"
import styled from "@emotion/styled"

const Wrapper = styled("div")`
  background: black;
  min-height: 100vh;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 150px auto 1fr;
  grid-template-areas:
    "header"
    "title"
    "content"
    "footer"
`

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Global />
      {children}
    </Wrapper>
  )
}

export default Layout
