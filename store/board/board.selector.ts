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

export const selectCountdown = createSelector(
  [selectBoardReducer],
  (board) => board.countdown
);

export const selectIsRunning = createSelector(
  [selectBoardReducer],
  (board) => board.isRunning
);

export const selectIsPaused = createSelector(
  [selectBoardReducer],
  (board) => board.isPaused
);
