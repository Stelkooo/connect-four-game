import Image from 'next/image';

import { motion } from 'framer-motion';

import RedTurnBackground from 'public/images/turn-background-red.svg';
import YellowTurnBackground from 'public/images/turn-background-yellow.svg';
import { TPlayer, TPlayers } from '@/store/players/players.reducer';

type Props = {
  playerTurn: TPlayers;
  redPlayer: TPlayer;
  yellowPlayer: TPlayer;
};

export default function PlayerTurn({
  playerTurn,
  redPlayer,
  yellowPlayer,
}: Props) {
  return (
    <motion.div
      className="absolute left-1/2 top-[94%] z-50 grid -translate-x-1/2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1 } }}
      exit={{ opacity: 0, y: '100vh' }}
    >
      <Image
        src={playerTurn === 'red' ? RedTurnBackground : YellowTurnBackground}
        alt=""
      />
      <div className="absolute top-9 w-full text-center md:top-10">
        <p className="uppercase">
          {playerTurn === 'red' ? redPlayer.name : yellowPlayer.name}&apos;s
          Turn
        </p>
        <h1 className="heading-large lowercase">14s</h1>
      </div>
    </motion.div>
  );
}
