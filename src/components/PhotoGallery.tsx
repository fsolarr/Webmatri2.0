import React from 'react';
import { motion } from 'framer-motion';

const photos = [
  'https://images.unsplash.com/photo-1519741497674-611481863552',
  'https://images.unsplash.com/photo-1522673607200-164d1b6ce486',
  'https://images.unsplash.com/photo-1529634456207-3badfa8ac68e',
  'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2',
  'https://images.unsplash.com/photo-1537907690979-ee8e01276184',
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed'
];

export const PhotoGallery = () => {
  return (
    <section className="py-20 px-4 bg-white" id="gallery">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif text-center mb-12">Our Story</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={photo}
                alt={`Couple photo ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};