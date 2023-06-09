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
      className={`absolute -bottom-full left-1/2 z-0 h-full w-screen -translate-x-1/2 rounded-t-[60px] transition-colors delay-1000 lg:-bottom-[calc(100%-2.5rem)] ${getBgColor()}`}
    />
  );
}
