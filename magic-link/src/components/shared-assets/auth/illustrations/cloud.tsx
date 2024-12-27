import type { SVGProps } from 'react';
import { cx } from '@/components/utils';

const lg = ({ children, className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <div className={cx('relative', className)}>
      <svg
        width='220'
        height='160'
        viewBox='0 0 220 160'
        fill='none'
        className='size-full stroke-inherit text-inherit'
        {...props}>
        <circle
          cx='110'
          cy='80'
          r='80'
          className='fill-utility-gray-200'
        />
        <circle
          cx='26'
          cy='20'
          r='8'
          className='fill-utility-gray-100'
        />
        <circle
          cx='198'
          cy='126'
          r='6'
          className='fill-utility-gray-100'
        />
        <circle
          cx='25'
          cy='138'
          r='10'
          className='fill-utility-gray-100'
        />
        <circle
          cx='210'
          cy='46'
          r='10'
          className='fill-utility-gray-100'
        />
        <circle
          cx='191'
          cy='11'
          r='7'
          className='fill-utility-gray-100'
        />
        <g filter='url(#filter0_dd_1182_2774)'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M113.486 16C96.7495 16 81.9448 24.2701 72.9354 36.9466C69.9934 36.2528 66.9253 35.8857 63.7714 35.8857C41.8063 35.8857 24 53.692 24 75.6571C24 97.6223 41.8063 115.429 63.7714 115.429H163.2C182.42 115.429 198 99.8481 198 80.6286C198 61.4091 182.42 45.8286 163.2 45.8286C161.835 45.8286 160.488 45.9072 159.164 46.0601C151.546 28.3784 133.961 16 113.486 16Z'
            fill='#F9FAFB'
          />
          <circle
            cx='63.7714'
            cy='75.6572'
            r='39.7714'
            fill='url(#paint0_linear_1182_2774)'
          />
          <circle
            cx='113.486'
            cy='65.7143'
            r='49.7143'
            fill='url(#paint1_linear_1182_2774)'
          />
          <circle
            cx='163.2'
            cy='80.6286'
            r='34.8'
            fill='url(#paint2_linear_1182_2774)'
          />
        </g>
        {!children && (
          <g filter='url(#filter1_b_1182_2774)'>
            <path
              d='M82 112C82 96.536 94.536 84 110 84C125.464 84 138 96.536 138 112C138 127.464 125.464 140 110 140C94.536 140 82 127.464 82 112Z'
              fill='#344054'
              fillOpacity='0.4'
            />
            <path
              d='M120.5 122.5L116.417 118.417M119.333 111.417C119.333 116.893 114.893 121.333 109.417 121.333C103.94 121.333 99.5 116.893 99.5 111.417C99.5 105.94 103.94 101.5 109.417 101.5C114.893 101.5 119.333 105.94 119.333 111.417Z'
              stroke='white'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
        )}
        <defs>
          <filter
            id='filter0_dd_1182_2774'
            x='4'
            y='16'
            width='214'
            height='139.429'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'>
            <feFlood
              floodOpacity='0'
              result='BackgroundImageFix'
            />
            <feColorMatrix
              in='SourceAlpha'
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              result='hardAlpha'
            />
            <feMorphology
              radius='4'
              operator='erode'
              in='SourceAlpha'
              result='effect1_dropShadow_1182_2774'
            />
            <feOffset dy='8' />
            <feGaussianBlur stdDeviation='4' />
            <feComposite
              in2='hardAlpha'
              operator='out'
            />
            <feColorMatrix
              type='matrix'
              values='0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.03 0'
            />
            <feBlend
              mode='normal'
              in2='BackgroundImageFix'
              result='effect1_dropShadow_1182_2774'
            />
            <feColorMatrix
              in='SourceAlpha'
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              result='hardAlpha'
            />
            <feMorphology
              radius='4'
              operator='erode'
              in='SourceAlpha'
              result='effect2_dropShadow_1182_2774'
            />
            <feOffset dy='20' />
            <feGaussianBlur stdDeviation='12' />
            <feComposite
              in2='hardAlpha'
              operator='out'
            />
            <feColorMatrix
              type='matrix'
              values='0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.08 0'
            />
            <feBlend
              mode='normal'
              in2='effect1_dropShadow_1182_2774'
              result='effect2_dropShadow_1182_2774'
            />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='effect2_dropShadow_1182_2774'
              result='shape'
            />
          </filter>
          <filter
            id='filter1_b_1182_2774'
            x='74'
            y='76'
            width='72'
            height='72'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'>
            <feFlood
              floodOpacity='0'
              result='BackgroundImageFix'
            />
            <feGaussianBlur
              in='SourceGraphic'
              stdDeviation='4'
            />
            <feComposite
              in2='SourceAlpha'
              operator='in'
              result='effect1_backgroundBlur_1182_2774'
            />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='effect1_backgroundBlur_1182_2774'
              result='shape'
            />
          </filter>
          <linearGradient
            id='paint0_linear_1182_2774'
            x1='33.2326'
            y1='49.3796'
            x2='103.543'
            y2='115.429'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#D0D5DD' />
            <stop
              offset='0.350715'
              stopColor='white'
              stopOpacity='0'
            />
          </linearGradient>
          <linearGradient
            id='paint1_linear_1182_2774'
            x1='75.3122'
            y1='32.8673'
            x2='163.2'
            y2='115.428'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#D0D5DD' />
            <stop
              offset='0.350715'
              stopColor='white'
              stopOpacity='0'
            />
          </linearGradient>
          <linearGradient
            id='paint2_linear_1182_2774'
            x1='136.479'
            y1='57.6358'
            x2='198'
            y2='115.429'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#D0D5DD' />
            <stop
              offset='0.350715'
              stopColor='white'
              stopOpacity='0'
            />
          </linearGradient>
        </defs>
      </svg>
      {children && (
        <span className='absolute inset-x-[82px] bottom-5 z-10 flex size-12 items-center justify-center rounded-full bg-alpha-black/40 backdrop-blur-sm'>
          {children}
        </span>
      )}
    </div>
  );
};

