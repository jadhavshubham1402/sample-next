import Link from 'next/link';

   interface PricingPlan {
     type: string;
     price: string;
     size: string;
   }

   const pricingPlans: PricingPlan[] = [
     { type: '2 BHK', price: '₹1.2 Cr Onwards', size: '1200 Sq.Ft.' },
     { type: '3 BHK', price: '₹1.8 Cr Onwards', size: '1800 Sq.Ft.' },
     { type: '4 BHK', price: '₹2.4 Cr Onwards', size: '2400 Sq.Ft.' },
   ];

   const PricingSection: React.FC = () => {
     return (
       <section id="pricing" className="py-16">
         <div className="container mx-auto px-4">
           <h2 className="text-4xl font-bold text-center mb-8">Pricing</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {pricingPlans.map((plan, index) => (
               <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                 <h3 className="text-2xl font-semibold mb-2">{plan.type}</h3>
                 <p className="text-3xl font-bold text-blue-600 mb-2">{plan.price}</p>
                 <p className="text-gray-600 mb-4">{plan.size}</p>
                 <Link href="/contact">
                   <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg">
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