import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What visa options are available for expatriates in Kenya?",
    answer: "Kenya offers various visas, including tourist visas, work permits, investor permits, and special passes."
  },
  {
    question: "How long does it take to process a work permit?",
    answer: "Processing times vary based on the category, but generally, it takes 6-12 weeks."
  },
  {
    question: "Can I invest in Kenya as a foreigner?",
    answer: "Yes! Foreigners can own businesses, invest in property, and engage in key industries."
  },
  {
    question: "What documents are required for a work permit application?",
    answer: "Requirements vary by permit class but typically include a passport copy, business registration documents, proof of qualifications, and an application form."
  },
  {
    question: "Can Ceking East Africa assist with residency applications?",
    answer: "Absolutely! We handle the entire work permit, residence permit, and investor permit application process."
  }
];

const FAQItem: React.FC<{ item: FAQItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
      <button
        className="w-full px-6 py-5 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-gray-900 pr-8">{item.question}</span>
        <div className={`flex-shrink-0 p-2 rounded-full bg-blue-50 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className="text-blue-600 w-5 h-5" />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-5 text-gray-600">
          {item.answer}
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((item, index) => (
            <FAQItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;