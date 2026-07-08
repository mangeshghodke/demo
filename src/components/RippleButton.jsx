import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function RippleButton({ children, className = '', onClick }) {
  const [ripples, setRipples] = useState([]);
  const btnRef = useRef(null);
  const idRef = useRef(0);

  const handleClick = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = idRef.current++;
    setRipples(prev => [...prev, { x, y, id }]);
    setTimeout(() => setRipples(prev => prev.filter(r => r.id !== id)), 600);
    onClick?.();
  };

  return (
    <button
      ref={btnRef}
      onClick={handleClick}
      className={`relative overflow-hidden ${className}`}
    >
      {children}
      <AnimatePresence>
        {ripples.map(r => (
          <motion.span
            key={r.id}
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="pointer-events-none absolute rounded-full bg-white/30"
            style={{ left: r.x - 10, top: r.y - 10, width: 20, height: 20 }}
          />
        ))}
      </AnimatePresence>
    </button>
  );
}
