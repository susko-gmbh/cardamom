"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Quote, Star } from "lucide-react";

type Testimonial = {
  id: number;
  content: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    content:
      "Cardamom hat mich mit seiner authentischen indischen Küche und der herzlichen Atmosphäre beeindruckt. Jedes Gericht spiegelt die Tradition wider, und der Service ist aufmerksam und freundlich. Ein Ort, an dem man sich sofort willkommen fühlt und kulinarisch auf eine Reise durch Indien entführt wird.",
    rating: 5,
  },
  {
    id: 2,
    content:
      "Cardamom ist für mich die perfekte Mischung aus traditionellen indischen Aromen und moderner Raffinesse. Die Gerichte sind liebevoll zubereitet und zeugen von echtem Handwerk. Die Atmosphäre ist entspannt, und die Aufmerksamkeit des Personals macht den Besuch zu einem rundum gelungenen Erlebnis.",
    rating: 5,
  },
  {
    id: 3,
    content:
      "Mein Besuch im Cardamom war ein kulinarischer Höhepunkt in jeder Hinsicht. Die Vielfalt der Speisekarte ermöglicht es, verschiedene Aromen zu entdecken, und die Qualität der Zutaten ist spürbar. Der Chefkoch versteht es, die Essenz der indischen Küche einzufangen. Absolut empfehlenswert für Feinschmecker.",
    rating: 5,
  },
  {
    id: 4,
    content:
      "Im Cardamom erlebte ich echte Geschmacksexplosionen. Die Kombination von Gewürzen und Frische der Zutaten machte jedes Gericht zu einem Erlebnis. Die Präsentation war ebenso ansprechend wie der Geschmack. Ein Ort, an dem man die Liebe zum Detail schmeckt. Definitiv mein neuer Favorit für indische Küche.",
    rating: 5,
  },
];

// Stars (filled up to rating)
const renderStars = (rating: number) =>
  Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={`w-5 h-5 ${
        i < rating ? "fill-current text-primary" : "text-gray-500"
      }`}
      strokeWidth={i < rating ? 0 : 2}
      aria-hidden="true"
    />
  ));

// Responsive items-per-view: 1 on small screens, 2 on >= lg (1024px)
function useItemsPerView() {
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const mqLg = window.matchMedia("(min-width: 1024px)");
    const update = () => setItemsPerView(mqLg.matches ? 2 : 1);
    update();
    mqLg.addEventListener("change", update);
    return () => mqLg.removeEventListener("change", update);
  }, []);

  return itemsPerView;
}

export default function TestimonialsSection() {
  const itemsPerView = useItemsPerView();

  const slides = useMemo(() => {
    const chunks: Testimonial[][] = [];
    for (let i = 0; i < testimonials.length; i += itemsPerView) {
      chunks.push(testimonials.slice(i, i + itemsPerView));
    }
    return chunks;
  }, [itemsPerView]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  // Clamp / reset slide when layout changes
  useEffect(() => {
    setCurrentSlide((prev) => Math.min(prev, Math.max(slides.length - 1, 0)));
  }, [slides.length]);

  // Autoplay
  useEffect(() => {
    if (!isAutoplay || slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentSlide((p) => (p + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoplay, slides.length]);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const nextSlide = () => setCurrentSlide((p) => (p + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((p) => (p - 1 + slides.length) % slides.length);

  // Touch swipe for mobile
  const startX = useRef<number | null>(null);
  const deltaX = useRef(0);

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startX.current = e.touches[0].clientX;
    deltaX.current = 0;
    setIsAutoplay(false);
  };
  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (startX.current == null) return;
    deltaX.current = e.touches[0].clientX - startX.current;
  };
  const onTouchEnd = () => {
    const threshold = 50; // px
    if (deltaX.current > threshold) prevSlide();
    else if (deltaX.current < -threshold) nextSlide();
    startX.current = null;
    deltaX.current = 0;
    setIsAutoplay(true);
  };

  return (
    <section className="bg-card py-8 sm:py-12 lg:py-16 xl:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-8 sm:mb-10 lg:mb-12 xl:mb-16">
          <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <span className="inline-block miniver-regular text-primary text-lg sm:text-xl lg:text-2xl font-semibold tracking-wider mb-2 sm:mb-3">
              Kundentestimonials
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6">
              Was sagen unsere Kunden?
            </h2>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div
            className="overflow-hidden"
            onMouseEnter={() => setIsAutoplay(false)}
            onMouseLeave={() => setIsAutoplay(true)}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentSlide * (100 / Math.max(slides.length, 1))
                }%)`,
                width: `${Math.max(slides.length, 1) * 100}%`,
              }}
            >
              {slides.map((slideTestimonials, slideIndex) => (
                <div
                  key={slideIndex}
                  className="flex gap-2 sm:gap-4"
                  style={{ width: `${100 / Math.max(slides.length, 1)}%` }}
                >
                  {slideTestimonials.map((t) => (
                    <div
                      key={t.id}
                      className="px-2 sm:px-4 transition-transform hover:scale-[1.02]"
                      style={{ width: itemsPerView === 1 ? "100%" : "50%" }} 
                    >
                      <div className="bg-secondary px-6 sm:px-10 lg:px-16 py-8 sm:py-12 lg:py-20 h-full shadow-2xl rounded-2xl">
                        {/* Stars */}
                        <div className="flex gap-1 mb-4 sm:mb-6 lg:mb-8 text-primary">
                          {renderStars(t.rating)}
                        </div>

                        {/* Content */}
                        <div className="relative">
                          <Quote className="absolute -top-8 sm:-top-12 lg:-top-20 -right-1 sm:-right-2 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary/20 rotate-180" />
                          <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 relative z-10">
                            {t.content}
                          </p>
                        </div>

                        {/* Avatar placeholder (kept as in your design) */}
                        <div className="flex items-center">
                          {/* <div className="w-12 h-12 bg-gradient-to-br from-primary to-amber-600 rounded-full mr-4 opacity-30"></div> */}
                          <div>
                            {/* <h5 className="text-white font-semibold text-lg">Name</h5> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center space-x-2 sm:space-x-3 mt-8 sm:mt-10 lg:mt-12">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                  currentSlide === i
                    ? "bg-primary scale-125"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
