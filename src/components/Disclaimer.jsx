export default function Disclaimer() {
  const points = [
    { strong: 'Third-Party Reseller:', text: 'We offer services based on customer requirements and support for any issue. Not affiliated with TV Network.' },
    { strong: 'Service Availability:', text: 'All service offerings, pricing, and promotions are subject to change without notice based on availability and provider terms.' },
    { strong: 'No Warranty:', text: 'Services and information are provided "as is" without any express or implied warranties.' },
    { strong: 'Accuracy of Information:', text: 'While we strive for accuracy, we make no guarantees regarding the completeness or correctness of content on the Site.' },
    { strong: 'Logo & Trademark Ownership:', text: 'All logos, trademarks, and service marks displayed are the property of their respective owners.' },
    { strong: 'Call Tracking:', text: 'Calls placed to numbers on this Site may be recorded or monitored for quality assurance and training.' },
    { strong: 'Pricing Disclaimer:', text: 'Advertised prices may not include taxes, fees, or equipment charges, which may vary by location.' },
    { strong: 'Third-Party Links:', text: 'Links to external sites are provided for convenience. We are not responsible for their content or privacy practices.' },
    { strong: 'Limitation of Liability:', text: 'We are not liable for any direct, indirect, incidental, or consequential damages arising from the use of this Site or services.' },
    { strong: 'Health & Safety:', text: 'Installation services must comply with local building and safety codes. Users are responsible for ensuring safe installation environments.' },
    { strong: 'Geographic Restrictions:', text: 'Certain services may not be available in all areas. Please confirm availability in your region.' },
    { strong: 'Customer Responsibility:', text: 'Customers must provide accurate information and access to premises for installation and support.' },
  ]

  return (
    <section id="disclaimer" className="bg-primary-800 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold sm:text-4xl">Affiliate Disclaimer</h2>
        <ul className="mt-8 list-none space-y-4">
          {points.map(({ strong, text }) => (
            <li key={strong} className="flex gap-2">
              <span className="font-semibold text-accent-400 shrink-0">{strong}</span>
              <span className="text-primary-100">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
