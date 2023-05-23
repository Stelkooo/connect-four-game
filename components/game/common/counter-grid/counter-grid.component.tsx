'use client';

import { AnimatePresence } from 'framer-motion';

import { useAppSelector } from '@/store/hooks';
import {
  selectBoard,
  selectWinningCounters,
} from '@/store/board/board.selector';
import { selectWinner } from '@/store/players/players.selector';

import Counter from './counter/counter.component';
import WinningCounters from './counter/winning-counters.component';

export default function CounterGrid() {
  const board = useAppSelector(selectBoard);
  const winningCounters = useAppSelector(selectWinningCounters);
  const winner = useAppSelector(selectWinner);
  return (
    <div className="absolute inset-0 z-20 grid grid-cols-7 grid-rows-6 gap-x-2 gap-y-[6px] px-2 pb-7 pt-2 md:gap-x-4 md:gap-y-4 md:px-4 md:pb-14 md:pt-4">
      <AnimatePresence>
        {board.map((col, colIndex) =>
          col.map((row, rowIndex) =>
            row !== null ? (
              <Counter
                player={row}
                colIndex={colIndex}
                rowIndex={rowIndex}
                key={`${row + colIndex + rowIndex}`}
              />
            ) : null
          )
        )}
        {winner
          ? winningCounters.map((counter) => (
              <WinningCounters
                counter={counter}
                key={`winning-counter-${counter.column}-${counter.row}`}
              />
            ))
          : null}
      </AnimatePresence>
    </div>
  );
}
