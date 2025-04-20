import Head from 'next/head';
   import Navbar from '../../components/Navbar';
   import OverviewSection from '../../components/OverviewSection';
   import Footer from '../../components/Footer';

   const Overview: React.FC = () => {
     return (
       <div>
         <Head>
           <title>Godrej Horizon - Project Overview</title>
           <meta name="description" content="Learn about the Godrej Horizon project, offering luxury residences in a prime location." />
         </Head>
         <Navbar />
         <OverviewSection />
         <Footer />
       </div>
     );
   };

   export default Overview;