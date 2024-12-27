import React, { DetailedHTMLProps, forwardRef } from 'react';

import { cx, sortCx } from '@/components/utils';
import {
  Button as AriaButton,
  ButtonProps as AriaButtonProps,
} from 'react-aria-components';

export const styles = sortCx({
  common: {
    root: 'group relative inline-flex h-max items-center justify-center whitespace-nowrap font-semibold transition duration-100 ease-linear before:absolute focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-brand disabled:cursor-not-allowed disabled:stroke-fg-disabled disabled:text-fg-disabled *:disabled:text-fg-disabled',
    icon: 'pointer-events-none shrink-0 transition-inherit-all',
  },

  sizes: {
    sm: {
      root: 'gap-2 rounded-lg px-3 py-2 text-sm leading-sm before:rounded-[7px] data-[icon-only=true]:p-2',
    },
    md: {
      root: 'gap-2.5 rounded-lg px-3.5 py-2.5 text-sm leading-sm before:rounded-[7px] data-[icon-only=true]:p-2.5',
    },
    lg: {
      root: 'gap-3 rounded-lg px-xl py-2.5 text-md leading-md before:rounded-[7px] data-[icon-only=true]:p-2.5',
    },
    xl: {
      root: 'gap-3.5 rounded-lg px-4.5 py-3 text-md leading-md before:rounded-[7px] data-[icon-only=true]:p-3.5',
    },
    '2xl': {
      root: 'gap-4 rounded-[10px] px-5.5 py-4 text-lg leading-lg before:rounded-[9px] data-[icon-only=true]:p-4',
    },
  },

  colors: {
    gray: {
      root: 'bg-primary text-secondary ring-1 ring-inset ring-border-primary enabled:shadow-xs-skeumorphic enabled:hover:bg-primary_hover enabled:hover:text-secondary_hover',
      icon: 'text-fg-quinary group-hover:text-fg-quinary_hover',
    },
    black: {
      root: 'bg-black text-white ring-1 ring-inset ring-transparent before:absolute before:inset-px before:border before:border-white before:border-opacity-[.12] before:mask-image-b enabled:shadow-xs-skeumorphic',
      icon: '',
    },

    facebook: {
      root: 'bg-[#1877F2] text-white ring-1 ring-inset ring-transparent before:absolute before:inset-px before:border before:border-white before:border-opacity-[.12] before:mask-image-b enabled:shadow-xs-skeumorphic enabled:hover:bg-[#0C63D4]',
      icon: '',
    },

    dribble: {
      root: 'bg-[#EA4C89] text-white ring-1 ring-inset ring-transparent before:absolute before:inset-px before:border before:border-white before:border-opacity-[.12] before:mask-image-b enabled:shadow-xs-skeumorphic enabled:hover:bg-[#E62872]',
      icon: '',
    },
  },
});

