import React, { useState } from 'react';
import { Mail, ChevronDown, ChevronUp } from 'lucide-react';

const Team: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            Meet Our Team
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <div className="relative h-full">
                  <img
                    src="https://raw.githubusercontent.com/derekkemoi/Ngetich-Files/refs/heads/main/eric.jpeg"
                    alt="Eric Ngetich"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
              
              <div className="md:w-2/3 p-8 md:p-12">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Eric Ngetich</h3>
                  <p className="text-blue-600 font-semibold mb-4">Founder & Lead Consultant</p>
                  
                  <div className="prose prose-lg text-gray-600">
                    <p className="mb-4">
                      Eric Ngetich is a seasoned immigration and travel consultant with extensive expertise in Kenya's regulatory and legal frameworks. As the Founder of Ceking East Africa Company Ltd., Eric has been instrumental in guiding expatriates, investors, and businesses through Kenya's immigration processes, ensuring a seamless and stress-free experience.
                    </p>
                    
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="space-y-4 pt-4">
                        <p>
                          Eric holds a Diploma in Diplomacy and International Studies and a Bachelor's degree in Political Science, which have equipped him with a deep understanding of international relations, governance, and foreign policy. He is currently pursuing an MBA, looking to hone his skills in leadership, strategy, and business management to further enhance his ability to support clients in achieving their relocation, investment, and travel goals.
                        </p>
                        <p>
                          With 7 years of experience in immigration consultancy, Eric has built a strong reputation for his professionalism, efficiency, and personalized service. Beyond his work at Ceking East Africa, he is a passionate entrepreneur committed to sustainable development. He is the founder of the Nairobi Bamboo Technology Training Institute (NBTTI) and has launched several innovative ventures aimed at driving positive change in the community.
                        </p>
                        <p>
                          Eric's mission is to empower individuals and businesses to successfully relocate, invest, and explore Kenya. His expertise, combined with a client-focused approach, makes him a trusted partner for those seeking to establish themselves in the country. At Ceking East Africa, Eric and his team are dedicated to delivering tailored solutions that meet the unique needs of every client.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-6 mb-8 inline-flex items-center px-6 py-2 text-blue-600 hover:text-blue-700 font-medium transition-all duration-300 group"
                  >
                    {isExpanded ? (
                      <>
                        <span>Read Less</span>
                        <ChevronUp className="ml-2 transition-transform duration-300 group-hover:-translate-y-1" />
                      </>
                    ) : (
                      <>
                        <span>Read More</span>
                        <ChevronDown className="ml-2 transition-transform duration-300 group-hover:translate-y-1" />
                      </>
                    )}
                  </button>
                  
                  <button
                    onClick={scrollToContact}
                    className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-600/25"
                  >
                    <Mail className="mr-2" size={20} />
                    Get In Touch
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;