const md = ({ children, className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <div className={cx('relative', className)}>
      <svg
        width='180'
        height='136'
        viewBox='0 0 180 136'
        fill='none'
        className='size-full stroke-inherit text-inherit'
        {...props}>
        <circle
          cx='90'
          cy='64'
          r='64'
          className='fill-utility-gray-200'
        />
        <circle
          cx='24'
          cy='20'
          r='6'
          className='fill-utility-gray-100'
        />
        <circle
          cx='21'
          cy='112'
          r='8'
          className='fill-utility-gray-100'
        />
        <circle
          cx='164'
          cy='36'
          r='8'
          className='fill-utility-gray-100'
        />
        <circle
          cx='153'
          cy='9'
          r='5'
          className='fill-utility-gray-100'
        />
        <g filter='url(#filter0_dd_1182_2026)'>
          <path
            d='M92 16C78.534 16 66.6222 22.6541 59.3733 32.8536C57.0062 32.2954 54.5376 32 52 32C34.3269 32 20 46.3269 20 64C20 81.6731 34.3269 96 52 96H132C147.464 96 160 83.464 160 68C160 52.536 147.464 40 132 40C130.902 40 129.818 40.0633 128.752 40.1863C122.623 25.9596 108.475 16 92 16Z'
            fill='#F9FAFB'
          />
          <circle
            cx='52'
            cy='64'
            r='32'
            fill='url(#paint0_linear_1182_2026)'
          />
          <circle
            cx='92'
            cy='56'
            r='40'
            fill='url(#paint1_linear_1182_2026)'
          />
          <circle
            cx='132'
            cy='68'
            r='28'
            fill='url(#paint2_linear_1182_2026)'
          />
        </g>
        {!children && (
          <g filter='url(#filter1_b_1182_2026)'>
            <path
              d='M62 88C62 72.536 74.536 60 90 60C105.464 60 118 72.536 118 88C118 103.464 105.464 116 90 116C74.536 116 62 103.464 62 88Z'
              fill='#344054'
              fillOpacity='0.4'
            />
            <path
              d='M100.5 98.5L96.4168 94.4167M99.3333 87.4167C99.3333 92.8935 94.8935 97.3333 89.4167 97.3333C83.9398 97.3333 79.5 92.8935 79.5 87.4167C79.5 81.9398 83.9398 77.5 89.4167 77.5C94.8935 77.5 99.3333 81.9398 99.3333 87.4167Z'
              stroke='white'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
        )}
        <defs>
          <filter
            id='filter0_dd_1182_2026'
            x='0'
            y='16'
            width='180'
            height='120'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'>
            <feFlood
              floodOpacity='0'
              result='BackgroundImageFix'
            />
            <feColorMatrix
              in='SourceAlpha'
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              result='hardAlpha'
            />
            <feMorphology
              radius='4'
              operator='erode'
              in='SourceAlpha'
              result='effect1_dropShadow_1182_2026'
            />
            <feOffset dy='8' />
            <feGaussianBlur stdDeviation='4' />
            <feComposite
              in2='hardAlpha'
              operator='out'
            />
            <feColorMatrix
              type='matrix'
              values='0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.03 0'
            />
            <feBlend
              mode='normal'
              in2='BackgroundImageFix'
              result='effect1_dropShadow_1182_2026'
            />
            <feColorMatrix
              in='SourceAlpha'
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              result='hardAlpha'
            />
            <feMorphology
              radius='4'
              operator='erode'
              in='SourceAlpha'
              result='effect2_dropShadow_1182_2026'
            />
            <feOffset dy='20' />
            <feGaussianBlur stdDeviation='12' />
            <feComposite
              in2='hardAlpha'
              operator='out'
            />
            <feColorMatrix
              type='matrix'
              values='0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.08 0'
            />
            <feBlend
              mode='normal'
              in2='effect1_dropShadow_1182_2026'
              result='effect2_dropShadow_1182_2026'
            />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='effect2_dropShadow_1182_2026'
              result='shape'
            />
          </filter>
          <filter
            id='filter1_b_1182_2026'
            x='54'
            y='52'
            width='72'
            height='72'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'>
            <feFlood
              floodOpacity='0'
              result='BackgroundImageFix'
            />
            <feGaussianBlur
              in='SourceGraphic'
              stdDeviation='4'
            />
            <feComposite
              in2='SourceAlpha'
              operator='in'
              result='effect1_backgroundBlur_1182_2026'
            />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='effect1_backgroundBlur_1182_2026'
              result='shape'
            />
          </filter>
          <linearGradient
            id='paint0_linear_1182_2026'
            x1='27.4286'
            y1='42.8571'
            x2='84'
            y2='96'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#D0D5DD' />
            <stop
              offset='0.350715'
              stopColor='white'
              stopOpacity='0'
            />
          </linearGradient>
          <linearGradient
            id='paint1_linear_1182_2026'
            x1='61.2857'
            y1='29.5714'
            x2='132'
            y2='95.9999'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#D0D5DD' />
            <stop
              offset='0.350715'
              stopColor='white'
              stopOpacity='0'
            />
          </linearGradient>
          <linearGradient
            id='paint2_linear_1182_2026'
            x1='110.5'
            y1='49.5'
            x2='160'
            y2='96'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#D0D5DD' />
            <stop
              offset='0.350715'
              stopColor='white'
              stopOpacity='0'
            />
          </linearGradient>
        </defs>
      </svg>
      {children && (
        <span className='absolute inset-x-[58px] bottom-3 z-10 flex size-12 items-center justify-center rounded-full bg-alpha-black/40 backdrop-blur-sm'>
          {children}
        </span>
      )}
    </div>
  );
};

