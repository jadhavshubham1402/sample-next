import Head from 'next/head';
   import Navbar from '../../components/Navbar';
   import GallerySection from '../../components/GallerySection';
   import Footer from '../../components/Footer';

   const Gallery: React.FC = () => {
     return (
       <div>
         <Head>
           <title>Godrej Horizon - Gallery</title>
           <meta name="description" content="Browse the gallery of Godrej Horizon to see our luxury residences." />
         </Head>
         <Navbar />
         <GallerySection />
         <Footer />
       </div>
     );
   };

   export default Gallery;