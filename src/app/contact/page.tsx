'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Banner from '@/components/Banner';
import { FaTwitter, FaLinkedin, FaYoutube, FaGithub } from 'react-icons/fa';
// import { NextSeo } from 'next-seo';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Replace with your actual form submission logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (

    <>
    {/* <NextSeo
        title="Contact Us – JKUAT Social Robotics Lab"
        description="Reach out to the Social Robotics Lab at JKUAT for research collaborations, media inquiries, student opportunities, and more."
        canonical="https://www.jkuatsocialroboticslab.com/contact"
        openGraph={{
          url: "https://www.jkuatsocialroboticslab.com/contact",
          title: "Contact Us – JKUAT Social Robotics Lab",
          description:
            "Reach out to the Social Robotics Lab at JKUAT for research collaborations, media inquiries, student opportunities, and more.",
          siteName: "JKUAT Social Robotics Lab",
          images: [
            {
              url: "https://www.jkuatsocialroboticslab.com/og-image.png",
              width: 1200,
              height: 630,
              alt: "JKUAT Social Robotics Lab",
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
          site: "@JKUATRobotics",
        }}
      /> */}
    <div className="bg-gray-50">
      <Banner
        title="Get In Touch"
        subtitle="We'd love to hear from you about collaborations, research inquiries, or general questions"
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-raleway font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg"
                >
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg"
                >
                  Something went wrong. Please try again later.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-lintingGreenDark focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-lintingGreenDark focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-lintingGreenDark focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-lintingGreenDark focus:border-transparent"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-6 py-3 rounded-lg font-medium text-white transition-colors ${
                      isSubmitting
                        ? 'bg-custom-lintingGreenDark/70 cursor-not-allowed'
                        : 'bg-custom-lintingGreenDark hover:bg-custom-lintingGreenDark/90'
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-raleway font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-6">
                  Have questions about our research or want to collaborate? Reach out through any of these channels.
                </p>
              </div>

              <div className="space-y-6">
                {/* Address */}
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-custom-lintingGreenDark/10 p-3 rounded-lg">
                    <svg
                      className="w-6 h-6 text-custom-lintingGreenDark"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Our Lab</h3>
                    <p className="text-gray-600">
                      Jkuat Social Robotics Lab<br />
                      School of Computing and Information Technology<br />
                      Social Robotics Lab ( 1st Floor)<br />
                      Nairobi, Kenya
                    </p>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-custom-lintingGreenDark/10 p-3 rounded-lg">
                    <svg
                      className="w-6 h-6 text-custom-lintingGreenDark"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Email Us</h3>
                    <p className="text-gray-600">
                      <a href="mailto:contact@socialroboticslab.org" className="hover:text-custom-lintingGreenDark transition-colors">
                      eunice.njeri@jkuat.ac.ke                      </a>
                      <br />
                      <a href="mailto:research@socialroboticslab.org" className="hover:text-custom-lintingGreenDark transition-colors">
                           jkuatsocialroboticslab@gmail.com                      </a>
                    </p>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-custom-lintingGreenDark/10 p-3 rounded-lg">
                    <svg
                      className="w-6 h-6 text-custom-lintingGreenDark"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Call Us</h3>
                    <p className="text-gray-600">
                      <a href="tel:+254700123456" className="hover:text-custom-lintingGreenDark transition-colors">
                        +254 721 284110                      </a>
                      <br />
                      <a href="tel:+254711987654" className="hover:text-custom-lintingGreenDark transition-colors">
                        +254 720 365551                      </a>
                    </p>
                  </div>
                </motion.div>

                {/* Hours */}
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-custom-lintingGreenDark/10 p-3 rounded-lg">
                    <svg
                      className="w-6 h-6 text-custom-lintingGreenDark"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Lab Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Social Media */}
              <div className="pt-4">
                <h3 className="font-medium text-gray-900 mb-3">Follow Us</h3>
                <div className="flex gap-4">
                  {[
                    { name: 'Twitter', icon: <FaTwitter className="w-5 h-5" />, url: '#' },
                    { name: 'LinkedIn', icon: <FaLinkedin className="w-5 h-5" />, url: '#' },
                    { name: 'YouTube', icon: <FaYoutube className="w-5 h-5" />, url: '#' },
                    { name: 'GitHub', icon: <FaGithub className="w-5 h-5" />, url: '#' },
                  ].map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      className="bg-gray-100 p-3 rounded-full hover:bg-custom-lintingGreenDark/10 transition-colors"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 rounded-xl overflow-hidden shadow-lg"
          >
            <div className="aspect-w-16 aspect-h-9 w-full h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d617.4527528508182!2d37.014340018065354!3d-1.0948223899394685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4621610efa37%3A0x1b885e581e744ca9!2sS.C.C%2C%20Juja!5e0!3m2!1sen!2ske!4v1754470697176!5m2!1sen!2ske"    
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-xl"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  </>

  );
};