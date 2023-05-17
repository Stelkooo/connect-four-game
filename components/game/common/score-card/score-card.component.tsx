import Image from 'next/image';

import PlayerOne from 'public/images/player-one.svg';
import PlayerTwo from 'public/images/player-two.svg';

type Props = {
  name: string;
  wins: number;
  playerNumber: 'one' | 'two';
};

export default function ScoreCard({ name, wins, playerNumber }: Props) {
  return (
    <div
      className={`relative flex flex-col items-center rounded-[20px] border-3 border-black bg-white py-2 shadow-brand ${
        playerNumber === 'one'
          ? 'md:flex-row lg:right-[calc(100%+30px)] xl:right-[calc(100%+60px)]'
          : 'md:flex-row-reverse lg:left-[calc(100%+30px)] xl:left-[calc(100%+60px)]'
      } md:justify-between md:px-11 md:py-3 lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:flex-col lg:px-6 lg:pb-4 lg:pt-11 lg:text-center`}
    >
      <span className="md:heading-small uppercase lg:w-24">{name}</span>
      <span className="md:heading-large text-[2rem]/10 font-bold">{wins}</span>
      <Image
        src={playerNumber === 'one' ? PlayerOne : PlayerTwo}
        alt="Player Icon"
        className={`absolute ${
          playerNumber === 'one' ? '-left-6' : '-right-6'
        } lg:-top-7 lg:left-1/2 lg:-translate-x-1/2`}
      />
    </div>
  );
}
