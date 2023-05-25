import Image from 'next/image';

import RedPlayer from 'public/images/player-one.svg';
import YellowPlayer from 'public/images/player-two.svg';

import { TPlayer } from '@/store/players/players.reducer';
import Wins from './wins/wins.component';

type Props = {
  player: TPlayer;
};

export default function ScoreCard({ player }: Props) {
  const { id, name, wins, prevWins } = player;
  return (
    <div
      className={`relative flex flex-col items-center rounded-[20px] border-3 border-black bg-white py-2 shadow-brand ${
        id === 'red'
          ? 'md:flex-row lg:right-[calc(100%+30px)] xl:right-[calc(100%+60px)]'
          : 'md:flex-row-reverse lg:left-[calc(100%+30px)] xl:left-[calc(100%+60px)]'
      } md:justify-between md:px-11 md:py-3 lg:absolute lg:top-[calc(50%-1.5rem)] lg:-translate-y-1/2 lg:flex-col lg:px-6 lg:pb-4 lg:pt-11 lg:text-center`}
    >
      <span className="md:heading-small uppercase lg:w-24">{name}</span>
      <Wins wins={wins} prevWins={prevWins} />
      <Image
        src={id === 'red' ? RedPlayer : YellowPlayer}
        alt="Player Icon"
        className={`absolute ${
          id === 'red' ? '-left-6' : '-right-6'
        } lg:-top-7 lg:left-1/2 lg:-translate-x-1/2`}
      />
    </div>
  );
}
