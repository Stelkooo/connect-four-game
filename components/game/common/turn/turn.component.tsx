'use client';

import { AnimatePresence } from 'framer-motion';

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

import PlayAgain from './play-again/play-again.component';
import PlayerTurn from './player-turn/player-turn.component';

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

  return (
    <AnimatePresence>
      {winner ? <PlayAgain playAgainHandler={playAgainHandler} /> : null}
      {!winner ? (
        <PlayerTurn
          playerTurn={playerTurn}
          redPlayer={redPlayer}
          yellowPlayer={yellowPlayer}
        />
      ) : null}
    </AnimatePresence>
  );
}
