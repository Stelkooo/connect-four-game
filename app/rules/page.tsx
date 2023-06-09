'use client';

import { Variants, motion } from 'framer-motion';

import HowToPlay from '@/components/rules/common/how-to-play/how-to-play.component';
import IconCheck from '@/components/rules/common/icon-check/icon-check.component';
import Objective from '@/components/rules/common/objective/objective.component';

export default function Rules() {
  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };
  return (
    <main className="grid h-screen place-content-center bg-light-purple">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative grid w-full max-w-xs gap-y-8 rounded-[40px] border-3 border-black bg-white px-5 pb-14 pt-8 shadow-brand sm:max-w-lg"
      >
        <h1 className="heading-large text-center">Rules</h1>
        <div className="grid gap-y-8">
          <Objective />
          <HowToPlay />
        </div>
        <IconCheck />
      </motion.div>
    </main>
  );
}
