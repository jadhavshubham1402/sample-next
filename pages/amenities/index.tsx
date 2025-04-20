import Head from 'next/head';
   import Navbar from '../../components/Navbar';
   import AmenitiesSection from '../../components/AmenitiesSection';
   import Footer from '../../components/Footer';

   const Amenities: React.FC = () => {
     return (
       <div>
         <Head>
           <title>Godrej Horizon - Amenities</title>
           <meta name="description" content="Explore the world-class amenities at Godrej Horizon, designed for luxury living." />
         </Head>
         <Navbar />
         <AmenitiesSection />
         <Footer />
       </div>
     );
   };

   export default Amenities;