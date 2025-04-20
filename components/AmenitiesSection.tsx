import Image from 'next/image';

   interface Amenity {
     icon: string;
     title: string;
     desc: string;
   }

   const amenities: Amenity[] = [
     { icon: '/icons/pool.png', title: 'Swimming Pool', desc: 'Relax in our infinity pool with stunning views.' },
     { icon: '/icons/gym.png', title: 'Gymnasium', desc: 'State-of-the-art fitness center for your wellness.' },
     { icon: '/icons/garden.png', title: 'Landscaped Gardens', desc: 'Enjoy serene green spaces for relaxation.' },
   ];

   const AmenitiesSection: React.FC = () => {
     return (
       <section id="amenities" className="py-16">
         <div className="container mx-auto px-4">
           <h2 className="text-4xl font-bold text-center mb-8">Amenities</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {amenities.map((amenity, index) => (
               <div key={index} className="text-center">
                 <Image src={amenity.icon} alt={amenity.title} width={64} height={64} className="mx-auto mb-4" />
                 <h3 className="text-xl font-semibold mb-2">{amenity.title}</h3>
                 <p className="text-gray-600">{amenity.desc}</p>
               </div>
             ))}
           </div>
         </div>
       </section>
     );
   };

   export default AmenitiesSection;