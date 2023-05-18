import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const selectBoardReducer = (state: RootState) => state.board;

export const selectBoard = createSelector(
  [selectBoardReducer],
  (board) => board.board
);

export const selectWinningCounters = createSelector(
  [selectBoardReducer],
  (board) => board.winningCounters
);
