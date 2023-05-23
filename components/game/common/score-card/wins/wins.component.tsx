import { useEffect, useRef } from 'react';
import { animate, useMotionValue, useTransform, motion } from 'framer-motion';

type Props = {
  wins: number;
  prevWins: number;
};

export default function Wins({ wins, prevWins }: Props) {
  const spanRef = useRef<HTMLSpanElement>(null);

  const count = useMotionValue(prevWins);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    animate(count, wins, { duration: 1, delay: 1 });
  }, [count, wins]);

  return (
    <motion.span
      ref={spanRef}
      className="md:heading-large text-[2rem]/10 font-bold"
    >
      {rounded}
    </motion.span>
  );
}
