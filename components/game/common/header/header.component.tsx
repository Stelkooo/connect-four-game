'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { useAppDispatch } from '@/store/hooks';
import {
  setStartingPlayer,
  setPlayerTurn,
  resetPlayerWins,
} from '@/store/players/players.reducer';
import { resetBoard } from '@/store/board/board.reducer';

import Logo from 'public/images/logo.svg';
import PillButton from '../pill-button/pill-button.component';

export default function Header() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const menuOnClickHandler = () => {
    router.push('');
  };

  const restartOnClickHandler = () => {
    dispatch(resetBoard());
    dispatch(resetPlayerWins());
    dispatch(setStartingPlayer('red'));
    dispatch(setPlayerTurn('red'));
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
