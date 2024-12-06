import React from 'react';
import { Heart } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';

export const Header = () => {
  return (
    <header className="relative h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552')",
          filter: 'brightness(0.7)'
        }}
      />
      <div className="relative text-center text-white z-10 space-y-8">
        <Heart className="mx-auto mb-6 w-16 h-16" />
        <h1 className="text-6xl font-serif mb-4">Josefina & Pipo</h1>
        <p className="text-xl">Nos casamos!</p>
        <p className="text-2xl font-serif">October 11, 2025</p>
        <div className="mt-12">
          <CountdownTimer />
        </div>
      </div>
    </header>
  );
};