import * as React from 'react';
import { Global, css } from "@emotion/react"
import styled from "@emotion/styled"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Flag from '../images/flag.svg'
import Footer from '../components/footer'

const Image = styled.img`
  grid-area: title content;
  width: 100%;
  max-height: 100vh;
`

const LinkGrid = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-areas:
    "top-left top-right"
    "bottom-left bottom-right"
`

const IndexLink = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Image src={Flag} />
      <LinkGrid>
        <IndexLink to="/history">History</IndexLink>
        <IndexLink to="/biology">Biology</IndexLink>
        <IndexLink to="/culture">Culture</IndexLink>
        <IndexLink to="/hierarchy">Hierarchy</IndexLink>
      </LinkGrid>
      <Footer />
    </Layout>
  )
}

export default IndexPage
