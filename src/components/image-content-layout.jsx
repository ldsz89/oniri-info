import * as React from 'react';
import styled from '@emotion/styled'
import Layout from './layout'
import Header from './header'
import Footer from './footer'

const PageTitle = styled.h1`
  grid-area: title;
  color: #D4AB00;
  padding: 0 1rem;
`

const Container = styled.div`
  padding: 1rem;
  color: #D4AB00;
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-areas:
    "image content"
`

const ImageContainer = styled.div`
  grid-area: image;
`

const Image = styled.img`
  width: 100%;
`

const Content = styled.div`
  padding: 0 1rem;
  grid-area: content;
`

const ImageContentColumns = ({ pageTitle, image, imageAlt, children }) => {
  return (
    <Layout>
      <Header />
      <main>
        <PageTitle>{pageTitle}</PageTitle>
        <Container>
          <ImageContainer>
            <Image src={image} alt={imageAlt} />
          </ImageContainer>
          <Content>
            {children}
          </Content>
        </Container>
      </main>
      <Footer />
    </Layout>
  )
}

export default ImageContentColumns
