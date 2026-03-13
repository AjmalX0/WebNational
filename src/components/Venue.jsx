import React from 'react';
import{navigationPaths} from "../constants"
import { SectionWrapper } from "../hoc";

class VenueSection extends React.Component {
  render() {
    return (
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-2 text-[#40E0D0] uppercase tracking-wider">
            Location
          </div>
          <h2 className="text-4xl font-bold text-white mb-8">
            Conference Venue
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                College Of Engineering Kallooppara
              </h3>
              <p className="text-gray-300 mb-4">
                Experience NCICPS'26 with modern facilities and ample space, it's the perfect location for networking and learning.
              </p>
              <div className="flex items-center text-gray-300 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#40E0D0]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>College Of Engineering Kallooppara</span>
              </div>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-[#40E0D0]" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                  Kadamankulam P.O
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-[#40E0D0]" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                  Thiruvalla (via)
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-[#40E0D0]" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                  Pathanamthitta District
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-[#40E0D0]" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                  Kerala State - 689583
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden border border-[#40E0D0] border-opacity-20">
                <img
                  src="venue.jpg"
                  alt="College Of Engineering Kallooppara"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionWrapper(VenueSection, navigationPaths.venue);

