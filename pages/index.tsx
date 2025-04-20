import Head from "next/head";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else if (id === "home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative">
      <Head>
        <title>Godrej Horizon Wadala</title>
        <meta
          name="description"
          content="Discover luxury living at Godrej Horizon Wadala by Godrej Properties."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <style>{`
          html { scroll-behavior: smooth; }
          .gradient-text {
            background: linear-gradient(to right, #FF6B6B, #4ECDC4, #45B7D1);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }
          .modal-bg { background-color: #1A3C34; }
          .modal-text { color: #FFFFFF; }
          .modal-button { background-color: #1A3C34; }
          .modal-button:hover { background-color: #2E6F5E; }
        `}</style>
      </Head>
      <Navbar />
      <div className="flex flex-col md:flex-row">
        <main className="flex-1">
          <section
            id="home"
            className="relative h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('/images/hero-bg-pool.jpg')" }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="container mx-auto px-6 py-8">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md w-full md:w-1/2"
                >
                  <p className="text-horizon-gray font-semibold text-lg">
                    BOOKING OPEN: LIMITED TIME ONLY
                  </p>
                  <h1 className="text-4xl md:text-5xl font-bold text-horizon-green font-horizon mb-2">
                    Godrej Horizon Wadala
                  </h1>
                  <p className="text-horizon-gray mb-2">
                    At Wadala By Godrej Properties
                  </p>
                  <p className="text-horizon-gray mb-4">
                    Land Parcel: 5 Acres | Floors: 44 Storeys | Possession: Dec
                    2026
                  </p>
                  <div className="bg-horizon-light-gray p-4 rounded-lg mb-4">
                    <p className="text-horizon-gray text-sm">
                      - Get 1% Monthly Payment Plan Benefit
                      <br />
                      30:30:30:10 Payment Plan Available
                      <br />
                      Exclusive Flexi Payment Plan
                    </p>
                  </div>
                  <p className="text-horizon-gray font-semibold mb-4">
                    Luxurious 2 & 3 BHK Starts At{" "}
                    <span className="text-horizon-green text-xl">
                      ₹ 2.91 Cr Onwards
                    </span>
                  </p>
                  <button
                    onClick={openModal}
                    className="bg-horizon-green text-white font-semibold py-2 px-4 rounded-lg hover:bg-horizon-green-hover transition-colors duration-300"
                  >
                    Download Brochure
                  </button>
                </motion.div>
              </div>
            </div>
          </section>
          <section id="price" className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-horizon-green mb-6 text-center">
                Price
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="p-2 border">Type</th>
                      <th className="p-2 border">Carpet Area</th>
                      <th className="p-2 border">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border">
                      <td className="p-2">2 BHK Premier</td>
                      <td className="p-2">745 sq.ft.</td>
                      <td className="p-2">₹ 2.91 Cr Onwards</td>
                    </tr>
                    <tr className="border">
                      <td className="p-2">2 BHK Luxe</td>
                      <td className="p-2">733 sq.ft.</td>
                      <td className="p-2">₹ 2.94 Cr Onwards</td>
                    </tr>
                    <tr className="border">
                      <td className="p-2">3 BHK Premier</td>
                      <td className="p-2">1053/1059/1070 sq.ft.</td>
                      <td className="p-2">₹ 4.26 Cr Onwards</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 space-y-2">
                <button
                  onClick={openModal}
                  className="bg-horizon-green text-white font-semibold py-2 px-4 rounded-lg hover:bg-horizon-green-hover transition-colors duration-300"
                >
                  Price Breakup
                </button>
                <button
                  onClick={openModal}
                  className="bg-horizon-green text-white font-semibold py-2 px-4 rounded-lg hover:bg-horizon-green-hover transition-colors duration-300"
                >
                  Price Breakup
                </button>
                <button
                  onClick={openModal}
                  className="bg-horizon-green text-white font-semibold py-2 px-4 rounded-lg hover:bg-horizon-green-hover transition-colors duration-300"
                >
                  Price Breakup
                </button>
              </div>
              <div className="mt-4">
                <button
                  onClick={openModal}
                  className="bg-horizon-green text-white font-semibold py-2 px-4 rounded-lg w-full hover:bg-horizon-green-hover transition-colors duration-300"
                >
                  Complete Costing Details
                </button>
              </div>
            </div>
          </section>
          <section id="site-floor-plan" className="py-16 bg-gray-100">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-horizon-green mb-6 text-center">
                Site & Floor Plan of Godrej Horizon Wadala
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-horizon-green mb-2">
                    Master Plan
                  </h3>
                  <img
                    src="/images/master-plan.jpg"
                    alt="Master Plan"
                    className="w-full h-48 object-cover rounded"
                  />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-horizon-green mb-2">
                    2 BHK 745 sq.ft.
                  </h3>
                  <img
                    src="/images/2bhk-floor-plan.jpg"
                    alt="2 BHK Floor Plan"
                    className="w-full h-48 object-cover rounded"
                  />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-horizon-green mb-2">
                    3 BHK 1053 sq.ft.
                  </h3>
                  <img
                    src="/images/3bhk-floor-plan.jpg"
                    alt="3 BHK Floor Plan"
                    className="w-full h-48 object-cover rounded"
                  />
                </div>
              </div>
            </div>
          </section>
          <section id="amenities" className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-horizon-green mb-6 text-center">
                Amenities of Godrej Horizon Wadala
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  <img
                    src="/images/5-storey-clubhouse.jpg"
                    alt="5 Storey Clubhouse"
                    className="w-full h-32 object-cover rounded mb-2"
                  />
                  <p className="text-horizon-green">5 Storey Clubhouse</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  <img
                    src="/images/gymnasium.jpg"
                    alt="Gymnasium"
                    className="w-full h-32 object-cover rounded mb-2"
                  />
                  <p className="text-horizon-green">Gymnasium</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  <img
                    src="/images/infinity-edge-swimming-pool.jpg"
                    alt="Infinity Edge Swimming Pool"
                    className="w-full h-32 object-cover rounded mb-2"
                  />
                  <p className="text-horizon-green">
                    Infinity Edge Swimming Pool
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  <img
                    src="/images/indoor-games-room.jpg"
                    alt="Indoor Games Room"
                    className="w-full h-32 object-cover rounded mb-2"
                  />
                  <p className="text-horizon-green">Indoor Games Room</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  <img
                    src="/images/library.jpg"
                    alt="Library"
                    className="w-full h-32 object-cover rounded mb-2"
                  />
                  <p className="text-horizon-green">Library</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <button
                  onClick={openModal}
                  className="bg-horizon-green text-white font-semibold py-2 px-4 rounded-lg hover:bg-horizon-green-hover transition-colors duration-300"
                >
                  Download Amenities
                </button>
              </div>
            </div>
          </section>
          <section id="gallery" className="py-16 bg-gray-100">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-horizon-green mb-6 text-center">
                Gallery of Godrej Horizon Wadala
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <img
                    src="/images/gallery1.jpg"
                    alt="Gallery 1"
                    className="w-full h-48 object-cover rounded"
                  />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <img
                    src="/images/gallery2.jpg"
                    alt="Gallery 2"
                    className="w-full h-48 object-cover rounded"
                  />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <img
                    src="/images/gallery3.jpg"
                    alt="Gallery 3"
                    className="w-full h-48 object-cover rounded"
                  />
                </div>
              </div>
              <div className="mt-6 text-center">
                <button
                  onClick={openModal}
                  className="bg-horizon-green text-white font-semibold py-2 px-4 rounded-lg hover:bg-horizon-green-hover transition-colors duration-300"
                >
                  Download Gallery
                </button>
              </div>
            </div>
          </section>
          <section id="location" className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-horizon-green mb-6 text-center">
                Location of Godrej Horizon Wadala
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-horizon-green mb-2">
                    Map View
                  </h3>
                  <img
                    src="/images/map-view.jpg"
                    alt="Map View"
                    className="w-full h-48 object-cover rounded"
                  />
                  <p className="text-horizon-gray mt-2">
                    - Reach Wadala Railway Station within 5 mins
                    <br />
                    - 10 mins from Tata Memorial & KEM
                    <br />- VT/College is a 5 mins drive away
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-horizon-green mb-2">
                    Location Map
                  </h3>
                  <img
                    src="/images/location-map.jpg"
                    alt="Location Map"
                    className="w-full h-48 object-cover rounded"
                  />
                  <p className="text-horizon-gray mt-2">
                    - Reach Garden within 5 mins
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section id="virtual-site-visit" className="py-16 bg-gray-100">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-horizon-green mb-6 text-center">
                Virtual Tour Request
              </h2>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <img
                  src="/images/virtual-tour.jpg"
                  alt="Virtual Tour"
                  className="w-full h-64 object-cover rounded mb-4"
                />
                <h3 className="text-xl font-semibold text-horizon-green mb-2">
                  VIRTUAL SITE VISIT
                </h3>
                <p className="text-horizon-gray mb-4">Godrej Horizon Wadala</p>
                <button
                  onClick={openModal}
                  className="bg-horizon-green text-white font-semibold py-2 px-4 rounded-lg hover:bg-horizon-green-hover transition-colors duration-300"
                >
                  Request Virtual Tour
                </button>
              </div>
            </div>
          </section>
        </main>
        <aside className="hidden md:block fixed top-1/4 right-4 w-1/4 max-w-xs bg-white bg-opacity-80 p-6 rounded-lg shadow-md z-40">
          <h2 className="text-2xl font-bold text-horizon-green mb-4">
            Get The Best Quote
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full p-2 border rounded-lg text-sm"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full p-2 border rounded-lg text-sm"
              required
            />
            <div className="flex space-x-2">
              <select className="w-1/4 p-2 border rounded-lg text-sm">
                <option>India (+91)</option>
              </select>
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                className="w-3/4 p-2 border rounded-lg text-sm"
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
        </aside>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="bg-modal-bg p-6 rounded-lg shadow-lg relative w-1/3"
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white hover:text-gray-300"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold modal-text mb-4 text-center">
              Virtual Site Visit
            </h2>
            <div className="text-center mb-4">
              <p className="text-white font-semibold">We Promise</p>
              <div className="flex justify-center space-x-4 mt-2">
                <span className="text-white">📞 Instant Call Back</span>
                <span className="text-white">👁️ Free Site Visit</span>
                <span className="text-white">💰 Unmatched Price</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold gradient-text mb-2 text-center">
              GODREJ HORIZON WADALA
            </h3>
            <p className="text-center mb-4 text-white">
              Register Here And Avail The Best Offers!!
            </p>
            <form className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full p-2 border rounded-lg text-sm text-black"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full p-2 border rounded-lg text-sm text-black"
                required
              />
              <div className="flex space-x-2">
                <select className="w-1/4 p-2 border rounded-lg text-sm text-black">
                  <option>India (+91)</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  className="w-3/4 p-2 border rounded-lg text-sm text-black"
                  required
                />
              </div>
              <button
                type="submit"
                className="modal-button text-white font-semibold py-2 px-4 rounded-lg hover:bg-2E6F5E transition-colors duration-300 w-full"
              >
                Start Tour
              </button>
            </form>
          </motion.div>
        </div>
      )}
      {/* <Footer> */}
      <div className="container mx-auto px-6 py-8 bg-white">
        <p className="text-center text-horizon-green text-xl font-horizon mb-4">
          Welcome To Godrej Horizon Wadala
        </p>
        <p className="text-horizon-gray text-center mb-4">
          About Godrej Properties: Established in 1990, Godrej Properties is the
          real estate arm of the Godrej Group, a leading business conglomerate
          operating across 3 key verticals – business, consumer products and
          real estate...
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text-center">
            <p className="text-horizon-gray">RERA information</p>
            <p className="text-horizon-gray">
              Godrej Horizon RERA: P51800005268
            </p>
            <p className="text-horizon-gray">
              Godrej Horizon Mahalaxmi RERA: P51800005270
            </p>
          </div>
          <div className="text-center">
            <p className="text-horizon-gray">Contact: +9124897039</p>
            <p className="text-horizon-gray">© Copyright</p>
            <p className="text-horizon-gray">
              Terms & Conditions | Privacy Policy | Cookie Policy
            </p>
          </div>
        </div>
        <p className="text-horizon-gray text-center mt-4">
          About HouseBazaar: An initiative of HomeBazaar.com, operates as a
          dedicated platform exclusively designed to promote our esteemed
          partner brands. With a commitment to facilitating effective and
          transparent promotions, our employees brands efficiently reach their
          target...
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
