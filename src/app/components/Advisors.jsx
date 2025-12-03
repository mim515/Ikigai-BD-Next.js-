"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

// --- 1. Team Card Component ---
const TeamCard = ({ member, onClick }) => {
  return (
    <div
      onClick={() => onClick(member)}
      className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl"
    >
      {/* Image Container */}
      <div className="relative w-full h-80">
        <Image
          src={member.image}
          alt={member.name}
          fill
          unoptimized={member.image.endsWith(".svg")}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          placeholder={member.image.endsWith(".svg") ? undefined : "blur"}
          className="object-cover object-top"
        />

        {/* Hover Overlay */}
        <div
          className="
            absolute bottom-0 left-0 w-full max-h-40
            translate-y-full group-hover:translate-y-0
            transition-transform duration-500 ease-in-out
            bg-white/50 backdrop-blur-md
            px-4 py-4 
            flex flex-col justify-end
            z-[50]
          "
        >
          <p className="color-dark-purple font-semibold">Education</p>
          <p className="text-sm color-gray-dark mb-3">{member.education}</p>

          <p className="color-dark-purple font-semibold">Profession</p>
          <p className="color-gray-dark text-sm">{member.profession}</p>
        </div>
      </div>

      {/* Text */}
      <div className="p-4 text-center relative z-[100] bg-[#C9D1F7]">
        <h3 className="text-lg font-semibold color-blue-h1">{member.name}</h3>
        <p className="para text-sm">{member.title}</p>
      </div>
    </div>
  );
};

// --- 2. Advisors Main Component ---
const Advisors = () => {
  const [advisors, setAdvisors] = useState([]);
  const [selectedAdvisor, setSelectedAdvisor] = useState(null);

  useEffect(() => {
    const fetchAdvisors = async () => {
      try {
        const res = await fetch("/data/member.json");
        const data = await res.json();

        const filtered = data.filter((item) => item.advisor === true);
        setAdvisors(filtered);
      } catch (error) {
        console.error("Error fetching advisors:", error);
      }
    };

    fetchAdvisors();
  }, []);

  const closeModal = () => setSelectedAdvisor(null);

  return (
    <section className="section-padding bg-white-50">
      <div className="section-container">
        {/* Section Heading */}
        <div className="secondary-heading">
          <h2>
            <span>Our Advisors</span>
          </h2>
          <p>
            Guided by a passionate team dedicated to nurturing the potential in
            every child.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {advisors.map((member) => (
            <TeamCard
              key={member.name}
              member={member}
              onClick={setSelectedAdvisor}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedAdvisor && (
        <div
          className="fixed inset-0 z-200 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="neumorphic-gradient-card-green rounded-3xl card-padding   shadow-xl max-w-md w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 font-bold text-lg"
              onClick={closeModal}
            >
              &times;
            </button>

            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden">
                <Image
                  src={selectedAdvisor.image}
                  alt={selectedAdvisor.name}
                  fill
                  unoptimized={selectedAdvisor.image.endsWith(".svg")}
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <div className="text-center">
                  <h3 className="text-xl color-dark-pink font-semibold ">
                    {selectedAdvisor.name}
                  </h3>
                  <div className="text-color-white bg-dark-purple px-4 py-1 max-w-[200px] mx-auto rounded-2xl mb-6">
                    <p className="">{selectedAdvisor.title}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-1 text-sm">
                  <strong>Education:</strong> {selectedAdvisor.education}
                </p>
                <p className="text-gray-700 mb-1 text-sm">
                  <strong>Profession:</strong> {selectedAdvisor.profession}
                </p>
                {selectedAdvisor.bio && (
                  <p className="text-gray-600 mt-2 text-sm">
                    {selectedAdvisor.bio}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Advisors;