export const GoogleLogo = (props: {
  colorful?: boolean;
  className?: string;
}) => {
  const { colorful = true } = props;

  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      className={props.className}>
      <g clipPath='url(#clip0_1256_130935)'>
        <path
          d='M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z'
          fill={colorful ? '#4285F4' : 'currentColor'}
        />
        <path
          d='M12.24 24.0008C15.4764 24.0008 18.2058 22.9382 20.1944 21.1039L16.3274 18.1055C15.2516 18.8375 13.8626 19.252 12.2444 19.252C9.11376 19.252 6.45934 17.1399 5.50693 14.3003H1.51648V17.3912C3.55359 21.4434 7.70278 24.0008 12.24 24.0008Z'
          fill={colorful ? '#34A853' : 'currentColor'}
        />
        <path
          d='M5.50253 14.3003C4.99987 12.8099 4.99987 11.1961 5.50253 9.70575V6.61481H1.51649C-0.18551 10.0056 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3003Z'
          fill={colorful ? '#FBBC04' : 'currentColor'}
        />
        <path
          d='M12.24 4.74966C13.9508 4.7232 15.6043 5.36697 16.8433 6.54867L20.2694 3.12262C18.1 1.0855 15.2207 -0.034466 12.24 0.000808666C7.70277 0.000808666 3.55359 2.55822 1.51648 6.61481L5.50252 9.70575C6.45052 6.86173 9.10935 4.74966 12.24 4.74966Z'
          fill={colorful ? '#EA4335' : 'currentColor'}
        />
      </g>
      <defs>
        <clipPath id='clip0_1256_130935'>
          <rect
            width='24'
            height='24'
            fill='white'
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const FigmaLogo = (props: {
  colorful?: boolean;
  className?: string;
}) => {
  const { colorful = true } = props;

  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      className={props.className}>
      <g clipPath='url(#clip0_1256_132056)'>
        <path
          d='M8.00006 24.0001C10.2081 24.0001 12.0001 22.208 12.0001 20V16H8.00006C5.79205 16 4 17.792 4 20C4 22.208 5.79205 24.0001 8.00006 24.0001Z'
          fill={colorful ? '#24CB71' : 'currentColor'}
        />
        <path
          d='M4 12C4 9.79203 5.79205 8 8.00006 8H12.0001V16H8.00006C5.79205 16.0001 4 14.208 4 12Z'
          fill={colorful ? '#874FFF' : 'currentColor'}
        />
        <path
          d='M4 4.00003C4 1.79203 5.79205 0 8.00006 0H12.0001V7.99997H8.00006C5.79205 7.99997 4 6.20803 4 4.00003Z'
          fill={colorful ? '#FF3737' : 'currentColor'}
        />
        <path
          d='M12 0H16.0001C18.2081 0 20.0001 1.79203 20.0001 4.00003C20.0001 6.20803 18.2081 7.99997 16.0001 7.99997H12V0Z'
          fill={colorful ? '#FF7237' : 'currentColor'}
        />
        <path
          d='M20.0001 12C20.0001 14.208 18.2081 16.0001 16.0001 16.0001C13.792 16.0001 12 14.208 12 12C12 9.79203 13.792 8 16.0001 8C18.2081 8 20.0001 9.79203 20.0001 12Z'
          fill={colorful ? '#00B6FF' : 'currentColor'}
        />
      </g>
      <defs>
        <clipPath id='clip0_1256_132056'>
          <rect
            width='24'
            height='24'
            fill='white'
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const FigmaLogoOutlined = (props: {
  colorful?: boolean;
  className?: string;
}) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      className={props.className}>
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M8.25 2C7.51349 2 6.81155 2.28629 6.29747 2.78895C5.78414 3.29087 5.5 3.96677 5.5 4.66667C5.5 5.36657 5.78414 6.04247 6.29747 6.54438C6.81155 7.04705 7.51349 7.33333 8.25 7.33333H11V2H8.25ZM13 2V7.33333H15.75C16.1142 7.33333 16.4744 7.26316 16.8097 7.12736C17.145 6.99157 17.4482 6.79311 17.7025 6.54438C17.9569 6.29571 18.1574 6.00171 18.2938 5.67977C18.4301 5.35788 18.5 5.0137 18.5 4.66667C18.5 4.31964 18.4301 3.97545 18.2938 3.65356C18.1574 3.33162 17.9569 3.03763 17.7025 2.78895C17.4482 2.54022 17.145 2.34177 16.8097 2.20598C16.4744 2.07017 16.1142 2 15.75 2H13ZM18.6884 8.33334C18.8324 8.22191 18.9702 8.10211 19.1008 7.9744C19.5429 7.54211 19.8948 7.02769 20.1353 6.45991C20.3759 5.89208 20.5 5.28266 20.5 4.66667C20.5 4.05067 20.3759 3.44126 20.1353 2.87342C19.8948 2.30564 19.5429 1.79122 19.1008 1.35894C18.6587 0.926696 18.1351 0.584984 17.5605 0.352241C16.9858 0.119512 16.3707 0 15.75 0H8.25C6.99738 0 5.79167 0.486331 4.89923 1.35894C4.00603 2.23228 3.5 3.42165 3.5 4.66667C3.5 5.91169 4.00603 7.10105 4.89923 7.9744C5.03021 8.10247 5.16794 8.22222 5.31158 8.33333C5.16794 8.44445 5.03021 8.5642 4.89923 8.69227C4.00603 9.56562 3.5 10.755 3.5 12C3.5 13.245 4.00603 14.4344 4.89923 15.3077C5.03022 15.4358 5.16795 15.5556 5.31159 15.6667C5.16795 15.7778 5.03022 15.8975 4.89923 16.0256C4.00603 16.899 3.5 18.0883 3.5 19.3333C3.5 20.5784 4.00603 21.7677 4.89923 22.6411C5.79167 23.5137 6.99738 24 8.25 24C9.5026 24 10.7083 23.5137 11.6008 22.6411C12.494 21.7677 13 20.5784 13 19.3333V15.8051C13.2922 16.0089 13.6073 16.1799 13.9395 16.3144C14.5142 16.5472 15.1293 16.6667 15.75 16.6667C16.3707 16.6667 16.9858 16.5472 17.5605 16.3144C18.1351 16.0817 18.6587 15.74 19.1008 15.3077C19.5429 14.8754 19.8948 14.361 20.1353 13.7932C20.3759 13.2254 20.5 12.616 20.5 12C20.5 11.384 20.3759 10.7746 20.1353 10.2068C19.8948 9.63898 19.5429 9.12456 19.1008 8.69227C18.9702 8.56456 18.8324 8.44476 18.6884 8.33334ZM11 14.6667V9.33333H8.25C7.51349 9.33333 6.81155 9.61962 6.29747 10.1223C5.78414 10.6242 5.5 11.3001 5.5 12C5.5 12.6999 5.78414 13.3758 6.29747 13.8777C6.81155 14.3804 7.51349 14.6667 8.25 14.6667H11ZM11 16.6667H8.25C7.51349 16.6667 6.81155 16.953 6.29747 17.4556C5.78414 17.9575 5.5 18.6334 5.5 19.3333C5.5 20.0332 5.78414 20.7091 6.29747 21.2111C6.81155 21.7137 7.51349 22 8.25 22C8.98651 22 9.6884 21.7137 10.2025 21.2111C10.7159 20.7091 11 20.0332 11 19.3333V16.6667ZM15.75 9.33333C15.3858 9.33333 15.0256 9.4035 14.6903 9.53931C14.355 9.6751 14.0518 9.87356 13.7975 10.1223C13.5431 10.371 13.3426 10.665 13.2062 10.9869C13.0699 11.3088 13 11.653 13 12C13 12.347 13.0699 12.6912 13.2062 13.0131C13.3426 13.335 13.5431 13.629 13.7975 13.8777C14.0518 14.1264 14.355 14.3249 14.6903 14.4607C15.0256 14.5965 15.3858 14.6667 15.75 14.6667C16.1142 14.6667 16.4744 14.5965 16.8097 14.4607C17.145 14.3249 17.4482 14.1264 17.7025 13.8777C17.9569 13.629 18.1574 13.335 18.2938 13.0131C18.4301 12.6912 18.5 12.347 18.5 12C18.5 11.653 18.4301 11.3088 18.2938 10.9869C18.1574 10.665 17.9569 10.371 17.7025 10.1223C17.4482 9.87356 17.145 9.6751 16.8097 9.53931C16.4744 9.4035 16.1142 9.33333 15.75 9.33333Z'
        fill='currentColor'
      />
    </svg>
  );
};

