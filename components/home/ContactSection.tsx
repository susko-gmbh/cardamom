'use client';

import Image from 'next/image';
import React, { useState } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isRecaptchaChecked, setIsRecaptchaChecked] = useState<boolean>(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(`${name} field updated:`, value);
  };

  const handleRecaptchaChange = (): void => {
    setIsRecaptchaChecked(!isRecaptchaChecked);
    console.log('reCAPTCHA checked:', !isRecaptchaChecked);
  };

  const handleSubmit = (): void => {
    console.log('Form submission attempted with data:', formData);
    console.log('reCAPTCHA status:', isRecaptchaChecked);

    if (!formData.name || !formData.email || !formData.message) {
      console.log('Form validation failed: Missing required fields');
      alert('Bitte füllen Sie alle Felder aus.');
      return;
    }

    if (!isRecaptchaChecked) {
      console.log('Form validation failed: reCAPTCHA not checked');
      alert('Bitte bestätigen Sie das reCAPTCHA.');
      return;
    }

    console.log('Form submitted successfully:', {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      timestamp: new Date().toISOString(),
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setIsRecaptchaChecked(false);
    alert('Nachricht erfolgreich gesendet!');
  };

  return (
    <section className="min-h-screen bg-black flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto w-full grid lg:grid-cols-2 items-stretch border border-primary/25">
        {/* Left Side - Image with Hexagonal Pattern */}
        <div className="relative lg:border-e h-64 sm:h-80 lg:h-full order-2 lg:order-1">
          {/* Hexagonal Pattern Overlay */}
          <div className="absolute -left-16 top-6 w-80 h-96 opacity-20">
            <svg viewBox="0 0 200 240" className="w-full h-full">
              {Array.from({ length: 8 }, (_, row) =>
                Array.from({ length: 6 }, (_, col) => {
                  const x = col * 30 + (row % 2) * 15;
                  const y = row * 26;
                  return (
                    <polygon
                      key={`${row}-${col}`}
                      points="15,0 45,0 60,26 45,52 15,52 0,26"
                      fill="none"
                      stroke="#d4af37"
                      strokeWidth="1"
                      transform={`translate(${x}, ${y})`}
                    />
                  );
                }),
              ).flat()}
            </svg>
          </div>

          {/* Chef Team Image */}
          <div className="relative z-10 h-full">
            <Image
              width={500}
              height={500}
              src="/home/reservation.jpg"
              alt="Chef Team"
              className="w-full mx-auto h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="relative order-1 lg:order-2">
          <div className="absolute -right-16 bottom-6 w-80 h-96 opacity-20 -z-10 pointer-events-none hidden lg:block">
            <svg viewBox="0 0 200 240" className="w-full h-full rotate-180">
              {Array.from({ length: 8 }, (_, row) =>
                Array.from({ length: 6 }, (_, col) => {
                  const x = col * 30 + (row % 2) * 15;
                  const y = row * 26;
                  return (
                    <polygon
                      key={`${row}-${col}`}
                      points="15,0 45,0 60,26 45,52 15,52 0,26"
                      fill="none"
                      stroke="#d4af37"
                      strokeWidth="1"
                      transform={`translate(${x}, ${y})`}
                    />
                  );
                }),
              ).flat()}
            </svg>
          </div>
          <div className="relative z-10 text-white lg:border-s border-primary/25 bg-background p-6 sm:p-8 lg:p-10">
            {/* Header */}
            <div className="mb-8 sm:mb-10 lg:mb-12">
              <p className="text-primary text-lg sm:text-xl lg:text-2xl font-light italic mb-2 miniver-regular">
                Kontakt
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                Kontaktieren Sie uns
              </h2>
            </div>

            {/* Contact Form */}
            <div className="space-y-4 sm:space-y-6">
              {/* Name and Email Row */}
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    className="w-full bg-transparent border border-gray-600 px-3 sm:px-4 py-3 sm:py-4 text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors duration-300 text-sm sm:text-base"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="w-full bg-transparent border border-gray-600 px-3 sm:px-4 py-3 sm:py-4 text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors duration-300 text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Nachricht"
                  rows={5}
                  className="w-full bg-transparent border border-gray-600 px-3 sm:px-4 py-3 sm:py-4 text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors duration-300 resize-none text-sm sm:text-base"
                />
              </div>

              {/* reCAPTCHA */}
              <div className="flex items-center justify-start my-6 sm:my-8">
                <div className="bg-gray-100 p-3 sm:p-4 rounded border border-gray-300 flex items-center space-x-2 sm:space-x-3 w-full sm:w-auto">
                  <input
                    type="checkbox"
                    id="recaptcha"
                    checked={isRecaptchaChecked}
                    onChange={handleRecaptchaChange}
                    className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="recaptcha" className="text-gray-800 text-xs sm:text-sm">
                    I&apos;m not a robot
                  </label>
                  <div className="ml-auto">
                    <div className="text-xs text-gray-500">
                      <div className="font-bold">reCAPTCHA</div>
                      <div className="text-xs">Privacy - Terms</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  onClick={handleSubmit}
                  className="group relative cursor-pointer overflow-hidden bg-transparent border border-white text-white px-6 sm:px-8 py-3 sm:py-4 hover:bg-white hover:text-black transition-all duration-300 font-medium flex items-center justify-center gap-2 w-full sm:w-auto text-sm sm:text-base"
                >
                  <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-11">
                    Nachricht Abschicken
                  </span>
                  <div className="absolute top-1/2 left-0 -translate-y-px bg-black h-px w-0 opacity-0 transition-all duration-500 group-hover:w-7 group-hover:opacity-100 group-hover:translate-x-7"></div>
                  <div className="bg-white h-px w-7 opacity-100 ml-4 transition-all duration-500 group-hover:scale-100 group-hover:opacity-0"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
