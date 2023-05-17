import Image from 'next/image';

import RedTurnBackground from 'public/images/turn-background-red.svg';

import PillButton from '../pill-button/pill-button.component';

export default function Turn() {
  return (
    // <div className="absolute left-1/2 top-[94%] z-50 grid w-[285px] -translate-x-1/2 place-content-center rounded-[20px] border-3 border-black bg-white py-4 text-center shadow-brand">
    //   <div>
    //     <p className="uppercase">Player 1</p>
    //     <h1 className="heading-large">Wins</h1>
    //     <PillButton onClickFunc={() => console.log('Play again')}>
    //       Play Again
    //     </PillButton>
    //   </div>
    // </div>
    <div className="absolute left-1/2 top-[94%] z-50 grid -translate-x-1/2">
      <Image src={RedTurnBackground} alt="" />
      <div className="absolute top-9 w-full text-center md:top-10">
        <p className="uppercase">Player 1&apos;s Turn</p>
        <h1 className="heading-large lowercase">14s</h1>
      </div>
    </div>
  );
}
