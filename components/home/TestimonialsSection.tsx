'use client';
import { Quote, Star } from 'lucide-react';
import React, { useEffect, useState } from 'react';

interface Testimonial {
  id: number;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content:
      'Cardamom hat mich mit seiner authentischen indischen Küche und der herzlichen Atmosphäre beeindruckt. Jedes Gericht spiegelt die Tradition wider, und der Service ist aufmerksam und freundlich. Ein Ort, an dem man sich sofort willkommen fühlt und kulinarisch auf eine Reise durch Indien entführt wird.',
    rating: 5,
  },
  {
    id: 2,
    content:
      'Cardamom ist für mich die perfekte Mischung aus traditionellen indischen Aromen und moderner Raffinesse. Die Gerichte sind liebevoll zubereitet und zeugen von echtem Handwerk. Die Atmosphäre ist entspannt, und die Aufmerksamkeit des Personals macht den Besuch zu einem rundum gelungenen Erlebnis.',
    rating: 5,
  },
  {
    id: 3,
    content:
      'Mein Besuch im Cardamom war ein kulinarischer Höhepunkt in jeder Hinsicht. Die Vielfalt der Speisekarte ermöglicht es, verschiedene Aromen zu entdecken, und die Qualität der Zutaten ist spürbar. Der Chefkoch versteht es, die Essenz der indischen Küche einzufangen. Absolut empfehlenswert für Feinschmecker.',
    rating: 5,
  },
  {
    id: 4,
    content:
      'Im Cardamom erlebte ich echte Geschmacksexplosionen. Die Kombination von Gewürzen und Frische der Zutaten machte jedes Gericht zu einem Erlebnis. Die Präsentation war ebenso ansprechend wie der Geschmack. Ein Ort, an dem man die Liebe zum Detail schmeckt. Definitiv mein neuer Favorit für indische Küche.',
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(2);

  // Handle responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(1);
      } else {
        setItemsPerView(2);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const maxSlide = Math.ceil(testimonials.length / itemsPerView) - 1;
        return prev >= maxSlide ? 0 : prev + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoplay, itemsPerView]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Create slides based on itemsPerView
  const createSlides = () => {
    const slides = [];
    for (let i = 0; i < testimonials.length; i += itemsPerView) {
      const slideTestimonials = testimonials.slice(i, i + itemsPerView);
      slides.push(slideTestimonials);
    }
    return slides;
  };

  const slides = createSlides();

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < rating ? 'fill-primary text-primary' : 'text-gray-400'}`}
      />
    ));
  };

  return (
    <section className="bg-card py-8 sm:py-12 lg:py-16 xl:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-8 sm:mb-10 lg:mb-12 xl:mb-16">
          <div className="text-center lg:text-left max-w-2xl">
            <span className="inline-block miniver-regular text-primary text-lg sm:text-xl lg:text-2xl font-semibold tracking-wider mb-2 sm:mb-3">
              Kundentestimonials
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6">
              Was sagen unsere Kunden?
            </h2>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div
            className="overflow-hidden"
            onMouseEnter={() => setIsAutoplay(false)}
            onMouseLeave={() => setIsAutoplay(true)}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * (100 / slides.length)}%)`,
                width: `${slides.length * 100}%`,
              }}
            >
              {slides.map((slideTestimonials, slideIndex) => (
                <div
                  key={slideIndex}
                  className="flex gap-2 sm:gap-4"
                  style={{ width: `${100 / slides.length}%` }}
                >
                  {slideTestimonials.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className={`px-2 sm:px-4 ${itemsPerView === 1 ? 'w-full' : 'w-1/2'}`}
                    >
                      <div className="bg-secondary px-6 sm:px-10 lg:px-16 py-8 sm:py-12 lg:py-20 h-full shadow-2xl transition-all duration-300">
                        {/* Stars */}
                        <div className="flex gap-1 mb-4 sm:mb-6 lg:mb-8 text-primary">
                          {renderStars(testimonial.rating)}
                        </div>

                        {/* Content */}
                        <div className="relative">
                          <Quote className="absolute -top-8 sm:-top-12 lg:-top-20 -right-1 sm:-right-2 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary/20 transform rotate-180" />
                          <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 relative z-10">
                            {testimonial.content}
                          </p>
                        </div>

                        {/* Avatar placeholder - commented out as in original */}
                        <div className="flex items-center">
                          {/* <div className="w-12 h-12 bg-gradient-to-br from-primary to-amber-600 rounded-full mr-4 opacity-30"></div> */}
                          <div>
                            {/* Names commented out as in original */}
                            {/* <h5 className="text-white font-semibold text-lg">Name</h5> */}
                            {/* <span className="text-primary text-sm">Position</span> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {/* <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary/90 hover:bg-primary rounded-full flex items-center justify-center text-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl z-20"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary/90 hover:bg-primary rounded-full flex items-center justify-center text-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl z-20"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button> */}
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center space-x-2 sm:space-x-3 mt-8 sm:mt-10 lg:mt-12">
          {Array.from({ length: slides.length }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === index ? 'bg-primary scale-125' : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
