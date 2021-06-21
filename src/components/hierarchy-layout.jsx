import * as React from 'react';
import { Global, css } from "@emotion/react"
import styled from '@emotion/styled'
import Header from './header'
import Footer from './footer'

const PageTitle = styled.h1`
  grid-area: title;
  color: #D4AB00;
  padding: 0 1rem;
`

const Wrapper = styled("div")`
  background: black;
  min-height: 100vh;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 150px auto auto auto;
  grid-template-areas:
    "header"
    "title"
    "content"
    "footer"
`

const HierarchyLayout = ({ children }) => {
  return (
    <Wrapper>
      <Global />
      <Header />
      <main>
        <PageTitle>Hierarchy</PageTitle>
        {children}
      </main>
      <Footer />
    </Wrapper>
  )
}

export default HierarchyLayout
