import * as React from 'react'
import Content from '../components/image-content-layout'
import OniriFull from '../images/Oniri_full.png'

const BiologyPage = () => {
  return (
    <Content pageTitle="Biology" image={OniriFull} imageAlt="Oniri Full Body">
      <h2>A Suit For Every Occasion</h2>
      <p>To outsiders, the Oniri are known for their almost robotic looking void suits. These suits dampen vibrations to ensure that vibrations produced in atmospheric environments do not overwhelm the wearer.  If an Oniri were to breathe standard atmo for an extended period of time, they run the risk of becoming sick. Because of their sensitivity to vibrations, Oniri have a unique ability to sense the presence of other beings.</p>
      <h2>Feel The Rhythm</h2>
      <p>The primary method of communication for the Oniri are vibrations that they generate from within. These vibrations travel along whatever surface they are standing on or touching. Due to the lack of atmosphere, communication through sound is not common between Oniri. As a species, they are very intimate as they usually have to be closer together to feel and understand each other’s vibrations. The Oniri’s introduction to the galactic community is still rather fresh for them and as such, they have not learned to read the expressions or moods of other species. As a whole other species seem to lack any emotion at all.</p>
    </Content>
  )
}

export default BiologyPage
