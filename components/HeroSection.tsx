import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  phone: string;
}

interface HeroSectionProps {
  id?: string; // Optional id prop
}

const HeroSection: React.FC<HeroSectionProps> = ({ id }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(
      "Form submitted! (Use Formspree for actual submission in production.)"
    );
    console.log(formData);
  };

  return (
    <section
      id={id}
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-bg-pool.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 h-full flex flex-col justify-between">
        <motion.div
          className="container mx-auto px-4 py-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="bg-white bg-opacity-80 p-4 rounded-lg shadow-md">
            <p className="text-horizon-gray font-semibold">
              BOOKING OPEN LIMITED TIME ONLY
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-horizon-green font-horizon mb-2">
              Godrej Horizon Wadala
            </h1>
            <p className="text-horizon-gray mb-2">
              At Wadala By Godrej Properties
            </p>
            <p className="text-horizon-gray mb-2">
              Land Parcel: 5 Acres | Floors: 44 Storeys | Possession: Dec 2026
            </p>
            <div className="bg-horizon-light-gray p-4 rounded-lg mb-4">
              <p className="text-horizon-gray">
                - Get 1% Monthly Payment Plan Benefit
                <br />
                30:30:30:10 Payment Plan Available
                <br />
                Exclusive Flexi Payment Plan
              </p>
            </div>
            <p className="text-horizon-gray font-semibold mb-2">
              Luxurious 2 & 3 BHK Starts At{" "}
              <span className="text-horizon-green">₹ 2.91 Cr Onwards</span>
            </p>
            <Link href="/#download-brochure">
              <button className="bg-horizon-green text-white font-semibold py-2 px-4 rounded-lg hover:bg-horizon-green-hover transition-colors duration-300 mr-2">
                Download Brochure
              </button>
            </Link>
          </div>
        </motion.div>
        <div className="container mx-auto px-4 flex justify-between items-end pb-8">
          <motion.div
            id="contact"
            className="bg-white bg-opacity-80 p-4 rounded-lg shadow-md w-full md:w-1/3"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-bold text-horizon-green mb-4">
              Get The Best Quote
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full p-2 border rounded-lg"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full p-2 border rounded-lg"
                required
              />
              <div className="flex space-x-2">
                <select
                  name="phoneCode"
                  className="w-1/4 p-2 border rounded-lg"
                >
                  <option>India (+91)</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className="w-3/4 p-2 border rounded-lg"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-horizon-green text-white font-semibold py-2 px-4 rounded-lg hover:bg-horizon-green-hover transition-colors duration-300 w-full"
              >
                Get it Now
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
