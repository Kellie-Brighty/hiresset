import React from 'react'
import ClientSection from '../components/landing/ClientSection'
import LandingCategories from '../components/landing/LandingCategories'
import LandingHeader from '../components/landing/LandingHeader'
import LandingHero from '../components/landing/LandingHero'

const Landing = () => {
  return (
    <div>
        <LandingHeader />
        <LandingHero />
        <LandingCategories />
        <ClientSection />
    </div>
  )
}

export default Landing