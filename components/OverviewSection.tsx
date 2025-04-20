import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const OverviewSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      id="overview"
      className="py-16 bg-gray-100"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 font-horizon">Project Overview</h2>
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/images/project-overview.jpg"
              alt="Project Overview"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 md:pl-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg text-horizon-gray mb-4">
              Godrej Horizon is a premium residential project offering state-of-the-art amenities and luxurious living spaces. Nestled in a prime location, it provides unmatched connectivity and a serene environment.
            </p>
            <ul className="list-disc list-inside text-horizon-gray">
              <li>Spacious 2, 3, and 4 BHK apartments</li>
              <li>World-class amenities</li>
              <li>Proximity to schools, hospitals, and malls</li>
              <li>Lush green landscapes</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default OverviewSection;