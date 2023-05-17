import Image from 'next/image';

import CounterRedSmall from 'public/images/counter-red-small.svg';
import CounterRedLarge from 'public/images/counter-red-large.svg';
import CounterYellowSmall from 'public/images/counter-yellow-small.svg';
import CounterYellowLarge from 'public/images/counter-yellow-large.svg';

export default function CounterGrid() {
  return (
    <div className="absolute inset-0 z-20 grid grid-cols-7 grid-rows-6 gap-x-2 gap-y-[6px] px-2 pb-7 pt-2 md:gap-x-4 md:gap-y-4 md:px-4 md:pb-14 md:pt-4" />
  );
}
