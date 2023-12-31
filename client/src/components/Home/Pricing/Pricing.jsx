import { CheckIcon } from '@heroicons/react/24/outline'

const pricing = {
  tiers: [
    {
      title: 'BASIC PLAN',
      price: 24,
      frequency: '/month',
      description: 'The essentials to provide you with best work and outcomes.',
      features: ['2 hours of exercises', 'Free consultations of Coaches', 'Access to The Community', '48-hour support response time'],
      cta: 'Monthly billing',
      mostPopular: false,
    },
    {
      title: 'PREMIUM PLAN',
      price: 32,
      frequency: '/month',
      description: 'A plan that scales with your rapidly growing gains.',
      features: [
        '5 hours of exercises',
        'Free consultations of Coaches',
        'Access to The Minibar',
        '24-hour support response time',
      ],
      cta: 'Monthly billing',
      mostPopular: true,
    },
    {
      title: 'PRO PLAN',
      price: 48,
      frequency: '/month',
      description: 'Dedicated support and nutrition for your body type.',
      features: [
        '8 hours of exercises',
        'Consultation of Private Coach',
        'Free Fitness Merchandises',
        '1-hour, dedicated support response time',
        'Acces to Private Nutritionist',
        'Custom Macro Tracking',
      ],
      cta: 'Monthly billing',
      mostPopular: false,
    },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="mx-auto max-w-7xl bg-white py-6 px-6 lg:px-8" id="pricing">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none lg:text-6xl">
        Ready to start your journey now with us.
      </h2>
      <p className="mt-6 max-w-2xl text-xl text-gray-500">
        Choose an affordable plan that's packed with the best features for engaging your needs.
      </p>

      {/* Tiers */}
      <div className="mt-12 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
        {pricing.tiers.map((tier) => (
          <div
            key={tier.title}
            className="relative flex flex-col rounded-2xl border border-gray-200 bg-amber hover:bg-lime p-8 shadow-lg"
            // classname="flex h-full flex-col overflow-hidden rounded-lg shadow-lg lg:rounded-none lg:rounded-l-lg"
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray">{tier.title}</h3>
              {tier.mostPopular ? (
                <p className="absolute top-0 -translate-y-1/2 transform rounded-full bg-green py-1.5 px-4 text-sm font-semibold text-white">
                  Most popular
                </p>
              ) : null}
              <p className="mt-4 flex items-baseline text-gray-900">
                <span className="text-5xl font-bold tracking-tight">${tier.price}</span>
                <span className="ml-1 text-xl font-semibold">{tier.frequency}</span>
              </p>
              <p className="mt-6 text-gray-500">{tier.description}</p>

              {/* Feature list */}
              <ul role="list" className="mt-6 space-y-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex">
                    <CheckIcon className="h-6 w-6 flex-shrink-0 text-indigo-500" aria-hidden="true" />
                    <span className="ml-3 text-gray-500">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#"
              className={classNames(
                tier.mostPopular
                  ? 'bg-green text-white hover:bg-lime'
                  : 'bg-orange text-white hover:bg-yellow',
                'mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium'
              )}
            >
              {tier.cta}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}