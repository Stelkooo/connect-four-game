import { useRouter } from 'next/navigation';

import { useAppDispatch } from '@/store/hooks';
import { toggleIsPaused, toggleIsRunning } from '@/store/board/board.reducer';

import Button from '@/components/common/button/button.component';

export default function Quit() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const onClickHandler = () => {
    router.push('');
    dispatch(toggleIsPaused());
    dispatch(toggleIsRunning());
  };
  return (
    <Button color="red" centered onClickFunc={() => onClickHandler()}>
      <span>Quit Game</span>
    </Button>
  );
}
