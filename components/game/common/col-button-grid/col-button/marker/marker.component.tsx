import { motion } from 'framer-motion';

import { TPlayers } from '@/store/players/players.reducer';
import Image from 'next/image';

import RedMarker from 'public/images/marker-red.svg';
import YellowMarker from 'public/images/marker-yellow.svg';

type Props = {
  player: TPlayers;
};

export default function Marker({ player }: Props) {
  const MotionImage = motion(Image);
  return (
    <MotionImage
      src={player === 'red' ? RedMarker : YellowMarker}
      alt={`${player === 'red' ? 'Red' : 'Yellow'} Marker`}
      className="absolute -top-11 md:-top-12 md:left-4 lg:-top-14"
      layoutId="marker"
    />
  );
}
