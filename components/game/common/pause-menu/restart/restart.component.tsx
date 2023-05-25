import { useAppDispatch } from '@/store/hooks';
import {
  resetBoard,
  resetCountdown,
  toggleIsPaused,
  toggleIsRunning,
} from '@/store/board/board.reducer';

import {
  resetPlayerWins,
  setPlayerTurn,
} from '@/store/players/players.reducer';

import Button from '@/components/common/button/button.component';

export default function Restart() {
  const dispatch = useAppDispatch();

  const onClickHandler = () => {
    dispatch(toggleIsPaused());
    dispatch(toggleIsRunning());
    dispatch(resetBoard());
    dispatch(resetPlayerWins());
    dispatch(resetCountdown());
    dispatch(setPlayerTurn('red'));
  };
  return (
    <Button color="white" centered onClickFunc={() => onClickHandler()}>
      <span>Restart</span>
    </Button>
  );
}
