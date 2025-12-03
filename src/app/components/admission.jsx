import React from 'react'; // Explicitly import React
import { CheckCircle, Clock, BookOpen, Users, Calendar } from 'lucide-react';
import Image from 'next/image';
import CtaButton from './Button';
import AdmissionMap from './AdmissionMap';

// Mock data for the admission process steps
const admissionSteps = [
  {
    icon: Calendar,
    title: "1. Schedule a Visit",
    description: "Book an appointment to tour our facility, meet our staff, and observe a classroom session.",
    color: "text-pink-500",
  },
  {
    icon: BookOpen,
    title: "2. Application Submission",
    description: "Complete and submit the online application form along with necessary documentation.",
    color: "text-purple-500",
  },
  {
    icon: Users,
    title: "3. Interactive Session",
    description: "Your child participates in a short, playful session with our educators to assess readiness.",
    color: "text-violet-500",
  },
  {
    icon: CheckCircle,
    title: "4. Enrollment Confirmation",
    description: "Receive the official offer letter and secure your child's spot by submitting the initial fee.",
    color: "text-indigo-500",
  },
];



const AdmissionPage = () => {
  return (
    <div className=" ">
      {/* 1. Hero/Banner Section */}
      <section className="relative section-padding overflow-hidden bg-gradient-to-br from-pink-50 to-purple-100 shadow-inner">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
            
            {/* Text Content */}
            <div className="lg:max-w-1/2 mb-12 lg:mb-0" data-aos="fade-right">
              <span className="text-sm font-semibold color-dark-pink uppercase tracking-widest max-w-sm  py-1 px-3 hidden md:block rounded-full shadow-md">
                Enrollment Open for Next Season
              </span>
              <p className='md:hidden block color-dark-pink text-lg font-bold'>Enrollment Open for Next Season</p>
              <h1 className="text-4xl md:text-6xl font-extrabold color-h1-blue mt-4 leading-tight tracking-tighter">
                Begin Your Child's <span className="color-dark-purple">Joyful Journey</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-xl">
                We are thrilled you are considering Ikigai! Our admissions process is designed to be simple, transparent, and focused on finding the perfect fit for your child.
              </p>
              
              <div className="mt-8 md:flex space-x-4">
                
                <div className=''>
                  <CtaButton className="cta-button">
                    <a
                  href="tel:+8801772523070"
                  className=""
                >
                  Call for Inquiry
                </a>
                  </CtaButton>
                </div>
              </div>
            </div>

            {/* Image (Mock) */}
            <div className="lg:w-1/2 relative" data-aos="fade-left">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white">
                
                <Image
                  src="/images/img_7334.jpg"
                  alt="Children looking happy in a classroom environment"
                  width="600"
                  height="400"
                  className="absolute inset-0 w-full h-full object-cover z-50"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white/90 p-3 rounded-xl shadow-xl transform rotate-3 z-100 hidden lg:block transition duration-300 hover:rotate-0">
                 <Clock className="w-6 h-6 text-purple-600 inline mr-2"/>
                 <span className="text-sm font-bold color-gray-dark">Limited Spots Available!</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Key Information Section */}
    
        <AdmissionMap />
      

      {/* 3. The Application Process Guide */}
      <section id="application-guide" className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="section-heading">
            <h2 className="">
            <span>Our Simple 4-Step Admission Process</span>
          </h2>
          <p className="">
            We've streamlined the process to make it easy and welcoming for both parents and children.
          </p>
          </div>

          <div className="relative flex flex-col items-center">
            {/* Vertical Connector Line (Hidden on Mobile) */}
            <div className="hidden lg:block absolute h-full w-0.5 bg-gray-200 top-0 bottom-0 left-1/2 transform -translate-x-1/2 z-0"></div>

            {admissionSteps.map((step, index) => (
              <div
                key={index}
                className={`flex w-full mb-12 lg:mb-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                {/* Step Content */}
                <div className="lg:w-5/12 card-padding  rounded-2xl shadow-xl border border-gray-100 transform transition duration-500 hover:shadow-2xl hover:scale-[1.01]">
                  <div className="flex items-center space-x-4">
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                    <h3 className="text-lg md:text-2xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="para mt-3">{step.description}</p>
                </div>

                {/* Center Icon & Line */}
                <div className="lg:w-2/12 flex justify-center items-center relative py-4 lg:py-0">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${index % 2 === 0 ? 'bg-white border-4 border-gray-100 shadow-md' : 'bg-white border-4 border-gray-100 shadow-md'} z-10`}>
                      <span className="text-lg font-bold text-purple-600">{index + 1}</span>
                  </div>
                </div>

                {/* Empty Spacer */}
                <div className="lg:w-5/12 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Documents & FAQ CTA Section */}
      <section className="section-padding bg-gradient-to-r from-violet-500 to-pink-500 text-white">
        <div className="section-container text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4">Ready to Enroll?</h2>
          <p className="para text-color-white max-w-4xl mx-auto mb-8">
            Download our full Admission Kit for details on required documents, fee structures, and our school calendar.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="#" 
              className="px-8 py-3 text-lg font-bold text-pink-500 bg-white/90 rounded-full shadow-xl transition duration-300 transform hover:scale-105 hover:bg-gray-100"
            >
              Download Admission Kit
            </a>
            <a
              href="#faq"
              className="px-8 py-3 text-lg font-semibold text-white border-2 border-white rounded-full transition duration-300 transform hover:scale-105 hover:bg-white hover:text-violet-600"
            >
              View FAQs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionPage;