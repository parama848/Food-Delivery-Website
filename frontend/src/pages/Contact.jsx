import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-20">

      {/* PAGE TITLE */}
      <h1 className="text-4xl font-bold text-center text-gray-800">
        Contact <span className="text-green-600">Us</span>
      </h1>
      <p className="text-center text-gray-500 mt-2">
        We'd love to hear from you! Reach out anytime.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT SIDE — CONTACT FORM */}
        <div className="bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Send us a Message
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block text-gray-600 mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border rounded-lg px-4 py-2 outline-green-500"
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border rounded-lg px-4 py-2 outline-green-500"
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border rounded-lg px-4 py-2 outline-green-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT SIDE — CONTACT DETAILS */}
        <div className="bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Contact Information
          </h2>

          <div className="space-y-6">

            {/* Email */}
            <div className="flex items-center gap-4">
              <FiMail className="text-green-600 text-2xl" />
              <div>
                <p className="font-semibold text-gray-700">Email</p>
                <p className="text-gray-500">support@bytetrekforge.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <FiPhone className="text-green-600 text-2xl" />
              <div>
                <p className="font-semibold text-gray-700">Phone</p>
                <p className="text-gray-500">+91 98765 43210</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-4">
              <FiMapPin className="text-green-600 text-3xl" />
              <div>
                <p className="font-semibold text-gray-700">Address</p>
                <p className="text-gray-500">Chennai, Tamil Nadu, India</p>
              </div>
            </div>

          </div>

          {/* MAP */}
          <div className="mt-8">
            <iframe
              title="map"
              className="w-full h-64 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15554.097382750393!2d80.22096639999999!3d13.08268035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265f64d8b9eaf%3A0x45d0bd3fbb499d4f!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000"
              loading="lazy"
            ></iframe>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;
