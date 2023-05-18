import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TPlayers } from '../players/players.reducer';

export type TWinnerCounter = {
  column: number;
  row: number;
};

type TWinnerCounters = [
  TWinnerCounter,
  TWinnerCounter,
  TWinnerCounter,
  TWinnerCounter
];

const initWinningCounters: TWinnerCounters = [
  { column: 0, row: 0 },
  { column: 0, row: 0 },
  { column: 0, row: 0 },
  { column: 0, row: 0 },
];

export type TCounter = TPlayers | null;

type Column = [TCounter, TCounter, TCounter, TCounter, TCounter, TCounter];

type Board = [Column, Column, Column, Column, Column, Column, Column];

type InitialState = {
  board: Board;
  winningCounters: TWinnerCounters;
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
  winningCounters: initWinningCounters,
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
    setWinningCounters: (state, action: PayloadAction<TWinnerCounters>) => {
      return { ...state, winningCounters: action.payload };
    },
  },
});

export const { resetBoard, addCounter, setWinningCounters } =
  boardSlice.actions;

export const boardReducer = boardSlice.reducer;
