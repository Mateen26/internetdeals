import { Helmet } from 'react-helmet-async'
import { SITE_NAME } from '../utils/constants'

export default function RefundPage() {
  return (
    <>
      <Helmet>
        <title>Refund Policy – {SITE_NAME}</title>
      </Helmet>
      <article className="bg-surface-50 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-surface-900 sm:text-5xl">
            Refund Policy
          </h1>
          <p className="mt-2 text-lg text-primary-600 font-medium">
            {SITE_NAME}
          </p>

          <div className="mt-10 space-y-8 text-surface-700">
            <p className="text-base leading-relaxed">
              {SITE_NAME} operates as an Independent Authorized Retailer for the providers listed on our website. InternetDealz does not collect or hold customer payments. All charges are processed directly by your selected provider.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-12">Refunds &amp; cancellations</h2>
            <p className="text-base leading-relaxed">
              Because {SITE_NAME} is not the merchant of record, {SITE_NAME} cannot issue refunds or credits. Any cancellation, refund, return, or billing adjustment is governed by your provider&apos;s terms and applicable law. If a provider cannot activate service at your address or cancels installation, any eligible refund will be handled by the provider under its policies. {SITE_NAME} will assist you in coordinating with the provider or, if you prefer, switching to an alternative provider available at your address.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-12">Order authorization &amp; consent</h2>
            <p className="text-base leading-relaxed">
              By placing an order through SATT (via phone or web), you:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Authorize {SITE_NAME} to submit your order details to the provider you select;</li>
              <li>Authorize the provider to process payment using the method you supply;</li>
              <li>Acknowledge that {SITE_NAME} cannot issue refunds and that your refund/cancellation rights—if any—are defined by the provider&apos;s policy and applicable law;</li>
              <li>Consent to communications from {SITE_NAME} and the provider about your order, installation, service, and account (including calls, emails, and texts; standard message/data rates may apply). You may opt out of non-essential marketing communications at any time.</li>
            </ol>

            <h2 className="text-2xl font-bold text-surface-900 mt-12">After activation</h2>
            <p className="text-base leading-relaxed">
              Service performance, outages, equipment, billing, and ongoing support are governed by your provider agreement. {SITE_NAME} is not the provider&apos;s customer-service department, but we are happy to help troubleshoot or help you switch providers if issues arise.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-12">Disclosure</h2>
            <p className="text-base leading-relaxed">
              {SITE_NAME} is an Independent Authorized Retailer and is not affiliated with any provider beyond its authorized-retail relationship.
            </p>

            <p className="text-base leading-relaxed mt-10 pt-6 border-t border-surface-200">
              If you have any questions related to our refund policy contact us at:{' '}
              <a href="mailto:internetdealz@support.com" className="text-primary-600 hover:underline font-medium">
                internetdealz@support.com
              </a>
            </p>
          </div>
        </div>
      </article>
    </>
  )
}
