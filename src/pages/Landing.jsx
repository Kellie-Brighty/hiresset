import React from 'react'
import LandingCategories from '../components/landing/LandingCategories'
import LandingHeader from '../components/landing/LandingHeader'
import LandingHero from '../components/landing/LandingHero'

const Landing = () => {
  return (
    <div>
        <LandingHeader />
        <LandingHero />
        <LandingCategories />
    </div>
  )
}

export default Landing