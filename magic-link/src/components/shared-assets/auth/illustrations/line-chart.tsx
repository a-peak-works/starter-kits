import type { SVGProps } from 'react';
import { useId } from 'react';

const LineChart = (props: SVGProps<SVGSVGElement>) => {
  // We need to use a unique ID because there might be
  // multiple instances of this element in the same page.
  const id = useId();

  return (
    <svg
      width='736'
      height='341'
      viewBox='0 0 736 341'
      fill='none'
      {...props}>
      <g clipPath={`url(#clip-${id})`}>
        <mask
          id={`mask-${id}`}
          style={{ maskType: 'alpha' }}
          maskUnits='userSpaceOnUse'
          x='0'
          y='46'
          width='736'
          height='295'>
          <rect
            width='736'
            height='295'
            transform='translate(0 46)'
            fill={`url(#gradient-${id})`}
          />
        </mask>
        <g mask={`url(#mask-${id})`}>
          <path
            opacity='0.08'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M736 88.7129L723.471 96.3009C722.533 96.8686 721.458 97.1687 720.363 97.1687H706.392L700.365 104.005C699.226 105.296 697.586 106.036 695.864 106.036H686.922C685.632 106.709 684.081 107.502 682.648 108.2C681.669 108.678 680.68 109.144 679.844 109.501C679.434 109.677 678.979 109.862 678.54 110.013L678.511 110.023C678.329 110.087 677.611 110.341 676.713 110.435C676.612 110.459 676.46 110.497 676.253 110.553C675.691 110.705 674.935 110.93 674.07 111.198C672.352 111.732 670.399 112.379 669.128 112.811C668.731 112.946 668.32 113.039 667.903 113.089L645.93 115.697L633.327 119.127C632.485 119.356 631.604 119.399 630.744 119.253L609.895 115.706C609.757 115.682 609.62 115.654 609.484 115.621L600.393 113.412L586.531 118.915C585.826 119.194 585.075 119.338 584.317 119.338H568.159C567.296 119.338 566.444 119.152 565.66 118.793L552.825 112.914C550.258 112.479 546.735 111.889 543.663 111.39C541.963 111.114 540.419 110.869 539.258 110.694C538.674 110.606 538.211 110.54 537.884 110.497C537.743 110.478 537.653 110.467 537.604 110.462C537.016 110.433 536.485 110.334 536.293 110.298L536.264 110.293C535.887 110.223 535.458 110.133 535.022 110.035C534.142 109.839 533.053 109.576 531.925 109.294C529.984 108.809 527.822 108.244 526.192 107.81H519.041L499.691 110.409L484.118 112.817L477.544 118.037C476.664 118.736 475.606 119.173 474.489 119.3L451.348 121.924L439.955 124.453L427.745 128.447L415.58 138.381C414.508 139.256 413.168 139.734 411.785 139.734H406.051C405.714 139.734 405.377 139.705 405.045 139.649L389.407 136.988C388.78 136.882 388.175 136.676 387.612 136.379L372.916 128.62L361.273 124.659H354.448C354.06 124.659 353.673 124.621 353.292 124.546L340.723 122.079L322.429 124.602C322.157 124.64 321.883 124.659 321.609 124.659H304.084L286.671 128.891L268.818 134.097L255.518 139.319C255.157 139.46 254.783 139.567 254.402 139.636L239.807 142.297C239.188 142.41 238.556 142.424 237.932 142.341L219.03 139.802L204.292 142.309L188.655 144.969C187.966 145.087 187.261 145.083 186.573 144.957L173.435 142.562L155.041 148.327C154.056 148.636 153.008 148.685 151.998 148.47L136.567 145.189L121.135 148.47C120.724 148.557 120.306 148.601 119.887 148.601H104.189L87.444 151.191C87.1405 151.238 86.834 151.262 86.5269 151.262H69.2524L51.9728 153.856C51.0811 153.989 50.1706 153.921 49.3091 153.654L33.4303 148.742L18.12 151.11L1.94088 156.641C1.29798 156.861 0.64351 156.965 0 156.966V341H736V88.7129ZM676.81 110.413C676.861 110.405 676.888 110.399 676.887 110.398C676.886 110.398 676.878 110.399 676.861 110.402C676.849 110.405 676.832 110.408 676.81 110.413Z'
            className='fill-utility-brand-600'
          />
        </g>
        <path
          d='M0 150.964L16.6799 145.262L33.881 142.601L51.0822 147.922L68.8045 145.262H86.5269L103.728 142.601H119.887L136.567 139.054L153.246 142.601L173.054 136.394L187.649 139.054L203.286 136.394L218.924 133.734L238.731 136.394L253.326 133.734L266.878 128.413L285.122 123.092L303.365 118.659H321.609L340.895 115.998L354.448 118.659H362.266L375.297 123.092L390.414 131.073L406.051 133.734H411.785L424.816 123.092L438.368 118.659L450.357 115.998L473.813 113.338L481.632 107.131L498.833 104.47L518.64 101.81H526.98C530.281 102.697 537.092 104.47 537.926 104.47C538.76 104.47 549.394 106.244 554.606 107.131L568.159 113.338H584.317L599.955 107.131L610.901 109.791L631.751 113.338L644.782 109.791L667.195 107.131C669.802 106.244 675.223 104.47 676.057 104.47C676.891 104.47 682.659 101.514 685.439 100.036H695.864L703.683 91.1687H720.363L736 81.6982'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='stroke-utility-brand-600 stroke-[4px]'
        />
        <path
          d='M0 219.949L16.6799 216.317L33.881 214.623L51.0822 218.012L68.8045 216.317H86.5269L103.728 214.623H119.887L136.567 212.363L153.246 214.623L173.054 210.669L187.649 212.363L203.286 210.669L218.924 208.974L238.731 210.669L253.326 208.974L266.878 205.585L285.122 202.196L303.365 199.371H321.609L340.895 197.677L354.448 199.371H362.266L375.297 202.196L390.414 207.279L406.051 208.974H411.785L424.816 202.196L438.368 199.371L450.357 197.677L473.813 195.982L481.632 192.028L498.833 190.334L518.64 188.639H526.98C530.281 189.204 537.092 190.334 537.926 190.334C538.76 190.334 549.394 191.463 554.606 192.028L568.159 195.982H584.317L599.955 192.028L610.901 193.723L631.751 195.982L644.782 193.723L667.195 192.028C669.802 191.463 675.223 190.334 676.057 190.334C676.891 190.334 682.659 188.451 685.439 187.509H695.864L703.683 181.861H720.363L736 175.828'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='stroke-utility-brand-400 stroke-[4px]'
        />
        <path
          d='M0 307.255L16.6799 297.605L33.881 293.103L51.0822 302.107L68.8045 297.605H86.5269L103.728 293.103H119.887L136.567 287.1L153.246 293.103L173.054 282.598L187.649 287.1L203.286 282.598L218.924 278.096L238.731 282.598L253.326 278.096L266.878 269.092L285.122 260.088L303.365 252.584H321.609L340.895 248.082L354.448 252.584H362.266L375.297 260.088L390.414 273.594L406.051 278.096H411.785L424.816 260.088L438.368 252.584L450.357 248.082L473.813 243.58L481.632 233.075L498.833 228.573L518.64 224.071H526.98C530.281 225.572 537.092 228.573 537.926 228.573C538.76 228.573 549.394 231.575 554.606 233.075L568.159 243.58H584.317L599.955 233.075L610.901 237.577L631.751 243.58L644.782 237.577L667.195 233.075C669.802 231.575 675.223 228.573 676.057 228.573C676.891 228.573 682.659 223.571 685.439 221.07H695.864L703.683 206.063H720.363L736 190.036'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='stroke-utility-brand-700 stroke-[4px]'
        />
      </g>
      <defs>
        <linearGradient
          id={`gradient-${id}`}
          x1='368'
          y1='0'
          x2='368'
          y2='295'
          gradientUnits='userSpaceOnUse'>
          <stop />
          <stop
            offset='1'
            stopOpacity='0'
          />
        </linearGradient>
        <clipPath id={`clip-${id}`}>
          <rect
            width='736'
            height='341'
            fill='white'
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LineChart;