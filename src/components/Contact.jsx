import React from 'react';

class Contact extends React.Component {
  render() {
    const contacts = [
      { 
        name: 'Sri.Yasim Khan M', 
        phone: '+91 9447384678',
        role: 'Conference Chair'
      },
      { 
        name: 'Prof. Raj Kumar T', 
        phone: '+91 9778328099',
        role: 'Program Chair'
      },
      { 
        name: 'Prof. Leena Thomas', 
        phone: '+91 9400428880',
        role: 'Organizing Chair'
      }
    ];

    return (
      <section className="py-12 px-4 sm:px-6 lg:px-8" id ="contact">
        <div className="max-w-7xl mx-auto">
          <div className="mb-2 text-[#40E0D0] uppercase tracking-wider">
            Get in Touch
          </div>
          <h2 className="text-4xl font-bold text-white mb-8">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contacts.map((contact, index) => (
              <div 
                key={index} 
                className="rounded-2xl overflow-hidden bg-[#1a1a2e] transition-transform duration-300 hover:-translate-y-1"
                style={{
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)'
                }}
              >
                <div className="h-24 bg-gradient-to-r from-purple-600 to-blue-500 p-6">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{contact.name}</h3>
                  <a 
                    href={`tel:${contact.phone}`} 
                    className="text-gray-300 hover:text-[#40E0D0] transition-colors mb-4 block"
                  >
                    {contact.phone}
                  </a>
                  <div className="flex gap-2 mt-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400">
                      {contact.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;

