import { motion, Variants } from 'framer-motion';

import Continue from './continue/continue.component';
import Quit from './quit/quit.component';
import Restart from './restart/restart.component';

export default function PauseMenu() {
  const modalVariants: Variants = {
    hidden: {
      opacity: 0,
      top: '50%',
      translateY: '-50%',
      left: '50%',
      translateX: '-50%',
      scale: 0.5,
    },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0 },
  };
  const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };
  return (
    <>
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed z-[51] w-full max-w-[335px] rounded-[40px] border-3 border-black bg-light-purple px-5 py-8 shadow-brand md:max-w-[480px] md:py-14"
      >
        <div className="flex flex-col items-center gap-6">
          <h2 className="heading-large text-white">Pause</h2>
          <div className="flex w-full flex-col gap-6">
            <Continue />
            <Restart />
            <Quit />
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed inset-0 z-50 h-full w-full bg-black bg-opacity-50"
      />
    </>
  );
}
