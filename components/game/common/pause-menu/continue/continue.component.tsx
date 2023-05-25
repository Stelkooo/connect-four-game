import Button from '@/components/common/button/button.component';
import { toggleIsPaused, toggleIsRunning } from '@/store/board/board.reducer';
import { useAppDispatch } from '@/store/hooks';

export default function Continue() {
  const dispatch = useAppDispatch();

  const onClickHandler = () => {
    dispatch(toggleIsPaused());
    dispatch(toggleIsRunning());
  };

  return (
    <Button color="white" centered onClickFunc={() => onClickHandler()}>
      <span>Continue Game</span>
    </Button>
  );
}
