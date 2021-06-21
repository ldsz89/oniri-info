import React from 'react'
import { Link } from 'gatsby'
import PathfinderImg from '../images/Pathfinder_Insignia.svg'
import styled from "@emotion/styled"

const Footer = styled.footer`
  grid-area: footer;
  background: black;
  color: white;
`

const Navigation = styled.div`
  display: flex;
  flex-flow:row nowrap;
  justify-content: start;
  align-items: center;
  padding: 1rem;
  border-top: 5px solid #D4AB00;
`

const NavigationImg = styled.img`
  width: 3rem;
  margin-right: 1rem;
`

const Route = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: xx-large;
  padding: 0 1rem;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #D4AB00;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out;
  }
  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }
`

const FooterComponent = () => {
  return (
    <Footer>
      <Navigation>
        <Link to="/">
          <NavigationImg src={PathfinderImg} alt="Oniri Nav Separator" />
        </Link>
        <h2>Created by LeAndre Shannon</h2>
      </Navigation>
    </Footer>
  )
}
 
export default FooterComponent
