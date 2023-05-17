'use client';

import { useRouter } from 'next/navigation';

export default function IconCheck() {
  const router = useRouter();
  return (
    <button
      type="button"
      className="absolute -bottom-10 left-1/2 -translate-x-1/2"
      onClick={() => router.push('')}
    >
      <svg
        width="70px"
        height="75px"
        viewBox="0 0 70 75"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="group/check"
      >
        <title>icon-check</title>
        <g
          id="Designs"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="icon-check">
            <circle
              id="Oval-Copy-37"
              className="fill-black group-hover/check:fill-purple"
              cx="35"
              cy="35"
              r="35"
            />
            <circle
              id="Oval-Copy-38"
              className="fill-black group-hover/check:fill-purple"
              cx="35"
              cy="40"
              r="35"
            />
            <circle
              id="Oval-Copy-39"
              className="fill-red"
              cx="35"
              cy="35"
              r="32"
            />
            <polyline
              id="Path"
              className="stroke-white"
              strokeWidth="3"
              points="20 34.5819497 30.2640104 44.84596 50.1099704 25"
            />
          </g>
        </g>
      </svg>
    </button>
  );
}
