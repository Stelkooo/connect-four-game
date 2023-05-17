import BackgroundHighlight from '@/components/game/common/background-highlight/background-highlight.component';
import Board from '@/components/game/common/board/board.component';
import Header from '@/components/game/common/header/header.component';
import ScoreCard from '@/components/game/common/score-card/score-card.component';

export default function Page() {
  return (
    <div className="h-full overflow-hidden bg-light-purple">
      <div className="mx-auto grid max-w-[335px] gap-y-12 pt-4 md:max-w-[632px]">
        <Header />
        <main className="relative grid grid-cols-2 gap-x-5 gap-y-12 md:gap-x-10 md:gap-y-8">
          <ScoreCard name="Player 1" wins={12} playerNumber="one" />
          <ScoreCard name="Player 2" wins={23} playerNumber="two" />
          <Board />
          <BackgroundHighlight />
        </main>
      </div>
    </div>
  );
}