export const DribbleLogo = (props: {
  colorful?: boolean;
  className?: string;
}) => {
  const { colorful = true } = props;

  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      className={props.className}>
      <path
        d='M12 23.625C18.4203 23.625 23.625 18.4203 23.625 12C23.625 5.57969 18.4203 0.375 12 0.375C5.57969 0.375 0.375 5.57969 0.375 12C0.375 18.4203 5.57969 23.625 12 23.625Z'
        fill={colorful ? '#EA4C89' : 'none'}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M12 0C5.37527 0 0 5.37527 0 12C0 18.6248 5.37527 24 12 24C18.6117 24 24 18.6248 24 12C24 5.37527 18.6117 0 12 0ZM19.9262 5.53145C21.3579 7.27549 22.217 9.50107 22.243 11.9089C21.9046 11.8439 18.5206 11.154 15.1106 11.5835C15.0325 11.4143 14.9675 11.2321 14.8894 11.0499C14.6811 10.5554 14.4469 10.0477 14.2126 9.56618C17.9869 8.0304 19.705 5.81779 19.9262 5.53145ZM12 1.77007C14.603 1.77007 16.9848 2.74621 18.7939 4.34707C18.6117 4.60738 17.0629 6.67679 13.4186 8.04338C11.7397 4.95878 9.87855 2.43384 9.5922 2.04338C10.3601 1.86117 11.1671 1.77007 12 1.77007ZM7.63995 2.73319C7.91325 3.09761 9.73538 5.63558 11.4404 8.65508C6.65076 9.9306 2.42083 9.90458 1.96529 9.90458C2.62907 6.72885 4.77657 4.08676 7.63995 2.73319ZM1.74404 12.0131C1.74404 11.9089 1.74404 11.8048 1.74404 11.7007C2.18655 11.7136 7.15835 11.7787 12.2733 10.243C12.5727 10.8156 12.846 11.4013 13.1063 11.9869C12.9761 12.026 12.8329 12.0651 12.7028 12.1041C7.41865 13.8091 4.60738 18.4685 4.3731 18.859C2.7462 17.0499 1.74404 14.6421 1.74404 12.0131ZM12 22.256C9.6312 22.256 7.44469 21.449 5.71367 20.0954C5.89588 19.718 7.97827 15.7094 13.757 13.692C13.783 13.679 13.7961 13.679 13.8221 13.666C15.2668 17.4013 15.8525 20.5379 16.0087 21.436C14.7722 21.9696 13.4186 22.256 12 22.256ZM17.7136 20.4989C17.6096 19.8742 17.0629 16.8807 15.7223 13.1974C18.9371 12.6898 21.7484 13.5228 22.0998 13.6399C21.6573 16.4902 20.0173 18.9501 17.7136 20.4989Z'
        fill={colorful ? '#C32361' : 'currentColor'}
      />
    </svg>
  );
};

