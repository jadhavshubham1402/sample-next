import { useState, FormEvent, ChangeEvent } from 'react';

   interface FormData {
     name: string;
     email: string;
     phone: string;
     message: string;
   }

   const ContactSection: React.FC = () => {
     const [formData, setFormData] = useState<FormData>({ name: '', email: '', phone: '', message: '' });

     const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
       setFormData({ ...formData, [e.target.name]: e.target.value });
     };

     const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
       e.preventDefault();
       alert('Form submitted! (This is a static site, so no backend processing.)');
     };

     return (
       <section id="contact" className="py-16">
         <div className="container mx-auto px-4">
           <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
           <div className="flex flex-col md:flex-row">
             <div className="md:w-1/2 mb-8 md:mb-0">
               <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
               <p className="text-gray-600 mb-4">Have questions? Reach out to us for more details.</p>
               <p className="text-gray-600">Phone: +91 123 456 7890</p>
               <p className="text-gray-600">Email: info@godrejhorizon.com</p>
               <p className="text-gray-600">Address: 123 Luxury Lane, City, Country</p>
             </div>
             <div className="md:w-1/2">
               <form onSubmit={handleSubmit} className="space-y-4">
                 <input
                   type="text"
                   name="name"
                   value={formData.name}
                   onChange={handleChange}
                   placeholder="Your Name"
                   className="w-full p-3 border rounded-lg"
                   required
                 />
                 <input
                   type="email"
                   name="email"
                   value={formData.email}
                   onChange={handleChange}
                   placeholder="Your Email"
                   className="w-full p-3 border rounded-lg"
                   required
                 />
                 <input
                   type="tel"
                   name="phone"
                   value={formData.phone}
                   onChange={handleChange}
                   placeholder="Your Phone"
                   className="w-full p-3 border rounded-lg"
                   required
                 />
                 <textarea
                   name="message"
                   value={formData.message}
                   onChange={handleChange}
                   placeholder="Your Message"
                   className="w-full p-3 border rounded-lg h-32"
                   required
                 ></textarea>
                 <button
                   type="submit"
                   className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg"
                 >
                   Submit
                 </button>
               </form>
             </div>
           </div>
         </div>
       </section>
     );
   };

   export default ContactSection;