'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Container, ImageWithSkeleton } from '@/components/ui';

const projects = [
  {
    id: 1,
    title: 'FitZone Gym',
    description: 'A modern fitness website with class booking and membership signups that helped increase gym memberships by 40%.',
    images: [
      'https://www.framer.com/creators-assets/_next/image/?url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F51753%2Ffitnix-xF0mBI3qTywNsUW01J4g0TdCTACfXf&w=3840&q=100',
      'https://www.framer.com/creators-assets/_next/image/?url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F51753%2Ffitnix-D1gZGwygpSFWBMjosmmGdGYn5S62GF&w=3840&q=100',
      'https://www.framer.com/creators-assets/_next/image/?url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F51753%2Ffitnix-IBdRD90jacDaxNMBEU88MZGX5OUDim&w=3840&q=100',
      'https://www.framer.com/creators-assets/_next/image/?url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F51753%2Ffitnix-zYGvqYj9NZ2eVAktr1ms0W3QWm0kK5&w=3840&q=100',
    ],
  },
  {
    id: 2,
    title: 'Refit Studio',
    description: 'A sleek fitness studio website with seamless booking flow that boosted online class registrations by 65%.',
    images: [
      'https://www.framer.com/creators-assets/_next/image/?url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F50281%2Frefit-KHrqxTg7MUBBlJKeWxfwRIH2EA4T49&w=3840&q=100',
      'https://www.framer.com/creators-assets/_next/image/?url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F50281%2Frefit-jFrdMXOtfjaCZ8qUDCq7cosP3mAG76&w=3840&q=100',
      'https://www.framer.com/creators-assets/_next/image/?url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F50281%2Frefit-CZL8x96QK6H2vV4s3VflANC4q05XgL&w=3840&q=100',
      'https://www.framer.com/creators-assets/_next/image/?url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F50281%2Frefit-ZBDI2WcIX6jq3hxfrMKMkjFBGCu7yE&w=3840&q=100',
    ],
  },
  {
    id: 3,
    title: 'Landeros Real Estate',
    description: 'A premium real estate website with property listings and virtual tours that increased lead generation by 80%.',
    images: [
      'https://www.framer.com/creators-assets/_next/image/?url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F49159%2Flanderos-ODNSG15vAr3RCcYWLd4M0BtDBRPjRo&w=3840&q=100',
      'https://www.framer.com/creators-assets/_next/image/?url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F49159%2Flanderos-AuXP0tlMwG3YH6LGJzUErdPVbwDjCK&w=3840&q=100',
      'https://www.framer.com/creators-assets/_next/image/?url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F49159%2Flanderos-t3lhdCYP11HPU1LRgt1Iiw9HxGp4Hu&w=3840&q=100',
      'https://www.framer.com/creators-assets/_next/image/?url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F49159%2Flanderos-KJqojzoxpyIHpssA4T1WJWdLFrIHEH&w=3840&q=100',
    ],
  },
  {
    id: 4,
    title: 'Funnelz Marketing',
    description: 'A high-converting marketing funnel website designed to maximize lead capture and drive sales conversions by 120%.',
    images: [
      'https://www.framer.com/creators-assets/_next/image/?url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F52977%2Ffunnelz-E7hffkng4wGtwHbJKgpDjDND2LFwGq&w=3840&q=100',
      'https://www.framer.com/creators-assets/_next/image/?url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F52977%2Ffunnelz-9ubIqnI9VuKzq0wPGxAl5I7cGNHtcc&w=3840&q=100',
      'https://www.framer.com/creators-assets/_next/image/?url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F52977%2Ffunnelz-8uhfYqKef0Xqh8NKtkx89YcBKbYDjm&w=3840&q=100',
    ],
  },
];

export default function Work() {
  const [activeProject, setActiveProject] = useState<typeof projects[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (project: typeof projects[0]) => {
    setActiveProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setActiveProject(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (activeProject) {
      setCurrentImageIndex((prev) => 
        prev === activeProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (activeProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? activeProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="work" className="bg-neutral-50 py-20 sm:py-28 lg:py-32">
      <Container>
        {/* Section Header */}
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium text-neutral-500"
          >
            Sample Projects
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
          >
            See what we can build for you
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-4 max-w-xl text-neutral-600"
          >
            Click on a project to view the full gallery
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid gap-8 sm:mt-16 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => openLightbox(project)}
              className="group relative cursor-pointer"
            >
              {/* Project Thumbnail */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:scale-[1.02]">
                <ImageWithSkeleton
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/40">
                  <div className="flex flex-col items-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="rounded-full bg-white p-4 shadow-lg">
                      <svg
                        className="h-6 w-6 text-neutral-900"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-white">View Gallery</span>
                  </div>
                </div>

                {/* Image Count Badge */}
                <div className="absolute bottom-4 right-4 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  {project.images.length} images
                </div>
              </div>

              {/* Project Info */}
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-neutral-900">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-neutral-600">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center text-sm text-neutral-500"
        >
          * Concept demonstrations. Your website will be custom-designed for your needs.
        </motion.p>
      </Container>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Project Title */}
            <div className="absolute left-4 top-4 z-10">
              <h3 className="text-lg font-semibold text-white">{activeProject.title}</h3>
              <p className="text-sm text-white/70">{currentImageIndex + 1} / {activeProject.images.length}</p>
            </div>

            {/* Main Image */}
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative h-[80vh] w-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              <ImageWithSkeleton
                src={activeProject.images[currentImageIndex]}
                alt={`${activeProject.title} - Image ${currentImageIndex + 1}`}
                fill
                className="object-contain"
                unoptimized
              />
            </motion.div>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            {/* Thumbnail Strip */}
            <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
              {activeProject.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                  className={`relative h-16 w-24 overflow-hidden rounded-lg transition-all ${
                    idx === currentImageIndex 
                      ? 'ring-2 ring-white ring-offset-2 ring-offset-black/50' 
                      : 'opacity-50 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
