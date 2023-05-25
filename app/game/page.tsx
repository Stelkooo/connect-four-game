'use client';

import { AnimatePresence } from 'framer-motion';

import { useAppSelector } from '@/store/hooks';
import {
  selectRedPlayer,
  selectYellowPlayer,
} from '@/store/players/players.selector';
import { selectIsPaused } from '@/store/board/board.selector';

import BackgroundHighlight from '@/components/game/common/background-highlight/background-highlight.component';
import Board from '@/components/game/common/board/board.component';
import Header from '@/components/game/common/header/header.component';
import ScoreCard from '@/components/game/common/score-card/score-card.component';
import PauseMenu from '@/components/game/common/pause-menu/pause-menu.component';

export default function Page() {
  const redPlayer = useAppSelector(selectRedPlayer);
  const yellowPlayer = useAppSelector(selectYellowPlayer);

  const isPaused = useAppSelector(selectIsPaused);
  return (
    <div className="h-full overflow-hidden bg-light-purple">
      <div className="mx-auto grid max-w-[335px] gap-y-12 pt-4 md:max-w-[632px]">
        <Header />
        <main className="relative grid grid-cols-2 gap-x-5 gap-y-12 md:gap-x-10 md:gap-y-8">
          <ScoreCard player={redPlayer} />
          <ScoreCard player={yellowPlayer} />
          <Board />
          <BackgroundHighlight />
        </main>
      </div>
      <AnimatePresence>{isPaused ? <PauseMenu /> : null}</AnimatePresence>
    </div>
  );
}
