import Link from 'next/link';

interface PricingPlan {
  type: string;
  price: string;
  size: string;
}

const pricingPlans: PricingPlan[] = [
  { type: '2 BHK', price: '₹3.31 Cr*', size: '777 - 1050 Sq.Ft.' },
  { type: '3 BHK', price: '₹4.52 Cr*', size: '1001 - 2000 Sq.Ft.' },
  { type: '4 BHK', price: '₹6.20 Cr*', size: '1207 Sq.Ft.' },
];

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="bg-white py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-8 text-center min-h-[300px] flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold uppercase text-gray-800 mb-4">{plan.type}</h3>
                <p className="text-3xl font-bold text-blue-600 mb-4">{plan.price}</p>
                <p className="text-base text-gray-600 mb-6">{plan.size}</p>
              </div>
              <Link href="/contact">
                <button className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
                  Get Quote
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;