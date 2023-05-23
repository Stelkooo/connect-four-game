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
  countdown: number;
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
  countdown: 15,
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
    addRandomCounter: (state, action: PayloadAction<TPlayers>) => {
      // adds a counter
      // picks random column
      // checks to see if empty space
      // if not runs again
      let randomSlot: { column: number; row: number } = { column: 0, row: 0 };
      let randomSlotNotFound = true;
      while (randomSlotNotFound) {
        const randomColumn = Math.floor(Math.random() * 7);
        for (
          let index = 0;
          index < state.board[randomColumn].length;
          index += 1
        ) {
          const row = state.board[randomColumn][index];
          if (row === null) {
            randomSlot = { column: randomColumn, row: index };
            randomSlotNotFound = false;
            break;
          }
        }
      }
      const modifiedBoard = state.board.map((col, colIndex) =>
        colIndex === randomSlot.column
          ? col.map((row, rowIndex) =>
              rowIndex === randomSlot.row ? action.payload : row
            )
          : col
      );
      return {
        ...state,
        board: modifiedBoard as Board,
      };
    },
    setWinningCounters: (state, action: PayloadAction<TWinnerCounters>) => {
      return { ...state, winningCounters: action.payload };
    },
    minusCountdown: (state) => {
      return { ...state, countdown: state.countdown - 1 };
    },
    resetCountdown: (state) => {
      return { ...state, countdown: 15 };
    },
  },
});

export const {
  resetBoard,
  addCounter,
  addRandomCounter,
  setWinningCounters,
  minusCountdown,
  resetCountdown,
} = boardSlice.actions;

export const boardReducer = boardSlice.reducer;
