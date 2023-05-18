'use client';

import { useAppSelector } from '@/store/hooks';
import { selectWinner } from '@/store/players/players.selector';

export default function BackgroundHighlight() {
  const winner = useAppSelector(selectWinner);

  const getBgColor = () => {
    switch (winner) {
      case 'red':
        return 'bg-red';
      case 'yellow':
        return 'bg-yellow';
      default:
        return 'bg-purple';
    }
  };
  return (
    <div
      className={`absolute -bottom-[100%] left-1/2 z-0 h-full w-screen -translate-x-1/2 rounded-t-[60px] ${getBgColor()}`}
    />
  );
}
