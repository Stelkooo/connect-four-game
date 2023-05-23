'use client';

import { motion } from 'framer-motion';

import PillButton from '../../pill-button/pill-button.component';

type Props = {
  playAgainHandler: () => void;
};

export default function PlayAgain({ playAgainHandler }: Props) {
  return (
    <motion.div
      className="absolute left-1/2 top-[94%] z-50 grid w-[285px] -translate-x-1/2 place-content-center rounded-[20px] border-3 border-black bg-white py-4 text-center shadow-brand"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1 } }}
      exit={{ opacity: 0 }}
    >
      <div>
        <p className="uppercase">Player 1</p>
        <h1 className="heading-large">Wins</h1>
        <PillButton onClickFunc={() => playAgainHandler()}>
          Play Again
        </PillButton>
      </div>
    </motion.div>
  );
}
