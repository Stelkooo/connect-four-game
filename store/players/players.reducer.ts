import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type TPlayers = 'red' | 'yellow';

export type TPlayer = {
  id: TPlayers;
  name: string;
  wins: number;
  prevWins: number;
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
    prevWins: 0,
  },
  yellowPlayer: {
    id: 'yellow',
    name: 'Player 2',
    wins: 0,
    prevWins: 0,
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
      const addWin = (player: TPlayers, wins: number) => {
        return action.payload === player ? wins + 1 : wins;
      };

      const addPrevWin = (player: TPlayers, wins: number, prevWins: number) => {
        if (action.payload === player) {
          return wins === 0 ? 0 : wins;
        }
        return prevWins;
      };

      return {
        ...state,
        redPlayer: {
          ...state.redPlayer,
          wins: addWin('red', state.redPlayer.wins),
          prevWins: addPrevWin(
            'red',
            state.redPlayer.wins,
            state.redPlayer.prevWins
          ),
        },
        yellowPlayer: {
          ...state.yellowPlayer,
          wins: addWin('yellow', state.yellowPlayer.wins),
          prevWins: addPrevWin(
            'yellow',
            state.yellowPlayer.wins,
            state.yellowPlayer.prevWins
          ),
        },
      };
    },
    resetPlayerWins: (state) => {
      return {
        ...state,
        redPlayer: { ...state.redPlayer, wins: 0, prevWins: 0 },
        yellowPlayer: { ...state.yellowPlayer, wins: 0, prevWins: 0 },
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
