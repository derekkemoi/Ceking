import React, { useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John D.",
    role: "Investor from Canada",
    content: "Ceking East Africa made my investor permit process seamless. Their expertise and efficiency saved me months of paperwork hassles. Now, I run a successful business in Nairobi!"
  },
  {
    id: 2,
    name: "Maria S.",
    role: "Expat from Spain",
    content: "I needed a work permit quickly, and Ceking East Africa delivered beyond my expectations. Their team provided constant updates and handled everything professionally."
  },
  {
    id: 3,
    name: "Ahmed T.",
    role: "Business Owner from UAE",
    content: "Investing in Kenya was daunting at first, but with Ceking East Africa, I received step-by-step guidance. They even helped me find the right travel and accommodation solutions!"
  }
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col h-full transform hover:scale-[1.02] transition-all duration-300">
    <div className="flex items-center space-x-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
      ))}
    </div>
    
    <div className="relative flex-grow">
      <Quote className="absolute -top-2 -left-2 text-blue-100" size={40} />
      <p className="text-gray-600 relative z-10 italic">
        {testimonial.content}
      </p>
    </div>
    
    <div className="mt-6 pt-6 border-t border-gray-100">
      <p className="font-semibold text-gray-900">{testimonial.name}</p>
      <p className="text-blue-600 text-sm">{testimonial.role}</p>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            What Our Clients Say
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
        </div>
        
        <div className="relative">
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="text-blue-600" size={24} />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="text-blue-600" size={24} />
          </button>

          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide"
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="flex-none w-full sm:w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] snap-center"
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;