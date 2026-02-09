import Hero from '../components/Hero'
import FeatureBadges from '../components/FeatureBadges'
import ServicesGrid from '../components/ServicesGrid'
import FeatureBlocks from '../components/FeatureBlocks'
import DealCards from '../components/DealCards'
import HomePhoneSection from '../components/HomePhoneSection'
import BundleSection from '../components/BundleSection'
import FAQ from '../components/FAQ'
import CallbackForm from '../components/CallbackForm'
import Disclaimer from '../components/Disclaimer'

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureBadges />
      <ServicesGrid />
      <FeatureBlocks />
      <DealCards />
      <HomePhoneSection />
      <BundleSection />
      <FAQ />
      <CallbackForm />
      <Disclaimer />
    </>
  )
}
