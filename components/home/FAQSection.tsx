'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  leftImages: string[];
  rightImages: string[];
}

const FAQSection: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<string>('halal');
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const leftImageRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);

  const faqData: FAQItem[] = [
    {
      id: 'halal',
      question: 'Ist euer Fleisch Halal?',
      answer:
        'Ja, all unser Fleisch ist Halal-zertifiziert. Wir legen großen Wert auf Qualität und ethische Standards in der Auswahl unserer Zutaten.',
      leftImages: ['/home/reserveTable.jpg', '/home/faq.jpg'],
      rightImages: ['/home/contact.jpg'],
    },
    {
      id: 'vegetarian',
      question: 'Gibt es vegetarische und vegane Gerichte?',
      answer:
        'Ja, wir bieten sowohl vegetarische als auch vegane Gerichte an. Unsere Speisekarte wurde so gestaltet, dass für alle Vorlieben etwas dabei ist – ohne auf Geschmack zu verzichten.',
      leftImages: ['/home/location02.jpg', '/home/offer.jpg'],
      rightImages: ['/home/westfield.jpg'],
    },
    {
      id: 'dogs',
      question: 'Sind Hunde erlaubt?',
      answer:
        'Ja, gut erzogene Hunde sind bei uns herzlich willkommen. Bitte informieren Sie unser Team im Voraus, damit wir einen passenden Platz für Sie vorbereiten können.',
      leftImages: ['/home/ourRange.jpg', '/home/traditionMeets.jpg'],
      rightImages: ['/home/westfield03.jpg'],
    },
    {
      id: 'decoration',
      question: 'Dürfen wir selbst dekorieren?',
      answer:
        'Ja, nach vorheriger Absprache ist eine eigene Dekoration möglich. Bitte sprechen Sie uns rechtzeitig an, damit wir gemeinsam die Details klären können.',
      leftImages: ['/home/westfield02.jpg', '/home/westfield01.jpg'],
      rightImages: ['/home/westfield.jpg'],
    },
    {
      id: 'cake',
      question: 'Dürfen wir eigene Torten für Feiern mitbringen?',
      answer:
        'Ja, das Mitbringen eigener Torten für besondere Anlässe ist nach Absprache möglich. Bitte kontaktieren Sie uns im Voraus, damit wir die Lagerung und den Ablauf koordinieren können.',
      leftImages: ['/home/westfield.jpg', '/home/westfield.jpg'],
      rightImages: ['/home/westfield.jpg'],
    },
    {
      id: 'accessibility',
      question: 'Haben Sie behindertengerechte Toiletten und Eingänge?',
      answer:
        'Ja, unsere Räumlichkeiten sind barrierefrei gestaltet. Sowohl der Eingang als auch die Toiletten sind rollstuhlgerecht zugänglich.',
      leftImages: ['/home/westfield.jpg', '/home/westfield.jpg'],
      rightImages: ['/home/contact.jpg'],
    },
  ];

  const handleAccordionClick = (id: string): void => {
    if (isAnimating || id === activeAccordion) return;

    setIsAnimating(true);
    setActiveAccordion(id);

    // Scroll image containers to top
    if (leftImageRef.current) leftImageRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    if (rightImageRef.current) rightImageRef.current.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => setIsAnimating(false), 800);
  };

  const currentItem = faqData.find((item) => item.id === activeAccordion) || faqData[0];

  return (
    <section className="min-h-screen bg-black text-white py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <p className="text-amber-400 text-base sm:text-lg font-light italic mb-2 sm:mb-4 miniver-regular">
            Häufige Fragen
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight">
            Alles was Sie wissen müssen
          </h2>
        </div>

        {/* Three-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 items-center">
          {/* Left Images Column */}
          <div
            ref={leftImageRef}
            className="h-[300px] sm:h-[400px] lg:h-[600px] overflow-y-hidden space-y-3 sm:space-y-4 lg:space-y-6 col-span-1 order-2 lg:order-1"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeAccordion}-left1`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.4 }}
                className="aspect-[4/3] bg-card overflow-hidden "
              >
                <Image
                  width={600}
                  height={500}
                  src={currentItem.leftImages[0]}
                  alt="Left image 1"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 20vw"
                  quality={80}
                />
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeAccordion}-left2`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="aspect-square bg-gradient-to-br from-orange-600 to-red-600 overflow-hidden "
              >
                <Image
                  width={600}
                  height={500}
                  src={currentItem.leftImages[1]}
                  alt="Left image 2"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 20vw"
                  quality={80}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Middle Accordion Column */}
          <div className="col-span-1 lg:col-span-3 order-1 lg:order-2">
            <Accordion
              type="single"
              collapsible
              value={activeAccordion}
              onValueChange={handleAccordionClick}
              className="space-y-2 sm:space-y-4"
            >
              {faqData.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border border-gray-700 rounded-none"
                >
                  <AccordionTrigger
                    className={`w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center rounded-none justify-between transition-all ${
                      activeAccordion === item.id
                        ? 'bg-primary text-white'
                        : 'bg-transparent text-white hover:bg-transparent'
                    }`}
                  >
                    <span className="font-medium text-sm sm:text-base lg:text-lg text-left">
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="overflow-hidden bg-gray-900">
                    <div className="px-4 sm:px-6 py-3 sm:py-4">
                      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                        {item.answer}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right Images Column */}
          <div
            ref={rightImageRef}
            className="h-[300px] sm:h-[400px] md:block hidden lg:h-[600px] overflow-y-hidden col-span-1 order-3 lg:order-3"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeAccordion}-right`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="aspect-[3/4] bg-gradient-to-br from-green-700 to-teal-600 overflow-hidden "
              >
                <Image
                  width={600}
                  height={500}
                  src={currentItem.rightImages[0]}
                  alt="Right image"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 20vw"
                  quality={80}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
