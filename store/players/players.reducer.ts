import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type TPlayers = 'red' | 'yellow';

export type TPlayer = {
  id: TPlayers;
  name: string;
  wins: number;
};

type InitialState = {
  redPlayer: TPlayer;
  yellowPlayer: TPlayer;
  playerTurn: TPlayers;
  startingPlayer: TPlayers;
  winner: TPlayers | null;
};

const PLAYERS_INITIAL_VALUE: InitialState = {
  redPlayer: {
    id: 'red',
    name: 'Player 1',
    wins: 0,
  },
  yellowPlayer: {
    id: 'yellow',
    name: 'Player 2',
    wins: 0,
  },
  playerTurn: 'red',
  startingPlayer: 'red',
  winner: null,
};

export const playersSlice = createSlice({
  name: 'players',
  initialState: PLAYERS_INITIAL_VALUE,
  reducers: {
    togglePlayerTurn: (state) => {
      return {
        ...state,
        playerTurn: state.playerTurn === 'red' ? 'yellow' : 'red',
      };
    },
    setPlayerTurn: (state, action: PayloadAction<TPlayers>) => {
      return { ...state, playerTurn: action.payload };
    },
    toggleStartingPlayer: (state) => {
      return {
        ...state,
        startingPlayer: state.startingPlayer === 'red' ? 'yellow' : 'red',
      };
    },
    setStartingPlayer: (state, action: PayloadAction<TPlayers>) => {
      return { ...state, startingPlayer: action.payload };
    },
    addPlayerWin: (state, action: PayloadAction<TPlayers>) => {
      return {
        ...state,
        redPlayer: {
          ...state.redPlayer,
          wins:
            action.payload === 'red'
              ? state.redPlayer.wins + 1
              : state.redPlayer.wins,
        },
        yellowPlayer: {
          ...state.yellowPlayer,
          wins:
            action.payload === 'yellow'
              ? state.yellowPlayer.wins + 1
              : state.yellowPlayer.wins,
        },
      };
    },
    resetPlayerWins: (state) => {
      return {
        ...state,
        redPlayer: { ...state.redPlayer, wins: 0 },
        yellowPlayer: { ...state.yellowPlayer, wins: 0 },
      };
    },
    setWinner: (state, action: PayloadAction<TPlayers>) => {
      return {
        ...state,
        winner: action.payload,
      };
    },
    resetWinner: (state) => {
      return {
        ...state,
        winner: null,
      };
    },
  },
});

export const {
  togglePlayerTurn,
  setPlayerTurn,
  toggleStartingPlayer,
  setStartingPlayer,
  addPlayerWin,
  resetPlayerWins,
  setWinner,
  resetWinner,
} = playersSlice.actions;

export const playersReducer = playersSlice.reducer;
