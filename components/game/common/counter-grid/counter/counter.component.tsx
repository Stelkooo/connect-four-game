'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';

import { TCounter } from '@/store/board/board.reducer';

import CounterRedSmall from 'public/images/counter-red-small.svg';
import CounterYellowSmall from 'public/images/counter-yellow-small.svg';

type Props = {
  player: TCounter;
  colIndex: number;
  rowIndex: number;
};

export default function Counter({ player, colIndex, rowIndex }: Props) {
  return (
    <motion.picture
      style={{
        gridRowStart: 6 - rowIndex,
        gridColumnStart: 1 + colIndex,
      }}
      initial={{ opacity: 0, y: '-100vh' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'tween', duration: 1 }}
      exit={{ opacity: 0, y: '100vh' }}
    >
      <source
        media="(min-width:768px)"
        srcSet={
          player === 'red'
            ? 'images/counter-red-large.svg'
            : 'images/counter-yellow-large.svg'
        }
      />
      <Image
        src={player === 'red' ? CounterRedSmall : CounterYellowSmall}
        alt={`${player} counter at column ${colIndex}, row ${rowIndex}`}
        className="w-full"
      />
    </motion.picture>
  );
}
