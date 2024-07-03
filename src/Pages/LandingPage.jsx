import {} from 'react'
import Top from '../LandingPageFolder/Top'
import Secondary from '../components/Secondary'
import Offers from '../LandingPageFolder/Offers'
import Learn from '../LandingPageFolder/Learn'
import Reviews from '../LandingPageFolder/Reviews'

function LandingPage() {
  return (
    <main>
        <Top />
        <Learn />
        <Offers />
        <Reviews />
        <Secondary />
    </main>
  )
}

export default LandingPage