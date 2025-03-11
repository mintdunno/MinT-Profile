import React, { useState } from "react";
import { useLocalization } from "../../context/LocalizationContext";

const Contact: React.FC = () => {
  const { t } = useLocalization();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Animated background with shifting colors - NOW VERY OBVIOUS */}
      <div className="contact-animated-bg"></div>

      {/* Very obvious orbs */}
      <div className="contact-color-orb-1"></div>
      <div className="contact-color-orb-2"></div>

      {/* Additional highly visible animated elements */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-prometheus-accent/15 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-prometheus-light-blue/15 to-transparent"></div>

      <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-prometheus-accent/15 rounded-full animate-float-slow blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-prometheus-light-blue/15 rounded-full animate-float-slow2 blur-3xl"></div>

      {/* Rest of the contact section */}
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          {t("contact.title")}
        </h2>
        <p className="text-lg text-gray-300 mb-12">
          {t("contact.description")}
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300"
            >
              {t("contact.name")}
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 bg-gray-800 text-white rounded-md shadow-sm focus:ring-prometheus-accent focus:border-prometheus-accent"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              {t("contact.email")}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 bg-gray-800 text-white rounded-md shadow-sm focus:ring-prometheus-accent focus:border-prometheus-accent"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300"
            >
              {t("contact.message")}
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="mt-1 block w-full px-4 py-3 bg-gray-800 text-white rounded-md shadow-sm focus:ring-prometheus-accent focus:border-prometheus-accent"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-prometheus-accent text-white font-semibold rounded-md shadow-sm hover:bg-prometheus-accent-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-prometheus-accent"
            >
              {t("contact.submit")}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
