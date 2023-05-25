'use client';

import Image from 'next/image';

import { useState, useEffect } from 'react';

import { motion } from 'framer-motion';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  addRandomCounter,
  minusCountdown,
  resetCountdown,
  toggleIsRunning,
} from '@/store/board/board.reducer';
import {
  TPlayer,
  TPlayers,
  togglePlayerTurn,
} from '@/store/players/players.reducer';
import { selectCountdown, selectIsRunning } from '@/store/board/board.selector';

import RedTurnBackground from 'public/images/turn-background-red.svg';
import YellowTurnBackground from 'public/images/turn-background-yellow.svg';

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
  const dispatch = useAppDispatch();

  const countdown = useAppSelector(selectCountdown);
  const isRunning = useAppSelector(selectIsRunning);

  useEffect(() => {
    let interval: NodeJS.Timer;

    if (isRunning) {
      interval = setInterval(() => dispatch(minusCountdown()), 1000);
    }

    if (countdown === 0) {
      dispatch(addRandomCounter(playerTurn));
      dispatch(togglePlayerTurn());
      dispatch(resetCountdown());
    }

    return () => clearInterval(interval);
  }, [countdown, isRunning]);

  useEffect(() => {
    dispatch(resetCountdown());
  }, [dispatch, playerTurn]);
  return (
    <motion.div
      className="absolute left-1/2 top-[94%] z-50 grid -translate-x-1/2 lg:top-[93%]"
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1, transition: { delay: 1 } }}
      // exit={{ opacity: 0, y: '100vh' }}
    >
      <Image
        src={playerTurn === 'red' ? RedTurnBackground : YellowTurnBackground}
        alt=""
      />
      <div className="absolute top-9 w-full text-center md:top-10">
        <p
          style={{ color: playerTurn === 'red' ? 'white' : 'black' }}
          className="uppercase"
        >
          {playerTurn === 'red' ? redPlayer.name : yellowPlayer.name}&apos;s
          Turn
        </p>
        <h1
          style={{ color: playerTurn === 'red' ? 'white' : 'black' }}
          className="heading-large lowercase"
        >
          {countdown}s
        </h1>
      </div>
    </motion.div>
  );
}
