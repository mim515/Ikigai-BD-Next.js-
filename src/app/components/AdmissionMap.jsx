import React from "react";



// Location Pin Icon
const MapPin = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

// Directions Icon (Arrow right)
const ArrowRight = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12l14 0" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

// --- Main Component ---

// Utility function to encode addresses for Google Maps
const encodeAddress = (address) => encodeURIComponent(address);

const branchData = [
  {
    name: "Mohammadpur Branch (Head Office)",
    address: "House-2/10, Humayun Road, Mohammadpur, Dhaka, Bangladesh",
    mapLink: `https://www.google.com/maps/dir/?api=1&destination=${encodeAddress(
      "House-2/10, Humayun Road, Mohammadpur, Dhaka, Bangladesh"
    )}`,
    isHeadOffice: true,
  },
  {
    name: "Gulshan Branch",
    address: "House 20, Road: 104, Gulshan-2, Dhaka-1212",
    mapLink: `https://www.google.com/maps/dir/?api=1&destination=${encodeAddress(
      "House 20, Road: 104, Gulshan-2, Dhaka-1212"
    )}`,
    isHeadOffice: false,
  },
];

const BranchCard = ({ branch }) => (
  <div className="bg-white-50 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 flex flex-col h-full">
    <div className="flex items-start mb-4">
      <div className="p-3 bg-indigo-300 text-indigo-600 rounded-full flex-shrink-0 mr-4">
        <MapPin className="w-6 h-6" />
      </div>
      <div>
        <h3 className="text-xl font-bold color-h1-blue mb-1">{branch.name}</h3>
        {branch.isHeadOffice && (
          <span className="text-xs font-medium text-white bg-dark-purple px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
            Head Office
          </span>
        )}
      </div>
    </div>

    <p className="text-gray-600 mb-6 flex-grow">{branch.address}</p>

    <div className="">
      <a
        href={branch.mapLink}
        target="_blank"
        rel="noopener noreferrer"
        className="transition duration-300 inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-white cta-button rounded-full w-full mt-auto whitespace-nowrap"
      >
        View on Map (Directions)
        <ArrowRight className="ml-2 w-4 h-4" />
      </a>
    </div>
  </div>
);

const AdmissionMap = () => {
  return (
    <div data-aos="fade-up" className="section-padding">
      <div className="section-container">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="mb-2 text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Visit Our Campus for Admission
          </p>
          <p className="bg-[rgb(255,0,0,0.3)] p-3 max-w-xl mx-auto font-bold rounded-full text-red-950">
            Admission is currently **NOT** available online.
          </p>
          <p className="mt-4 text-sm md:text-lg color-gray-dark max-w-2xl mx-auto">
            Find the branch nearest to you. We look forward to welcoming you!
          </p>
        </div>

        {/* Branch Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {branchData.map((branch, index) => (
            <BranchCard key={index} branch={branch} />
          ))}
        </div>

        {/* Call to Action / Footer */}
        <div className="text-center">
          <div className="inline-flex items-center p-4 bg-white-50 border mt-6 border-indigo-100 rounded-lg shadow-lg">
            <p className=" text-lg color-h1-blue font-medium">
              Have questions? Contact <br />
              <a
                href="#"
                className="text-indigo-600 transition duration-300 hover:underline"
              >
                +880-1772-523070
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionMap;
