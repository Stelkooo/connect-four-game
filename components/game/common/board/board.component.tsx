'use client';

import Image from 'next/image';

import WhiteBoardSmall from 'public/images/board-layer-white-small.svg';
import BlackBoardSmall from 'public/images/board-layer-black-small.svg';

import ColButtonGrid from '../col-button-grid/col-button-grid.component';
import CounterGrid from '../counter-grid/counter-grid.component';
import Turn from '../turn/turn.component';

export default function Board() {
  return (
    <div className="relative col-span-2">
      <picture>
        <source
          media="(min-width:768px)"
          srcSet="images/board-layer-black-large.svg"
        />
        <Image
          src={BlackBoardSmall}
          alt=""
          className="absolute inset-0 z-10 w-full"
        />
      </picture>
      <CounterGrid />
      <picture>
        <source
          media="(min-width:768px)"
          srcSet="images/board-layer-white-large.svg"
        />
        <Image src={WhiteBoardSmall} alt="" className="relative z-30 w-full" />
      </picture>
      <ColButtonGrid />
      <Turn />
    </div>
  );
}
