'use client';

import Image from 'next/image';

import RedTurnBackground from 'public/images/turn-background-red.svg';
import YellowTurnBackground from 'public/images/turn-background-yellow.svg';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  selectPlayerTurn,
  selectRedPlayer,
  selectYellowPlayer,
  selectWinner,
  selectStartingPlayer,
} from '@/store/players/players.selector';
import {
  resetWinner,
  setPlayerTurn,
  setStartingPlayer,
  toggleStartingPlayer,
} from '@/store/players/players.reducer';
import { resetBoard } from '@/store/board/board.reducer';

import PillButton from '../pill-button/pill-button.component';

export default function Turn() {
  const dispatch = useAppDispatch();

  const winner = useAppSelector(selectWinner);
  const startingPlaying = useAppSelector(selectStartingPlayer);
  const playerTurn = useAppSelector(selectPlayerTurn);
  const redPlayer = useAppSelector(selectRedPlayer);
  const yellowPlayer = useAppSelector(selectYellowPlayer);

  const playAgainHandler = () => {
    dispatch(resetBoard());
    dispatch(toggleStartingPlayer());
    dispatch(setStartingPlayer(startingPlaying === 'red' ? 'yellow' : 'red'));
    dispatch(setPlayerTurn(startingPlaying === 'red' ? 'yellow' : 'red'));
    dispatch(resetWinner());
  };

  if (!winner)
    return (
      <div className="absolute left-1/2 top-[94%] z-50 grid -translate-x-1/2">
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
      </div>
    );
  return (
    <div className="absolute left-1/2 top-[94%] z-50 grid w-[285px] -translate-x-1/2 place-content-center rounded-[20px] border-3 border-black bg-white py-4 text-center shadow-brand">
      <div>
        <p className="uppercase">Player 1</p>
        <h1 className="heading-large">Wins</h1>
        <PillButton onClickFunc={() => playAgainHandler()}>
          Play Again
        </PillButton>
      </div>
    </div>
  );
}
