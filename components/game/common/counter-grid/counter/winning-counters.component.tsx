'use client';

import { motion } from 'framer-motion';

import { TWinnerCounter } from '@/store/board/board.reducer';

type Props = {
  counter: TWinnerCounter;
};

export default function WinningCounters({ counter: { column, row } }: Props) {
  return (
    <motion.div
      style={{
        gridRowStart: 6 - row,
        gridColumnStart: 1 + column,
      }}
      className="z-50 h-5 w-5 place-self-center rounded-full border-[6px] border-white md:h-8 md:w-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1 } }}
      exit={{ opacity: 0 }}
    />
  );
}