const FacebookLogo = (props: { className?: string; colorful?: boolean }) => {
  const { colorful = true } = props;

  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      className={props.className}>
      <path
        d='M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z'
        fill={colorful ? '#1877F2' : 'currentColor'}
      />
    </svg>
  );
};

const AppleLogo = (props: { className?: string }) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      className={props.className}>
      <path
        d='M20.8426 17.1449C20.5099 17.9135 20.1161 18.6211 19.6598 19.2715C19.0379 20.1583 18.5286 20.7721 18.1362 21.113C17.5278 21.6724 16.876 21.959 16.178 21.9753C15.6769 21.9753 15.0726 21.8327 14.3691 21.5434C13.6634 21.2555 13.0148 21.113 12.4218 21.113C11.7998 21.113 11.1328 21.2555 10.4193 21.5434C9.70475 21.8327 9.1291 21.9834 8.68898 21.9984C8.01963 22.0269 7.35246 21.7322 6.6865 21.113C6.26145 20.7422 5.7298 20.1067 5.09291 19.2063C4.40957 18.2449 3.84778 17.13 3.40766 15.8589C2.9363 14.486 2.70001 13.1565 2.70001 11.8694C2.70001 10.3951 3.01859 9.12345 3.65671 8.05784C4.15821 7.20191 4.82539 6.52672 5.66041 6.03105C6.49543 5.53539 7.39768 5.2828 8.36931 5.26664C8.90096 5.26664 9.59815 5.43109 10.4645 5.75429C11.3285 6.07858 11.8832 6.24303 12.1264 6.24303C12.3083 6.24303 12.9245 6.05074 13.9692 5.66738C14.9571 5.31186 15.7909 5.16466 16.474 5.22264C18.3249 5.37202 19.7155 6.10167 20.6403 7.41619C18.9849 8.4192 18.1661 9.82403 18.1824 11.6262C18.1973 13.03 18.7065 14.1981 19.7074 15.1256C20.1609 15.5561 20.6675 15.8888 21.231 16.1251C21.1088 16.4795 20.9798 16.819 20.8426 17.1449ZM16.5976 0.440369C16.5976 1.54062 16.1956 2.56792 15.3944 3.51878C14.4275 4.64917 13.258 5.30236 11.9898 5.19929C11.9737 5.06729 11.9643 4.92837 11.9643 4.78239C11.9643 3.72615 12.4241 2.59576 13.2407 1.67152C13.6483 1.20356 14.1668 0.814453 14.7955 0.504058C15.4229 0.198295 16.0164 0.0292007 16.5745 0.000244141C16.5908 0.147331 16.5976 0.294426 16.5976 0.440355V0.440369Z'
        fill='currentColor'
      />
    </svg>
  );
};

