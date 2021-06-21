import * as React from 'react'
import styled from "@emotion/styled"
import Content from '../components/image-content-layout'
import OniriHeadshot from '../images/Oniri.jpg'


const HistoryPage = () => {
  return (
    <Content pageTitle="History" image={OniriHeadshot} imageAlt="Oniri Headshot">
      <h2>On Thin Air</h2>
      <p>Coming from a homeworld with a thin layer of atmosphere, the Oniri have spread throughout the galaxy by building and maintaining space stations. Uniquely, these stations operate on very little air as the Oniri have little use for it. Due to their lack of reliance on oxygen, the Oniri have been able to speed the development of new stations and ships, allowing them to read farther into the void. This has given them a reputation as explorers as the've been able to explore deeper into systems that other species aren't able to.</p>
    </Content>
  )
}

export default HistoryPage
