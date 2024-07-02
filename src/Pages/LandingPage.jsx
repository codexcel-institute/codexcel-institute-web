import {} from 'react'
import Top from '../LandingPageFolder/Top'
import LandingBottom from '../LandingPageFolder/LandingBottom'
import Secondary from '../LandingPageFolder/Secondary'
import Offers from '../LandingPageFolder/Offers'
import Learn from '../LandingPageFolder/Learn'

function LandingPage() {
  return (
    <main>
        <Top />
        <Learn />
        <Offers />
        <Secondary />
        <LandingBottom />
    </main>
  )
}

export default LandingPage