const TwitterLogo = (props: { className?: string }) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      className={props.className}>
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M15.9455 23L10.396 15.0901L3.44886 23H0.509766L9.09209 13.2311L0.509766 1H8.05571L13.286 8.45502L19.8393 1H22.7784L14.5943 10.3165L23.4914 23H15.9455ZM19.2185 20.77H17.2398L4.71811 3.23H6.6971L11.7121 10.2532L12.5793 11.4719L19.2185 20.77Z'
        fill='currentColor'
      />
    </svg>
  );
};

export interface CommonProps {
  social: 'google' | 'facebook' | 'apple' | 'twitter' | 'figma' | 'dribble';
  disabled?: boolean;
  theme?: 'brand' | 'color' | 'gray';
  size?: keyof typeof styles.sizes;
}

export interface ButtonProps
  extends CommonProps,
    DetailedHTMLProps<
      Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color' | 'slot'>,
      HTMLButtonElement
    > {
  slot?: AriaButtonProps['slot'];
}

interface LinkProps
  extends CommonProps,
    DetailedHTMLProps<
      Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'color'>,
      HTMLAnchorElement
    > {}

export type Props = ButtonProps | LinkProps;

const SocialButton = forwardRef<HTMLButtonElement, Props>(
  (
    {
      size = 'lg',
      theme = 'brand',
      social,
      className,
      children,
      onClick,
      disabled,
      ...rest
    },
    ref
  ) => {
    const Component = 'href' in rest ? 'a' : AriaButton;

    const isIcon = !children;

    const socialToColor = {
      google: 'gray',
      facebook: 'facebook',
      apple: 'black',
      twitter: 'black',
      figma: 'black',
      dribble: 'dribble',
    } as const;

    const colorStyles =
      theme === 'brand'
        ? styles.colors[socialToColor[social]]
        : styles.colors.gray;

    const logos = {
      google: GoogleLogo,
      facebook: FacebookLogo,
      apple: AppleLogo,
      twitter: TwitterLogo,
      figma: theme === 'gray' ? FigmaLogoOutlined : FigmaLogo,
      dribble: DribbleLogo,
    };

    const Logo = logos[social];

    return (
      <Component
        isDisabled={disabled}
        type='button'
        // Remove `any` type assertion after splitting
        // Component into Link and Button.
        {...(rest as any)}
        onPress={(event) => {
          // @ts-expect-error FIX ME
          rest.onPress?.(event);
          onClick?.(event as any);
        }}
        ref={ref}
        data-icon-only={isIcon}
        className={cx(
          styles.common.root,
          styles.sizes[size].root,
          colorStyles.root,
          className
        )}>
        <Logo
          className={cx(
            styles.common.icon,
            theme === 'gray'
              ? colorStyles.icon
              : theme === 'brand' &&
                (social === 'facebook' ||
                  social === 'apple' ||
                  social === 'twitter')
              ? 'text-white'
              : theme === 'color' &&
                (social === 'apple' || social === 'twitter')
              ? 'text-alpha-black'
              : ''
          )}
          colorful={
            (theme === 'brand' &&
              (social === 'google' || social === 'figma')) ||
            (theme === 'color' &&
              (social === 'google' ||
                social === 'facebook' ||
                social === 'figma' ||
                social === 'dribble'))
          }
        />

        {children}
      </Component>
    );
  }
);

export default SocialButton;