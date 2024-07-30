import React, { useEffect, useState } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
        src: '/carousel3.jpg',
        alt: 'Science Exhibition',
      },
      {
        src: '/carousel4.jpg',
        alt: 'Cultural Fest',
      },
    {
      src: '/carousel2.jpg',
      alt: 'Annual Sports Day',
    },

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every second (1000 ms)

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div aria-roledescription="carousel" className="relative rounded-lg overflow-hidden" role="region">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              aria-roledescription="slide"
              className="min-w-0 shrink-0 grow-0 basis-full pl-4"
              role="group"
            >
              <img
                src={slide.src}
                width="800"
                height="450"
                alt={slide.alt}
                className="aspect-video object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <button
        className="inline-flex shrink-0 items-center justify-center whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background font-medium shadow-sm hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full -left-12 top-1/2 -translate-y-1/2"
        disabled={currentSlide === 0} // Disable button on the first slide
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)} // Go to previous slide
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-arrow-left h-4 w-4"
        >
          <path d="m12 19-7-7 7-7"></path>
          <path d="M19 12H5"></path>
        </svg>
        <span className="sr-only">Previous slide</span>
      </button>
      <button
        className="inline-flex shrink-0 items-center justify-center whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background font-medium shadow-sm hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full -right-12 top-1/2 -translate-y-1/2"
        disabled={currentSlide === slides.length - 1} // Disable button on the last slide
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)} // Go to next slide
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-arrow-right h-4 w-4"
        >
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
        <span className="sr-only">Next slide</span>
      </button>
    </div>
  );
};

export default Carousel;
