import { combineReducers } from '@reduxjs/toolkit';

import { boardReducer } from './board/board.reducer';
import { playersReducer } from './players/players.reducer';

const rootReducer = combineReducers({
  board: boardReducer,
  players: playersReducer,
});

export default rootReducer;
