
import { useEffect, useState } from 'react';

const ShootingStars = () => {
  const [stars, setStars] = useState<Array<{ id: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    const createShootingStar = () => {
      const id = Date.now() + Math.random();
      const delay = Math.random() * 8000; // Random delay up to 8 seconds
      const duration = 2000 + Math.random() * 2000; // Duration between 2-4 seconds
      
      setStars(prev => [...prev, { id, delay, duration }]);
      
      // Remove the star after animation
      setTimeout(() => {
        setStars(prev => prev.filter(star => star.id !== id));
      }, delay + duration);
    };

    // Create shooting stars at random intervals
    const interval = setInterval(() => {
      if (Math.random() < 0.3) { // 30% chance every interval
        createShootingStar();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute w-1 h-1 bg-white rounded-full opacity-0"
          style={{
            top: `${Math.random() * 30}%`,
            left: `${Math.random() * 100}%`,
            animation: `shooting ${star.duration}ms linear ${star.delay}ms forwards`,
            boxShadow: '0 0 6px #fff, 0 0 12px rgba(33, 150, 243, 0.8)',
          }}
        />
      ))}
    </div>
  );
};

export default ShootingStars;
