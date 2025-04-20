import Image from 'next/image';

   const GallerySection: React.FC = () => {
     return (
       <section id="gallery" className="py-16 bg-gray-100">
         <div className="container mx-auto px-4">
           <h2 className="text-4xl font-bold text-center mb-8">Gallery</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             {Array.from({ length: 6 }).map((_, index) => (
               <Image
                 key={index}
                 src={`/images/gallery-${index + 1}.jpg`}
                 alt={`Gallery Image ${index + 1}`}
                 width={400}
                 height={300}
                 className="rounded-lg shadow-md w-full"
               />
             ))}
           </div>
         </div>
       </section>
     );
   };

   export default GallerySection;