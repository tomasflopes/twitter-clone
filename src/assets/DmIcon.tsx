import React from 'react';

const assets: React.FC = () => {
  return (
    <svg
      width='19'
      height='21'
      viewBox='0 0 19 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='0.976562'
        y='0.75'
        width='16.8237'
        height='16.5'
        rx='1.25'
        stroke='#D0D0D0'
        stroke-width='1.5'
      />
      <rect x='-1' width='20' height='11.7' fill='#000' />
      <g filter='url(#filter0_d)'>
        <path
          d='M9.74198 5.04645C9.54672 4.85119 9.23014 4.85119 9.03487 5.04645L5.85289 8.22843C5.65763 8.42369 5.65763 8.74027 5.85289 8.93554C6.04816 9.1308 6.36474 9.1308 6.56 8.93554L9.38843 6.10711L12.2169 8.93554C12.4121 9.1308 12.7287 9.1308 12.924 8.93554C13.1192 8.74027 13.1192 8.42369 12.924 8.22843L9.74198 5.04645ZM9.88843 12.664V5.4H8.88843V12.664L9.88843 12.664Z'
          fill='#D0D0D0'
        />
      </g>
      <defs>
        <filter
          id='filter0_d'
          x='1.70642'
          y='4.90001'
          width='15.364'
          height='15.764'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          />
          <feOffset dy='4' />
          <feGaussianBlur stdDeviation='2' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow'
            result='shape'
          />
        </filter>
      </defs>
    </svg>
  );
};

export default assets;
