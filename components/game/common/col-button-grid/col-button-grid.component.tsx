'use client';

import { useState, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addCounter, setWinningCounters } from '@/store/board/board.reducer';
import {
  addPlayerWin,
  setWinner,
  togglePlayerTurn,
} from '@/store/players/players.reducer';
import {
  selectPlayerTurn,
  selectWinner,
} from '@/store/players/players.selector';
import { selectBoard } from '@/store/board/board.selector';

import ColButton from './col-button/col-button.component';

export default function ColButtonGrid() {
  const [focused, setFocused] = useState<number | null>(null);

  const dispatch = useAppDispatch();

  const winner = useAppSelector(selectWinner);
  const player = useAppSelector(selectPlayerTurn);
  const prevPlayer = player === 'red' ? 'yellow' : 'red';
  const board = useAppSelector(selectBoard);

  const isVerticalWin = () => {
    for (let c = 0; c < board.length; c += 1) {
      const column = board[c];
      for (let r = 0; r < column.length - 3; r += 1) {
        if (
          board[c][r] !== null &&
          board[c][r] === board[c][r + 1] &&
          board[c][r + 1] === board[c][r + 2] &&
          board[c][r + 2] === board[c][r + 3]
        ) {
          dispatch(setWinner(prevPlayer));
          dispatch(addPlayerWin(prevPlayer));
          dispatch(
            setWinningCounters([
              { column: c, row: r },
              { column: c, row: r + 1 },
              { column: c, row: r + 2 },
              { column: c, row: r + 3 },
            ])
          );
        }
      }
    }
  };

  const isHorizontalWin = () => {
    for (let c = 0; c < board.length - 3; c += 1) {
      const column = board[c];
      for (let r = 0; r < column.length; r += 1) {
        if (
          board[c][r] !== null &&
          board[c][r] === board[c + 1][r] &&
          board[c + 1][r] === board[c + 2][r] &&
          board[c + 2][r] === board[c + 3][r]
        ) {
          dispatch(setWinner(prevPlayer));
          dispatch(addPlayerWin(prevPlayer));
          dispatch(
            setWinningCounters([
              { column: c, row: r },
              { column: c + 1, row: r },
              { column: c + 2, row: r },
              { column: c + 3, row: r },
            ])
          );
        }
      }
    }
  };

  const isRightDiagonalWin = () => {
    for (let c = 0; c < board.length - 3; c += 1) {
      const column = board[c];
      for (let r = 0; r < column.length - 3; r += 1) {
        if (
          board[c][r] !== null &&
          board[c][r] === board[c + 1][r + 1] &&
          board[c + 1][r + 1] === board[c + 2][r + 2] &&
          board[c + 2][r + 2] === board[c + 3][r + 3]
        ) {
          dispatch(setWinner(prevPlayer));
          dispatch(addPlayerWin(prevPlayer));
          dispatch(
            setWinningCounters([
              { column: c, row: r },
              { column: c + 1, row: r + 1 },
              { column: c + 2, row: r + 2 },
              { column: c + 3, row: r + 3 },
            ])
          );
        }
      }
    }
  };

  const isLeftDiagonalWin = () => {
    for (let c = 6; c > 2; c -= 1) {
      for (let r = 0; r < 3; r += 1) {
        if (
          board[c][r] !== null &&
          board[c][r] === board[c - 1][r + 1] &&
          board[c - 1][r + 1] === board[c - 2][r + 2] &&
          board[c - 2][r + 2] === board[c - 3][r + 3]
        ) {
          dispatch(setWinner(prevPlayer));
          dispatch(addPlayerWin(prevPlayer));
          dispatch(
            setWinningCounters([
              { column: c, row: r },
              { column: c - 1, row: r + 1 },
              { column: c - 2, row: r + 2 },
              { column: c - 3, row: r + 3 },
            ])
          );
        }
      }
    }
  };

  const checkWin = () => {
    let counterCount = 0;
    for (let i = 0; i < board.length; i += 1) {
      const column = board[i];
      for (let j = 0; j < column.length; j += 1) {
        const element = column[j];
        if (element === prevPlayer) counterCount += 1;
      }
    }
    if (counterCount >= 4) {
      isVerticalWin();
      isHorizontalWin();
      isRightDiagonalWin();
      isLeftDiagonalWin();
    }
  };

  const onClickHandler = (column: number) => {
    for (let index = 0; index < board[column].length; index += 1) {
      const el = board[column][index];
      if (el === null) {
        dispatch(addCounter({ player, column, row: index }));
        dispatch(togglePlayerTurn());
        return;
      }
    }
  };

  useEffect(() => {
    checkWin();
  }, [board]);

  return (
    <div className="absolute inset-0 z-40 grid grid-cols-7 gap-x-2 px-2 pb-8 pt-2 md:gap-x-4 md:px-4 md:pb-14 md:pt-4">
      {[...Array(7)].map((value, index) => (
        <ColButton
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          index={index}
          onClickHandler={onClickHandler}
          player={player}
          winner={winner}
          focused={focused}
          setFocused={setFocused}
        />
      ))}
    </div>
  );
}
