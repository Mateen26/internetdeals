import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import TermsPage from './pages/TermsPage'
import RefundPage from './pages/RefundPage'
import PrivacyPage from './pages/PrivacyPage'
import { SITE_NAME } from './utils/constants'

const META_DESCRIPTION = 'Your destination for seamless connectivity and unmatched entertainment. High-speed internet and premium cable TV services. Bundle and save with Internet Dealz.'

export default function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>{SITE_NAME} – High-Speed Internet & Cable TV</title>
        <meta name="description" content={META_DESCRIPTION} />
        <meta property="og:title" content={`${SITE_NAME} – High-Speed Internet & Cable TV`} />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta property="og:type" content="website" />
      </Helmet>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="refund" element={<RefundPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
