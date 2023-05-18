import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TPlayers } from '../players/players.reducer';

export type TCounter = TPlayers | null;

type Column = [TCounter, TCounter, TCounter, TCounter, TCounter, TCounter];

type Board = [Column, Column, Column, Column, Column, Column, Column];

type InitialState = {
  board: Board;
};

const initBoard: Board = [
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
];

const BOARD_INITIAL_VALUE: InitialState = {
  board: initBoard,
};

export const boardSlice = createSlice({
  name: 'board',
  initialState: BOARD_INITIAL_VALUE,
  reducers: {
    resetBoard: (state) => {
      return {
        ...state,
        board: initBoard,
      };
    },
    addCounter: (
      state,
      action: PayloadAction<{ player: TPlayers; column: number; row: number }>
    ) => {
      const newBoard = state.board.map((col, colIndex) =>
        colIndex === action.payload.column
          ? col.map((row, rowIndex) =>
              rowIndex === action.payload.row ? action.payload.player : row
            )
          : col
      );
      return {
        ...state,
        board: newBoard as Board,
      };
    },
  },
});

export const { resetBoard, addCounter } = boardSlice.actions;

export const boardReducer = boardSlice.reducer;
