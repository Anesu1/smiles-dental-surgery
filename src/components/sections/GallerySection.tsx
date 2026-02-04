"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { X } from "lucide-react"

// A subset of images from public/images
const galleryImages = [
    "/images/Whisk_0e891c53e3e14e4b64044b6761ade36bdr.jpeg",
    "/images/Whisk_1037e134b87547781a14fb6fae04788fdr.jpeg",
    "/images/Whisk_22b4527bf35b4eaa5cd44b9a97c8107fdr.jpeg",
    "/images/Whisk_2a25f2e53067f3b9c534e1fe7a2de025dr.jpeg",
    "/images/Whisk_2b587a554512097ae6e466ea90e6b839dr.jpeg",
    "/images/Whisk_310fa6377a2020bb0494942bae91bc92dr.jpeg",
    "/images/Whisk_31b3ae92fd6b0019cf1460620012e8dadr.jpeg",
    "/images/Whisk_388d481d793abcfa105453eda4df66c4dr.jpeg",
    "/images/Whisk_3c51834d16a653f8dce4f4d8a56895a0dr.jpeg",
    "/images/Whisk_4ea40622332075988574ed07f8b54590dr.jpeg",
    "/images/Whisk_54c577d0ce32ca5b4b346dd7631b11cfdr.jpeg",
    "/images/Whisk_5a6fb424577a7198c0c45159792ec7e1dr.jpeg",
    "/images/Whisk_7034a57d0d37c24ab93427953cd20f48dr.jpeg",
    "/images/Whisk_7537855f0704c37b0e248d0b62e5b4a3dr.jpeg",
    "/images/Whisk_761441fa31eb74d9c6c40c11e26e47fcdr.jpeg",
    "/images/Whisk_7833f9f6828ce4788964d159fb8e3157dr.jpeg",
]

export function GallerySection() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <ScrollReveal className="text-center max-w-2xl mx-auto mb-16 relative z-10">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Our Smiles Gallery
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Real results from our happy patients. See the difference compassion and expertise can make.
                    </p>
                </ScrollReveal>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {galleryImages.map((src, index) => (
                        <ScrollReveal key={index} delay={index * 0.05}>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                className="break-inside-avoid overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow bg-white relative group cursor-pointer"
                                onClick={() => setSelectedImage(src)}
                            >
                                <div className="relative w-full">
                                    {/* 
                      Note: In a real masonry grid with unknown aspect ratios, 
                      Next.js Image needs width/height or fill+parent-relative.
                      Since we're using columns, width is fluid. We'll use width-full and auto height style.
                   */}
                                    <img
                                        src={src}
                                        alt={`Gallery Image ${index + 1}`}
                                        className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                </div>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200" onClick={() => setSelectedImage(null)}>
                    <button
                        className="absolute top-4 right-4 text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X className="h-8 w-8" />
                    </button>
                    <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={selectedImage}
                            alt="Gallery Fullscreen"
                            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                        />
                    </div>
                </div>
            )}
        </section>
    )
}
