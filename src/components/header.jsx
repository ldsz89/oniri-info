import React from 'react'
import { Link } from 'gatsby'
import PathfinderImg from '../images/Pathfinder_Insignia.svg'
import styled from "@emotion/styled"

const Header = styled.header`
  grid-area: header;
  background: black;
`

const Navigation = styled.nav`
  display: flex;
  flex-flow:row nowrap;
  justify-content: center;
  padding: 1rem 0;
  border-bottom: 5px solid #D4AB00;
`

const NavigationImg = styled.img`
  width: 3rem;
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

const HeaderComponent = () => {
  return (
    <Header>
      <Navigation>
        <Route to="/history">History</Route>
        <Route to="/biology">Biology</Route>
        <NavigationImg src={PathfinderImg} alt="Oniri Nav Separator" />
        <Route to="/culture">Culture</Route>
        <Route to="/hierarchy">Hierarchy</Route>
      </Navigation>
    </Header>
  )
}
 
export default HeaderComponent
