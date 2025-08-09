'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

// Declare global grecaptcha
declare global {
  interface Window {
    grecaptcha: any;
  }
}

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
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [isRecaptchaLoaded, setIsRecaptchaLoaded] = useState<boolean>(false);
  const recaptchaRef = useRef<HTMLDivElement>(null);
  const recaptchaWidgetId = useRef<number | null>(null);

  // Load reCAPTCHA script and render widget
  useEffect(() => {
    const loadRecaptcha = () => {
      // Check if script already exists
      if (document.querySelector('script[src*="recaptcha"]')) {
        // Script exists, wait for grecaptcha to be ready
        const checkReady = () => {
          if (window.grecaptcha && window.grecaptcha.render) {
            renderRecaptcha();
          } else {
            setTimeout(checkReady, 100);
          }
        };
        checkReady();
        return;
      }

      // Create and load script
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      // Define global callback
      (window as any).onRecaptchaLoad = () => {
        renderRecaptcha();
      };
    };

    const renderRecaptcha = () => {
      if (recaptchaRef.current && !recaptchaWidgetId.current) {
        try {
          recaptchaWidgetId.current = window.grecaptcha.render(recaptchaRef.current, {
            sitekey: '6Ldj6McqAAAAACFJahkqj4lXCj0F_iY8IBsBJgIb', // Replace with your actual site key
            callback: (token: string) => {
              setRecaptchaToken(token);
              console.log('reCAPTCHA verified:', token);
            },
            'expired-callback': () => {
              setRecaptchaToken(null);
              console.log('reCAPTCHA expired');
            },
            'error-callback': () => {
              setRecaptchaToken(null);
              console.log('reCAPTCHA error');
            },
          });
          setIsRecaptchaLoaded(true);
        } catch (error) {
          console.error('Error rendering reCAPTCHA:', error);
        }
      }
    };

    loadRecaptcha();

    // Cleanup
    return () => {
      if ((window as any).onRecaptchaLoad) {
        delete (window as any).onRecaptchaLoad;
      }
    };
  }, []);

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

  const resetRecaptcha = () => {
    if (window.grecaptcha && recaptchaWidgetId.current !== null) {
      window.grecaptcha.reset(recaptchaWidgetId.current);
      setRecaptchaToken(null);
    }
  };

  const handleSubmit = async (): Promise<void> => {
    console.log('Form submission attempted with data:', formData);
    console.log('reCAPTCHA token:', recaptchaToken);

    if (!formData.name || !formData.email || !formData.message) {
      console.log('Form validation failed: Missing required fields');
      alert('Bitte füllen Sie alle Felder aus.');
      return;
    }

    if (!recaptchaToken) {
      console.log('Form validation failed: reCAPTCHA not verified');
      alert('Bitte bestätigen Sie das reCAPTCHA.');
      return;
    }

    try {
      // Here you would typically send the form data and reCAPTCHA token to your backend
      // Example API call:
      /*
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      */

      console.log('Form submitted successfully:', {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        recaptchaToken,
        timestamp: new Date().toISOString(),
      });

      // Reset form
      setFormData({ name: '', email: '', message: '' });
      resetRecaptcha();
      alert('Nachricht erfolgreich gesendet!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.');
    }
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

              {/* Real reCAPTCHA */}
              <div className="flex items-center justify-start my-6 sm:my-8">
                <div ref={recaptchaRef} className="g-recaptcha"></div>
                {!isRecaptchaLoaded && (
                  <div className="bg-gray-100 p-3 sm:p-4 rounded border border-gray-300 flex items-center space-x-2 sm:space-x-3 w-full sm:w-auto">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-300 rounded animate-pulse"></div>
                    <span className="text-gray-800 text-xs sm:text-sm">Loading reCAPTCHA...</span>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  onClick={handleSubmit}
                  disabled={!recaptchaToken}
                  className={`group relative cursor-pointer overflow-hidden bg-transparent border border-white text-white px-6 sm:px-8 py-3 sm:py-4 hover:bg-white hover:text-black transition-all duration-300 font-medium flex items-center justify-center gap-2 w-full sm:w-auto text-sm sm:text-base ${
                    !recaptchaToken ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
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
