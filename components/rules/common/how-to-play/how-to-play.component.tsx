export default function HowToPlay() {
  return (
    <div className="grid gap-y-4">
      <h2 className="heading-small text-light-purple">How to Play</h2>
      <ol className="grid gap-y-3 text-black text-opacity-60">
        <li className="flex gap-4">
          <span className="font-bold text-black text-opacity-100">1</span> Red
          goes first in the first game.
        </li>
        <li className="flex gap-4">
          <span className="font-bold text-black text-opacity-100">2</span>{' '}
          Players must alternate turns, and only one disc can be dropped in each
          turn.
        </li>
        <li className="flex gap-4">
          <span className="font-bold text-black text-opacity-100">3</span> The
          game ends when there is a 4-in-a-row or stalemate.
        </li>
        <li className="flex gap-4">
          <span className="font-bold text-black text-opacity-100">4</span> The
          starter of the previous game goes second on the next game.
        </li>
      </ol>
    </div>
  );
}
