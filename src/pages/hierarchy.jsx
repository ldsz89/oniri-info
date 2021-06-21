import React from 'react'
import styled from '@emotion/styled'
import Layout from '../components/hierarchy-layout'
import Header from '../components/header'
import Footer from '../components/footer'
import PathfinderSvg from '../images/Pathfinder_Insignia.svg'
import SeekerSvg from '../images/Seeker_Insignia.svg'
import TrailblazerSvg from '../images/Trailblazer_Insignia.svg'
import ExplorerSvg from '../images/Explorer_Insignia.svg'

const centerFlex = {
  display: 'flex',
  justifyContent: 'center'
}

const backgroundGrey = {
  background: '#707070'
}

const Content = styled.div`
  grid-area: content;
`

const HierarchyBlade = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  margin: 3rem 0;
  img {
    margin: 0 1rem;
  }
`

const PositionSection = styled.section`
  border-top: 5px solid #D4AB00;
  padding: 0;
  color: #D4AB00;
`

const PositionBlade = styled.div`
  padding: 3rem 2rem;
  display: grid;
  grid-template-columns: 20% 80%;
  &:nth-child(even) {
    background: #707070;
  }
`

const Image = styled.img`
  width: 15rem;
`

const HierarchyPage = () => {
  return (
    <Layout>
      <Content>
        <section>
          <div style={centerFlex}>
            <a href="#pathfinder">
              <Image src={PathfinderSvg} />
            </a>
          </div>
          <HierarchyBlade style={backgroundGrey}>
            <a href="#trailblazer">
              <Image src={TrailblazerSvg} alt=""/>
            </a>
            <a href="#seeker">
              <Image src={SeekerSvg} alt="" />
            </a>
            <a href="#explorer">
              <Image src={ExplorerSvg} alt="" />
            </a>
          </HierarchyBlade>
        </section>
        <PositionSection>
          <PositionBlade id="pathfinder">
            <Image src={PathfinderSvg} />
            <div>
              <h2>Pathfinder</h2>
              <p>Information to be determined</p>
            </div>
          </PositionBlade>
          <PositionBlade id="trailblazer">
            <Image src={TrailblazerSvg} />
            <div>
              <h2>Trailblazer</h2>
              <p>Information to be determined</p>
            </div>
          </PositionBlade>
          <PositionBlade id="explorer">
            <Image src={ExplorerSvg} />
            <div>
              <h2>Explorer</h2>
              <p>Information to be determined</p>
            </div>
          </PositionBlade>
          <PositionBlade id="seeker">
            <Image src={SeekerSvg} />
            <div>
              <h2>Seeker</h2>
              <p>Information to be determined</p>
            </div>
          </PositionBlade>
        </PositionSection>
      </Content>
    </Layout>
  )
}

export default HierarchyPage
