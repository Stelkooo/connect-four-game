'use client';

import { useAppSelector } from '@/store/hooks';
import { selectBoard } from '@/store/board/board.selector';
import Counter from './counter/counter.component';

export default function CounterGrid() {
  const board = useAppSelector(selectBoard);
  return (
    <div className="absolute inset-0 z-20 grid grid-cols-7 grid-rows-6 gap-x-2 gap-y-[6px] px-2 pb-7 pt-2 md:gap-x-4 md:gap-y-4 md:px-4 md:pb-14 md:pt-4">
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
    </div>
  );
}
