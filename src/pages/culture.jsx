import * as React from 'react'
import Content from '../components/image-content-layout'
import OniriFull from '../images/Oniri_full.png'

const CulturePage = () => {
  return (
    <Content pageTitle="Culture" image={OniriFull} imageAlt="Oniri Full Body">
      <h2>Pathfinder Corps</h2>
      <p>Each Oniri station is governed by a Pathfinder that runs day to day operations as well as manages exploration and research efforts for their station. Directly beneath the Pathfinders are the Explorers. Explorers captain the ships of the Oniri. Braving the great void and leading expeditions into dangerous ruins, Explorers are the first and last line of defense for the Oniri. Parallel to the Explorers, Trailblazers hold the same rank, but do not captain ships. Trailblazers are a much smaller group within the Oniri that specializes in information. Espionage and scouting both fall under the domain of Trailblazers. The last, but most important, group are the Seekers. They combine findings of both Explorers and Trailblazers into research projects that allow the Oniri to continue to grow and develop.</p>
    </Content>
  )
}

export default CulturePage
