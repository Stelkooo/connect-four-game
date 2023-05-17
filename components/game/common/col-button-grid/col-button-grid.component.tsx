'use client';

import Image from 'next/image';

import RedMarker from 'public/images/marker-red.svg';

export default function ColButtonGrid() {
  return (
    <div className="absolute inset-0 z-40 grid grid-cols-7 gap-x-2 px-2 pb-8 pt-2 md:gap-x-4 md:px-4 md:pb-14 md:pt-4">
      {[...Array(7)].map((value, index) => (
        <button
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          type="button"
          className="group/col relative h-full w-full rounded-full"
          onClick={() => console.log(index)}
        >
          <span className="sr-only">
            Col {index}, click here to insert a checker
          </span>
          <Image
            src={RedMarker}
            alt="Red Marker"
            className="absolute -top-11 left-1/2 hidden -translate-x-1/2 group-hover/col:block md:-top-12 lg:-top-14"
          />
        </button>
      ))}
    </div>
  );
}
