import Head from 'next/head';
   import Navbar from '../../components/Navbar';
   import FloorPlansSection from '../../components/FloorPlansSection';
   import Footer from '../../components/Footer';

   const FloorPlans: React.FC = () => {
     return (
       <div>
         <Head>
           <title>Godrej Horizon - Floor Plans</title>
           <meta name="description" content="View the floor plans for 2, 3, and 4 BHK apartments at Godrej Horizon." />
         </Head>
         <Navbar />
         <FloorPlansSection />
         <Footer />
       </div>
     );
   };

   export default FloorPlans;