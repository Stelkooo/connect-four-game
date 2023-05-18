import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const selectBoardReducer = (state: RootState) => state.board;

export const selectBoard = createSelector(
  [selectBoardReducer],
  (board) => board.board
);

export const selectBoardColumnByIndex = createSelector(
  [selectBoardReducer, (state, index) => index],
  (board, index) => board.board[index]
);
