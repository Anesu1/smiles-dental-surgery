"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { X, ZoomIn, Camera } from "lucide-react";
import { cn } from "@/lib/utils";

// A subset of images from public/images - curated for best visual impact
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
];

export function GallerySection() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section className="py-32 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-dental-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <ScrollReveal className="text-center max-w-2xl mx-auto mb-20 relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dental-100/50 text-dental-600 text-sm font-semibold mb-6">
                        <Camera className="h-4 w-4" />
                        Our Results
                    </div>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-dental-950 mb-6">
                        Real Smiles, <span className="text-dental-500">Real Life</span>
                    </h2>
                    <p className="text-xl text-dental-700/70 font-light">
                        See the transformative power of compassionate dental care.
                    </p>
                </ScrollReveal>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                    {galleryImages.map((src, index) => (
                        <ScrollReveal key={index} delay={index * 0.05} className={cn(
                            "relative aspect-square overflow-hidden rounded-2xl cursor-pointer group",
                            index === 1 || index === 5 ? "md:row-span-2 md:aspect-[1/2]" : ""
                        )}>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="w-full h-full relative"
                                onClick={() => setSelectedImage(src)}
                            >
                                <img
                                    src={src}
                                    alt={`Gallery Image ${index + 1}`}
                                    className="w-full h-full object-cover transition-all duration-700 grayscale-[0.2] group-hover:grayscale-0"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-dental-900/0 group-hover:bg-dental-900/30 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <div className="h-14 w-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                                        <ZoomIn className="h-6 w-6" />
                                    </div>
                                </div>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-dental-950/95 backdrop-blur-md p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 transition-colors z-50"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="h-10 w-10" />
                        </button>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center p-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage}
                                alt="Gallery Fullscreen"
                                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl shadow-black/50"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
