"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"

export default function LastYearEventPage() {
  const navigate = useNavigate()
  const [showPaperDetails, setShowPaperDetails] = useState(false)
  const [showConclaveDetails, setShowConclaveDetails] = useState(false)
  const [showWorkshopDetails, setShowWorkshopDetails] = useState(false)
  const [showPosterDetails, setShowPosterDetails] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250213-WA0023.jpg-aiCcdaE7sGh1cpNyxbd7bG7aLzZIyo.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250213-WA0022.jpg-ErxELmiEn9nEQErRRVmRQsJk82eQxs.jpeg",
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
    <div className="min-h-screen bg-[#0a0a1a] text-white">
      <Navbar />
      <div className="min-h-screen bg-[#0a0a1a] text-white py-12">
        <div className="container mx-auto px-4 pt-20">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-2">NCICPS 2025</h2>
                <h1 className="text-4xl font-bold leading-tight mb-4">
                  2nd National Conference on Intelligent Cyber Physical Systems
                  <br />
                  <span className="text-[#00B3B3]">Previous Year Event</span>
                </h1>
              </div>
              {/* About Us Section */}
              <div className="space-y-2">
                <p className="text-gray-300">
                  The 2nd National Conference on Intelligent Cyber Physical Systems (NCICPS'25) is a premier gathering of
                researchers, practitioners, and innovators in the field of cyber-physical systems and their intelligent
                applications.
                </p>
                <p className="text-gray-300">
                  This event showcased the latest advancements and shaped the future of intelligent systems and their impact on our interconnected world.
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
                  </div>
                </div>
                {showWorkshopDetails && (
                  <div className="mt-2 pl-4">
                    <p className="text-gray-300">
                      Details about the workshops held during the previous year's event.
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
                  </div>
                </div>
                {showPosterDetails && (
                  <div className="mt-2 pl-4">
                    <p className="text-gray-300">
                      Details about poster presentations from the previous year's event.
                    </p>
                  </div>
                )}
              </div>

              {/* Back Button */}
              <div className="pt-8">
                <button
                  onClick={() => navigate("/")}
                  className="bg-gradient-to-r from-[#00B3B3] to-[#009999] hover:opacity-90 text-white font-bold py-3 px-6 rounded transition-all"
                >
                  Back to Current Event
                </button>
              </div>
            </div>

            {/* Right Column - Modified for larger images without borders */}
            <div className="space-y-6">
              {images.map((src, index) => (
                <div key={index} className="bg-[#0d0d2a]">
                  <img
                    src={src || "/placeholder.svg"}
                    alt={`Past Conference Information ${index + 1}`}
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
    </div>
  )
}
