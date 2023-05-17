'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import PlayerVsPlayer from 'public/images/player-vs-player.svg';

import Button from '../button/button.component';

export default function MainMenu() {
  const router = useRouter();

  const playVsPlayerHandler = () => router.push('/game');

  const gameRulesHandler = () => router.push('/rules');
  return (
    <div className="relative grid w-full gap-y-6">
      <Button color="yellow" onClickFunc={() => playVsPlayerHandler()}>
        <span>Play vs Player</span>
        <Image src={PlayerVsPlayer} alt="Player Vs Player Icon" />
      </Button>
      <Button color="white" onClickFunc={() => gameRulesHandler()}>
        <span>Game Rules</span>
      </Button>
    </div>
  );
}
