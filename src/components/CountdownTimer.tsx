import React, { useState, useEffect } from 'react';
import { TimeLeft } from '../types';

const calculateTimeLeft = (): TimeLeft => {
  const weddingDate = new Date('2025-10-11T00:00:00');
  const difference = weddingDate.getTime() - new Date().getTime();

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center space-x-4 md:space-x-8">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 md:p-4">
            <div className="text-2xl md:text-4xl font-bold">{value}</div>
            <div className="text-xs md:text-sm mt-1 capitalize">{unit}</div>
          </div>
        </div>
      ))}
    </div>
  );
};