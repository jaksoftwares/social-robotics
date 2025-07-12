"use client";

import Banner from "@/components/Banner";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <Banner title="Contact Us" />

      <section className="min-h-screen bg-white py-12 px-4 flex flex-col items-center">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 bg-customCyanBlue rounded-2xl shadow-xl p-8 text-white">

          {/* Lab Contact Information */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg mb-6">
              Reach out to the JKUAT Social Robotics Lab for inquiries, collaborations, or visits.
            </p>

            <div className="space-y-4">
              <div>
                <p className="font-semibold">📧 Email</p>
                <a href="mailto:info@jkuat-robotics.com" className="underline hover:text-gray-200">
                  info@jkuat-robotics.com
                </a>
              </div>
              <div>
                <p className="font-semibold">📞 Phone</p>
                <a href="tel:+254700000000" className="underline hover:text-gray-200">
                  +254 700 000 000
                </a>
              </div>
              <div>
                <p className="font-semibold">📍 Address</p>
                <p>
                  JKUAT Social Robotics Lab<br />
                  JKUAT Main Campus,<br />
                  Nairobi, Kenya
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4 text-center md:text-left">Send Us a Message</h2>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="px-4 py-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="px-4 py-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                required
                className="px-4 py-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Location Map */}
        <div className="max-w-6xl w-full mt-12 bg-gray-100 rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-customCyanBlue text-center mb-2">Our Location</h2>
          <p className="text-center text-gray-700 mb-6">Visit us at JKUAT Main Campus, Nairobi, Kenya</p>
          <div className="w-full h-64 rounded-xl overflow-hidden shadow">
            <iframe
              title="JKUAT Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.857234123456!2d36.85292631531644!3d-1.0912345999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1b1234567890%3A0xabcdef1234567890!2sJKUAT!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
