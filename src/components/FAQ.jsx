import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const ITEMS = [
  {
    question: 'Who installs and bills me?',
    answer: 'The provider you choose. Internet Dealz is an Independent Referral Partner. We do not install, bill, manage accounts, or provide technical support. All services are provided directly by the selected provider, subject to that provider\'s terms and policies.',
  },
  {
    question: 'Are you the provider or affiliated with a specific brand?',
    answer: 'We are an independent referral partner. We are not the provider and are not affiliated with any specific brand. We connect you with participating providers through authorized partners.',
  },
  {
    question: 'How do you check availability at my address?',
    answer: 'Availability is checked directly by each provider based on your address. We connect you with providers who can confirm availability and offer details for your location.',
  },
  {
    question: 'Are prices and promotions the same as going directly to the provider?',
    answer: 'Pricing and promotions are set by each provider and may vary. We help you compare offers from participating providers; final terms are provided by the provider you choose.',
  },
  {
    question: 'Do you charge a fee for your service?',
    answer: 'We do not charge you a fee for our referral service. You pay the provider directly for the services you select.',
  },
  {
    question: 'What information do you need to get started?',
    answer: 'We need your address to check availability and your contact information so a specialist or the provider can reach you with options and next steps.',
  },
  {
    question: 'How soon can I get installed or activated?',
    answer: 'Installation and activation timelines depend on the provider and your location. When you call or submit a callback request, we can connect you with providers who can give you specific dates.',
  },
  {
    question: 'Can I keep my current phone number or switch providers?',
    answer: 'Number portability depends on the provider and service type. The provider you choose can explain their process for keeping or transferring your number.',
  },
  {
    question: 'Do you serve business locations too?',
    answer: 'Yes. We can connect business locations with participating Internet and phone providers. Call us to discuss business plans and availability.',
  },
  {
    question: 'How do you handle my data and consent?',
    answer: 'We use your information to connect you with providers and to communicate about offers. By submitting a form or calling, you agree to be contacted as described in our Privacy Policy and in any consent language on the form.',
  },
  {
    question: 'How do I reach you or request changes to my data?',
    answer: 'You can call us at (855) 200-3403 or use the contact information in our footer. For data requests, contact us and we will process your request in line with our Privacy Policy.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="bg-surface-50 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-surface-900 sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="mt-12 space-y-3">
          {ITEMS.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={item.question}
                className="rounded-xl border border-surface-200 bg-white shadow-card transition-shadow hover:shadow-card-hover"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 rounded-xl px-5 py-4 text-left font-medium text-surface-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  {item.question}
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 shrink-0 text-primary-600" aria-hidden />
                  ) : (
                    <ChevronDown className="h-5 w-5 shrink-0 text-surface-500" aria-hidden />
                  )}
                </button>
                {isOpen && (
                  <div className="border-t border-surface-100 px-5 pb-4 pt-2">
                    <p className="text-surface-600">{item.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
