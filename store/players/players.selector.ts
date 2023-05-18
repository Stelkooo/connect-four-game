import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const selectPlayersReducer = (state: RootState) => state.players;

export const selectRedPlayer = createSelector(
  [selectPlayersReducer],
  (players) => players.redPlayer
);

export const selectYellowPlayer = createSelector(
  [selectPlayersReducer],
  (players) => players.yellowPlayer
);

export const selectPlayerTurn = createSelector(
  [selectPlayersReducer],
  (players) => players.playerTurn
);

export const selectWinner = createSelector(
  [selectPlayersReducer],
  (players) => players.winner
);

export const selectStartingPlayer = createSelector(
  [selectPlayersReducer],
  (players) => players.startingPlayer
);
