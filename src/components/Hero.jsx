"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { X } from "lucide-react"

export default function Hero() {
  const navigate = useNavigate()
  const [showPaperDetails, setShowPaperDetails] = useState(false)
  const [showConclaveDetails, setShowConclaveDetails] = useState(false)
  const [showWorkshopDetails, setShowWorkshopDetails] = useState(false)
  const [showPosterDetails, setShowPosterDetails] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    // load the images from the public folder
      "/Page 1.png",
      "/Page 2.png"
  ]

  const toggleDetails = (section) => {
    switch (section) {
      case "paper":
        setShowPaperDetails(!showPaperDetails)
        setShowConclaveDetails(false)
        setShowWorkshopDetails(false)
        setShowPosterDetails(false)
        break
      case "conclave":
        setShowConclaveDetails(!showConclaveDetails)
        setShowPaperDetails(false)
        setShowWorkshopDetails(false)
        setShowPosterDetails(false)
        break
      case "workshop":
        setShowWorkshopDetails(!showWorkshopDetails)
        setShowPaperDetails(false)
        setShowConclaveDetails(false)
        setShowPosterDetails(false)
        break
      case "poster":
        setShowPosterDetails(!showPosterDetails)
        setShowPaperDetails(false)
        setShowConclaveDetails(false)
        setShowWorkshopDetails(false)
        break
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white py-12">
      <div className="container mx-auto px-4 pt-20">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">NCICPS 26</h2>
              <h1 className="text-4xl font-bold leading-tight mb-4">
                3rd National Conference on Intelligent Cyber Physical Systems
                <br />
                <span className="text-[#00B3B3]">06th May - 07th May 2026</span>
              </h1>
            </div>
                        {/* About Us Section */}
                        <div className="space-y-2">
              <p className="text-gray-300">
                The 3rd National Conference on Intelligent Cyber Physical Systems (NCICPS'26) is a premier gathering of
                researchers, practitioners, and innovators in the field of cyber-physical systems and their intelligent
                applications.
              </p>
              <p className="text-gray-300">
                Join us in shaping the future of intelligent systems and their impact on our interconnected world.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xl font-bold text-[#00B3B3]">Organized By</p>
              <p className="text-2xl font-bold">College of Engineering Kallooppara</p>
              <p className="text-gray-300">
                Kadamankulam P.O <br />
                Thiruvalla <br />
                Pathanamthitta District <br />
                Kerala - 689583
              </p>
            </div>

            {/* Paper Presentation Section */}
            <div className="space-y-2 py-5">
              <div className="flex justify-between items-center">
                <p className="text-xl font-bold text-[#00B3B3]">Paper Presentation</p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => toggleDetails("paper")}
                    className="bg-[#00B3B3] hover:bg-[#009999] text-white font-bold py-2 px-4 rounded"
                  >
                    Details
                  </button>
                  <button
                    className="bg-[#00B3B3] hover:bg-[#009999] text-white font-bold py-2 px-4 rounded"
                    onClick={() => window.open("https://forms.gle/RBfPBWcpbdUeBiyg7", "_blank")}
                  >
                    Registration
                  </button>
                </div>
              </div>
              {showPaperDetails && (
                <div className="mt-2 pl-4">
                  <p className="text-gray-300">
                    Details of paper presentation will be conveyed to the authors of accepted papers through their registered e-mail id.
                  </p>
                </div>
              )}
            </div>

            {/* Conclave Section */}
            <div className="space-y-2 py-5">
              <div className="flex justify-between items-center">
                <p className="text-xl font-bold text-[#00B3B3]">Conclave</p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => toggleDetails("conclave")}
                    className="bg-[#00B3B3] hover:bg-[#009999] text-white font-bold py-2 px-4 rounded"
                  >
                    Details
                  </button>
                  <button
                    className="bg-[#00B3B3] hover:bg-[#009999] text-white font-bold py-2 px-4 rounded"
                    onClick={() => window.open("https://forms.gle/x5uGtwXZpJhMSSeeA", "_blank")}
                  >
                    Registration
                  </button>
                </div>
              </div>
              {showConclaveDetails && (
                <div className="mt-2 pl-4">
                  <p className="text-gray-300">
                    Details about the conclave will be shown here.
                  </p>
                </div>
              )}
            </div>

            {/* Workshop Section */}
            <div className="space-y-2 py-5">
              <div className="flex justify-between items-center">
                <p className="text-xl font-bold text-[#00B3B3]">Workshop</p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => toggleDetails("workshop")}
                    className="bg-[#00B3B3] hover:bg-[#009999] text-white font-bold py-2 px-4 rounded"
                  >
                    Details
                  </button>
                  <button
                    className="bg-[#00B3B3] hover:bg-[#009999] text-white font-bold py-2 px-4 rounded"
                    onClick={() => window.open("https://forms.gle/1UhpazS9LRuJPcPr7", "_blank")}
                  >
                    Registration
                  </button>
                </div>
              </div>
              {showWorkshopDetails && (
                <div className="mt-2 pl-4">
                  <p className="text-white font-bold">
                    Date: 28/02/25
                  </p>
                  <p className="text-white-10 font-bold py-4">
                  Track I - From Concept to Reality: Developing Intelligent Cyber-Physical System for Smart cities and Beyond
                  </p>
                  <div>
                  <p className="text-gray-300">
                  Introduction to IoT and Cyber-Physical Systems (CPS) <br/>
                  Single Board Computers and System on Module for CPS.<br/>
                  I2C and SPI Protocols for Sensor Interfacing. <br/>
                  Hands on sessions on DS18B20 & DHT22 Sensor interfacing and real-time deployment to open source cloud platform.
                  </p>
                  </div>
                  <p className="text-white-10 font-bold py-4">
                  Track II - Building LLM Powered applications
                  </p>
                  <p className="text-gray-300">
                  Introduction to Large Language Models (LLMs) <br/>
                  Choosing the Right LLM for Your Application<br/>
                  Prompt Engineering<br/>
                  Embedding LLMs within Applications<br/>
                  Building Conversational Applications<br/>
                  Search and Recommendation Engines with LLMs<br/>
                  Using LLMs with Structured Data<br/>
                  Fine-Tuning LLMs
                  </p>
                  <p className="text-white-10 font-bold py-4">
                  Track III - Cyber Security and Digital Forensics
                  </p>
                  <p className="text-gray-300">
                  Introduction to Cybersecurity & Career Opportunities<br/>
                  IoT Testing: Understanding IoT Security Threats<br/>
                  FM Radio Hijacking: How it Works & Demonstration
                  Bad USB Keylogger with Keystroke Injection<br/>
                  SQL Injection: Attacking Live Sites & DumpingDatabases<br/>
                  Case Studies & Real-World Cyber Attacks <br/>
                  Introduction to Forensics Tools & Hardware Demonstration<br/>
                  Software Tools for Digital Forensics (Disk Imaging, Memory Analysis, etc.)

                  </p>
                </div>
              )}
            </div>

            {/* Poster Presentation Section */}
            <div className="space-y-2 py-5">
              <div className="flex justify-between items-center">
                <p className="text-xl font-bold text-[#00B3B3]">Poster Presentation</p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => toggleDetails("poster")}
                    className="bg-[#00B3B3] hover:bg-[#009999] text-white font-bold py-2 px-4 rounded"
                  >
                    Details
                  </button>
                  <button
                    className="bg-[#00B3B3] hover:bg-[#009999] text-white font-bold py-2 px-4 rounded"
                    onClick={() => window.open("https://forms.gle/oQWTBWB28RL92csR6", "_blank")}
                  >
                    Registration
                  </button>
                </div>
              </div>
              {showPosterDetails && (
                <div className="mt-2 pl-4">
                  <p className="text-gray-300">
                    Details about poster presentation will be shown here.
                  </p>
                </div>
              )}
            </div>

            {/* Last Year Event Button */}
            <div className="pt-8 border-t border-[#00B3B3] mt-8">
              <button
                onClick={() => navigate("/ncicps2025")}
                className="w-full bg-gradient-to-r from-[#00B3B3] to-[#009999] hover:opacity-90 text-white font-bold py-3 px-6 rounded transition-all text-lg"
              >
                📋 Details of NCICPS 2025 Event
              </button>
            </div>
          </div>

          {/* Right Column - Modified for larger images without borders */}
          <div className="space-y-6">
            {images.map((src, index) => (
              <div key={index} className="bg-[#0d0d2a]">
                <img
                  src={src || "/placeholder.svg"}
                  alt={`Conference Information ${index + 1}`}
                  className="w-full h-[500px] object-contain rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setSelectedImage(src)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative max-w-5xl max-h-[90vh] overflow-hidden">
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Selected conference image"
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-2"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

