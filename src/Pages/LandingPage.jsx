import {} from 'react'
import Top from '../LandingPageFolder/Top'
import Secondary from '../components/Secondary'
import Offers from '../LandingPageFolder/Offers'
import Learn from '../LandingPageFolder/Learn'

function LandingPage() {
  return (
    <main>
        <Top />
        <Learn />
        <Offers />
        <Secondary />
    </main>
  )
}

export default LandingPage