const sm = ({ children, className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <div className={cx('relative', className)}>
      <svg
        width='152'
        height='120'
        viewBox='0 0 152 120'
        fill='none'
        className='size-full stroke-inherit text-inherit'
        {...props}>
        <circle
          cx='76'
          cy='52'
          r='52'
          className='fill-utility-gray-200'
        />
        <g filter='url(#filter0_dd_1266_30154)'>
          <path
            d='M77.6 16C66.8273 16 57.2978 21.3233 51.4987 29.4829C49.605 29.0363 47.6301 28.8 45.6 28.8C31.4615 28.8 20 40.2615 20 54.4C20 68.5385 31.4615 80 45.6 80L109.6 80C121.971 80 132 69.9712 132 57.6C132 45.2288 121.971 35.2 109.6 35.2C108.721 35.2 107.854 35.2506 107.002 35.349C102.098 23.9677 90.7797 16 77.6 16Z'
            fill='#F9FAFB'
          />
          <ellipse
            cx='45.6'
            cy='54.3998'
            rx='25.6'
            ry='25.6'
            fill='url(#paint0_linear_1266_30154)'
          />
          <circle
            cx='77.6'
            cy='48'
            r='32'
            fill='url(#paint1_linear_1266_30154)'
          />
          <ellipse
            cx='109.6'
            cy='57.6002'
            rx='22.4'
            ry='22.4'
            fill='url(#paint2_linear_1266_30154)'
          />
        </g>
        <circle
          cx='21'
          cy='19'
          r='5'
          className='fill-utility-gray-100'
        />
        <circle
          cx='18'
          cy='109'
          r='7'
          className='fill-utility-gray-100'
        />
        <circle
          cx='145'
          cy='35'
          r='7'
          className='fill-utility-gray-100'
        />
        <circle
          cx='134'
          cy='8'
          r='4'
          className='fill-utility-gray-100'
        />

        {!children && (
          <g filter='url(#filter1_b_1266_30154)'>
            <path
              d='M52 86C52 72.7452 62.7452 62 76 62C89.2548 62 100 72.7452 100 86C100 99.2548 89.2548 110 76 110C62.7452 110 52 99.2548 52 86Z'
              fill='#344054'
              fillOpacity='0.4'
            />
            <path
              d='M70 90.9998C70 91.3511 70 91.5268 70.0157 91.6795C70.1457 92.9473 71.0626 93.9945 72.3021 94.291C72.4513 94.3267 72.6255 94.3499 72.9737 94.3963L79.5656 95.2753C81.442 95.5254 82.3803 95.6505 83.1084 95.361C83.7478 95.1068 84.2803 94.6406 84.6168 94.0405C85 93.3569 85 92.4104 85 90.5174V81.4823C85 79.5893 85 78.6428 84.6168 77.9592C84.2803 77.3591 83.7478 76.8929 83.1084 76.6387C82.3803 76.3491 81.442 76.4742 79.5656 76.7244L72.9737 77.6033C72.6255 77.6498 72.4514 77.673 72.3021 77.7087C71.0626 78.0052 70.1457 79.0524 70.0157 80.3202C70 80.4729 70 80.6485 70 80.9998M76 81.9998L80 85.9998M80 85.9998L76 89.9998M80 85.9998H67'
              stroke='white'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
        )}
        <defs>
          <filter
            id='filter0_dd_1266_30154'
            x='0'
            y='16'
            width='152'
            height='104'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'>
            <feFlood
              floodOpacity='0'
              result='BackgroundImageFix'
            />
            <feColorMatrix
              in='SourceAlpha'
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              result='hardAlpha'
            />
            <feMorphology
              radius='4'
              operator='erode'
              in='SourceAlpha'
              result='effect1_dropShadow_1266_30154'
            />
            <feOffset dy='8' />
            <feGaussianBlur stdDeviation='4' />
            <feComposite
              in2='hardAlpha'
              operator='out'
            />
            <feColorMatrix
              type='matrix'
              values='0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.03 0'
            />
            <feBlend
              mode='normal'
              in2='BackgroundImageFix'
              result='effect1_dropShadow_1266_30154'
            />
            <feColorMatrix
              in='SourceAlpha'
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              result='hardAlpha'
            />
            <feMorphology
              radius='4'
              operator='erode'
              in='SourceAlpha'
              result='effect2_dropShadow_1266_30154'
            />
            <feOffset dy='20' />
            <feGaussianBlur stdDeviation='12' />
            <feComposite
              in2='hardAlpha'
              operator='out'
            />
            <feColorMatrix
              type='matrix'
              values='0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.08 0'
            />
            <feBlend
              mode='normal'
              in2='effect1_dropShadow_1266_30154'
              result='effect2_dropShadow_1266_30154'
            />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='effect2_dropShadow_1266_30154'
              result='shape'
            />
          </filter>
          <filter
            id='filter1_b_1266_30154'
            x='44'
            y='54'
            width='64'
            height='64'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'>
            <feFlood
              floodOpacity='0'
              result='BackgroundImageFix'
            />
            <feGaussianBlur
              in='SourceGraphic'
              stdDeviation='4'
            />
            <feComposite
              in2='SourceAlpha'
              operator='in'
              result='effect1_backgroundBlur_1266_30154'
            />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='effect1_backgroundBlur_1266_30154'
              result='shape'
            />
          </filter>
          <linearGradient
            id='paint0_linear_1266_30154'
            x1='25.9429'
            y1='37.4855'
            x2='71.2'
            y2='79.9998'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#D0D5DD' />
            <stop
              offset='0.350715'
              stopColor='white'
              stopOpacity='0'
            />
          </linearGradient>
          <linearGradient
            id='paint1_linear_1266_30154'
            x1='53.0286'
            y1='26.8571'
            x2='109.6'
            y2='80'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#D0D5DD' />
            <stop
              offset='0.350715'
              stopColor='white'
              stopOpacity='0'
            />
          </linearGradient>
          <linearGradient
            id='paint2_linear_1266_30154'
            x1='92.4'
            y1='42.8002'
            x2='132'
            y2='80.0002'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#D0D5DD' />
            <stop
              offset='0.350715'
              stopColor='white'
              stopOpacity='0'
            />
          </linearGradient>
        </defs>
      </svg>
      {children && (
        <span className='absolute inset-x-[52px] bottom-2 z-10 flex size-12 items-center justify-center rounded-full bg-alpha-black/40 backdrop-blur-sm'>
          {children}
        </span>
      )}
    </div>
  );
};

const sizes = {
  sm,
  md,
  lg,
};

interface Props extends SVGProps<SVGSVGElement> {
  size?: 'sm' | 'md' | 'lg';
}

export const Cloud = ({ size = 'lg', ...rest }: Props) => {
  const Pattern = sizes[size];
  return <Pattern {...rest} />;
};
