'use client';

import Image from 'next/image';

import { useAppDispatch } from '@/store/hooks';
import {
  setStartingPlayer,
  setPlayerTurn,
  resetPlayerWins,
  resetWinner,
} from '@/store/players/players.reducer';
import {
  resetBoard,
  resetCountdown,
  toggleIsPaused,
  toggleIsRunning,
} from '@/store/board/board.reducer';

import Logo from 'public/images/logo.svg';
import PillButton from '../pill-button/pill-button.component';

export default function Header() {
  const dispatch = useAppDispatch();

  const menuOnClickHandler = () => {
    dispatch(toggleIsPaused());
    dispatch(toggleIsRunning());
  };

  const restartOnClickHandler = () => {
    dispatch(resetBoard());
    dispatch(resetPlayerWins());
    dispatch(setStartingPlayer('red'));
    dispatch(setPlayerTurn('red'));
    dispatch(resetCountdown());
    dispatch(resetWinner());
  };
  return (
    <header className="flex items-center justify-between">
      <PillButton onClickFunc={() => menuOnClickHandler()}>Menu</PillButton>
      <Image src={Logo} alt="Logo" />
      <PillButton onClickFunc={() => restartOnClickHandler()}>
        Restart
      </PillButton>
    </header>
  );
}
