import { Helmet } from 'react-helmet-async'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import FeatureBadges from './components/FeatureBadges'
import ServicesGrid from './components/ServicesGrid'
import FeatureBlocks from './components/FeatureBlocks'
import DealCards from './components/DealCards'
import HomePhoneSection from './components/HomePhoneSection'
import BundleSection from './components/BundleSection'
import FAQ from './components/FAQ'
import CallbackForm from './components/CallbackForm'
import Disclaimer from './components/Disclaimer'
import { SITE_NAME } from './utils/constants'

const META_DESCRIPTION = 'Your destination for seamless connectivity and unmatched entertainment. High-speed internet and premium cable TV services. Bundle and save with Internet Cable TV Promo.'

export default function App() {
  return (
    <>
      <Helmet>
        <title>{SITE_NAME} – High-Speed Internet & Cable TV</title>
        <meta name="description" content={META_DESCRIPTION} />
        <meta property="og:title" content={`${SITE_NAME} – High-Speed Internet & Cable TV`} />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main>
          <Hero />
          <FeatureBadges />
          <ServicesGrid />
          <DealCards />
          <HomePhoneSection />
          <BundleSection />
          <FAQ />
          <CallbackForm />
          <Disclaimer />
          <Footer />
        </main>
      </div>
    </>
  )
}
