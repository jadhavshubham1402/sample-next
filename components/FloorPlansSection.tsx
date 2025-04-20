import Image from 'next/image';

   interface FloorPlan {
     title: string;
     img: string;
     size: string;
   }

   const floorPlans: FloorPlan[] = [
     { title: '2 BHK', img: '/images/2bhk-plan.jpg', size: '1200 Sq.Ft.' },
     { title: '3 BHK', img: '/images/3bhk-plan.jpg', size: '1800 Sq.Ft.' },
     { title: '4 BHK', img: '/images/4bhk-plan.jpg', size: '2400 Sq.Ft.' },
   ];

   const FloorPlansSection: React.FC = () => {
     return (
       <section id="floor-plans" className="py-16 bg-gray-100">
         <div className="container mx-auto px-4">
           <h2 className="text-4xl font-bold text-center mb-8">Floor Plans</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {floorPlans.map((plan, index) => (
               <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                 <Image src={plan.img} alt={plan.title} width={400} height={300} className="w-full" />
                 <div className="p-4">
                   <h3 className="text-xl font-semibold">{plan.title}</h3>
                   <p className="text-gray-600">{plan.size}</p>
                 </div>
               </div>
             ))}
           </div>
         </div>
       </section>
     );
   };

   export default FloorPlansSection;