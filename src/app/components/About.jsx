import React from "react";
import Image from "next/image";

// Icon component used within the About section
const Icon = ({ name, className }) => {
  const icons = {
    heart: (
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    ),
    lightbulb: (
      <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-7 7c0 3.03 1.06 4.88 2.39 6.21a2.82 2.82 0 0 1 .61 1.79V18h8v-1c0-.66.22-1.28.61-1.79C17.94 13.88 19 12.03 19 9a7 7 0 0 0-7-7z" />
    ),
    users: (
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    ),
    leaf: <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />,
    "arrow-right": <path d="M5 12h14m-7-7 7 7-7 7" />,
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {icons[name]}
    </svg>
  );
};

// Keyframe animations for the background blobs
const Keyframes = () => (
  <style>
    {`
        @keyframes morph {
          0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }
      `}
  </style>
);

const About = () => {
  return (
    <>
      <Keyframes />
      <section
        id="about"
        className="relative overflow-hidden section-padding"
      >
        {/* Animated Gradient Blobs */}
        <div className="absolute inset-0 h-full w-full">
          <div className="absolute bottom-[-20%] left-[-10%] h-[400px] w-[500px] animate-[morph_8s_ease-in-out_infinite] rounded-full bg-purple-300/30 opacity-50 blur-3xl"></div>
          <div className="absolute top-[-20%] right-[-15%] h-[500px] w-[600px] animate-[morph_8s_ease-in-out_2s_infinite] rounded-full bg-pink-300/30 opacity-50 blur-3xl"></div>
        </div>

        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 backdrop-blur-md"></div>

        <div className=" relative section-container">
          <div className="section-heading">
                <h2>
                  <span className="text-2xl sm:text-4xl">Our Philosophy: Finding Joy in Growth</span>
                </h2>
                <p>At Ikigai, we believe every child is unique and full of potential. Our mission is to provide a foundation for lifelong learning and well-being.</p>
              </div>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative">
              <div className="relative rounded-3xl neumorphic-card">
               <Image src="/images/about us.svg" alt="Caring teachers with children" width={1200} height={800} priority />
              </div>
            </div>
            <div>
              <h3 className="mb-6 text-3xl font-bold color-blue-h1">
                Our Mission & Values
              </h3>
              <p className="mb-8 leading-relaxed color-p-blue">
                To cultivate a vibrant, inclusive community where children are
                empowered to explore, create, and develop a deep love for
                learning. We strive to nurture their unique talents and guide
                them towards discovering their 'ikigai' – their reason for joy
                and purpose.
              </p>
              

              <ul className="space-y-4 text-slate-700">
                <li className="flex items-start">
                  <div className="mr-4 mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center neumorphic-inset">
                    <Icon name="heart" className="h-5 w-5 color-dark-pink" />
                  </div>
                  <span>
                    <strong>Care & Compassion:</strong> Providing a safe,
                    nurturing, and emotionally supportive environment.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center  neumorphic-inset">
                    <Icon name="lightbulb" className="h-5 w-5 color-dark-blue" />
                  </div>
                  <span>
                    <strong>Curiosity & Exploration:</strong> Encouraging
                    discovery, critical thinking, and a love for questions.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center neumorphic-inset">
                    <Icon name="users" className="h-5 w-5 color-dark-purple" />
                  </div>
                  <span>
                    <strong>Collaboration & Community:</strong> Fostering
                    positive social interactions and a sense of belonging.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center neumorphic-inset">
                    <Icon name="leaf" className="h-5 w-5 color-dark-cyan" />
                  </div>
                  <span>
                    <strong>Holistic Development:</strong> Nurturing emotional,
                    social, cognitive, and physical growth.
                  </span>
                </li>
              </ul>
              <div className="mt-10">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center btn-neumorphic color-dark-pink border-animated"
                >
                  Know More About Us{" "}
                  <Icon name="arrow-right" className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
