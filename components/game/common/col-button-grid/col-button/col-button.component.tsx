import { Dispatch, SetStateAction } from 'react';

import { TPlayers } from '@/store/players/players.reducer';

import Marker from './marker/marker.component';

type Props = {
  winner: TPlayers | null;
  index: number;
  onClickHandler: (index: number) => void;
  player: TPlayers;
  focused: number | null;
  setFocused: Dispatch<SetStateAction<number | null>>;
};

export default function ColButton({
  index,
  onClickHandler,
  player,
  winner,
  focused,
  setFocused,
}: Props) {
  return (
    <button
      type="button"
      className="relative h-full w-full rounded-full"
      onClick={() => onClickHandler(index)}
      disabled={winner !== null}
      onFocus={() => setFocused(index)}
      onMouseOver={() => setFocused(index)}
    >
      <span className="sr-only">
        Col {index}, click here to insert a checker
      </span>
      {focused === index ? <Marker player={player} /> : null}
    </button>
  );
}
