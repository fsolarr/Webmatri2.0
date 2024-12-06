import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { gifts } from '../data/gifts';
import { bankAccounts } from '../data/bankAccounts';

export const GiftRegistry = () => {
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

  return (
    <section className="py-20 px-4 bg-gray-50" id="registry">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif text-center mb-12">Gift Registry</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gifts.map((gift) => (
            <motion.div
              key={gift.id}
              className={`relative h-96 cursor-pointer`}
              onClick={() => setFlippedCard(flippedCard === gift.id ? null : gift.id)}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="absolute w-full h-full"
                initial={false}
                animate={{ rotateY: flippedCard === gift.id ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute w-full h-full bg-white rounded-lg shadow-lg overflow-hidden">
                  <img src={gift.image} alt={gift.name} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{gift.name}</h3>
                    <p className="text-gray-600 mb-4">{gift.description}</p>
                    <p className="text-2xl font-bold text-emerald-600">${gift.price}</p>
                    <button className="mt-4 bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-colors">
                      Gift
                    </button>
                  </div>
                </div>
                <div 
                  className="absolute w-full h-full bg-white rounded-lg shadow-lg p-6 [transform:rotateY(180deg)]"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <h3 className="text-xl font-semibold mb-6">Bank Transfer Details</h3>
                  {bankAccounts.map((account, index) => (
                    <div key={index} className="mb-4">
                      <p className="font-semibold">{account.bank}</p>
                      <p>{account.accountHolder}</p>
                      <p className="font-mono">{account.accountNumber}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};