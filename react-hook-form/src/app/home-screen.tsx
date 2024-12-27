'use client';

import dynamic from 'next/dynamic';
import Button from '@/components/shared/buttons/button';
import Image from 'next/image';
import { Fragment } from 'react';
import { ArrowRight } from '@a-peak-works/untitledui-icons';
// import { Header } from '@/components/marketing/header-navigation/components/header';
import { BadgeGroup } from '@/components/shared/badges/badge-groups';
import { Input } from '@/components/shared/inputs/input';
import { HookForm, FormField } from '@/components/shared/inputs/form/hook-form';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import {
  HomeScreenValidationType,
  homeValidation,
} from '@/schemes/home-screen';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { useTheme } from 'next-themes';
import { cx } from '@/components/utils';
import Spiral from '../../public/marketing/spirals.webp';
import UntitledLogoMinimal from '@/components/foundations/logo/UntitledLogoMinimal';
import SocialButton from '@/components/shared/buttons/social-button';

const Header = dynamic(
  () =>
    import('@/components/marketing/header-navigation/components/header').then(
      (mod) => mod.Header
    ),
  { ssr: false }
);

export const HomeScreen = () => {
  const { systemTheme } = useTheme();

  const form = useForm<HomeScreenValidationType>({
    resolver: zodResolver(homeValidation),
    shouldFocusError: true,
  });

  const onSubmit = (data: HomeScreenValidationType) => {
    toast.custom((t) => (
      <div
        key={t}
        className={cx(
          'relative light-mode z-[var(--z-index)] flex max-w-full flex-col gap-4 rounded-xl border border-primary bg-primary p-4 shadow-lg xs:w-[var(--width)] xs:flex-row',
          systemTheme === 'dark' && 'dark-mode'
        )}>
        <pre className='text-primary bg-secondary p-4 w-full rounded-lg'>
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      </div>
    ));
  };

  return (
    <div className='relative overflow-hidden bg-primary'>
      {/* Background pattern */}
      <img
        aria-hidden='true'
        loading='lazy'
        src='/patterns/light/grid-dot-sm-desktop.svg'
        className='pointer-events-none absolute left-1/2 top-0 z-0 hidden max-w-none -translate-x-1/2 md:block dark:brightness-[0.2]'
      />
      <img
        aria-hidden='true'
        loading='lazy'
        src='/patterns/light/grid-dot-sm-mobile.svg'
        className='pointer-events-none absolute left-1/2 top-0 z-0 max-w-none -translate-x-1/2 md:hidden dark:brightness-[0.2]'
      />

      <Header />

      <section className='relative md:pb-24 md:pt-16'>
        <div className='mx-auto flex w-full max-w-container flex-col items-center md:gap-24 md:px-8 lg:flex-row lg:justify-between lg:gap-8'>
          <div className='flex w-full flex-col items-start px-4 pb-12 pt-16 md:p-0'>
            <h1 className='text-primary td-md-semi md:td-lg-semi lg:td-xl-semi'>
              Super simplified <br /> customer service
            </h1>
            <p className='mt-4 max-w-[480px] text-tertiary tt-lg md:mt-6 md:tt-xl'>
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more.
            </p>
            <ul className='mt-8 flex flex-col gap-4 pl-2 md:mt-12'>
              {[
                'Share inboxes with your team',
                'Deliver instant answers and embed answers',
                'Solve a problem or close a sale in real-time with chat',
              ].map((feat) => (
                <li
                  key={feat}
                  className='flex gap-3'>
                  <div className='flex size-7 shrink-0 items-center justify-center rounded-full bg-success-secondary text-featured-icon-light-fg-success'>
                    <svg
                      width={15}
                      height={13}
                      viewBox='0 0 13 11'
                      fill='none'>
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M11.0964 0.390037L3.93638 7.30004L2.03638 5.27004C1.68638 4.94004 1.13638 4.92004 0.736381 5.20004C0.346381 5.49004 0.236381 6.00004 0.476381 6.41004L2.72638 10.07C2.94638 10.41 3.32638 10.62 3.75638 10.62C4.16638 10.62 4.55638 10.41 4.77638 10.07C5.13638 9.60004 12.0064 1.41004 12.0064 1.41004C12.9064 0.490037 11.8164 -0.319963 11.0964 0.380037V0.390037Z'
                        fill='currentColor'
                      />
                    </svg>
                  </div>

                  <span className='text-tertiary tt-lg'>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className='w-full bg-primary px-4 md:max-w-lg md:rounded-3xl md:bg-tertiary md:p-10'>
            <HookForm
              form={form}
              onSubmit={form.handleSubmit(onSubmit)}
              className='border-t border-secondary bg-primary pb-16 pt-12 md:rounded-2xl md:border-none md:p-8'>
              <div className='flex flex-col items-center gap-6'>
                <UntitledLogoMinimal className='hidden size-10 md:block' />
                <div className='flex flex-col gap-2 text-center md:gap-3'>
                  <h2 className='text-primary td-xs-semi md:td-sm-semi'>
                    Create an account
                  </h2>
                  <p className='text-tertiary tt-md'>
                    Start your 30-day free trial
                  </p>
                </div>
              </div>

              <div className='mt-8 flex flex-col gap-5 md:mt-8'>
                <FormField
                  name='name'
                  control={form.control}>
                  {({ field }) => (
                    <Input
                      {...field}
                      isRequired
                      hideRequiredIndicator
                      name='name'
                      label='Name'
                      placeholder='Enter your name'
                      size='md'
                    />
                  )}
                </FormField>
                <FormField
                  name='email'
                  control={form.control}>
                  {({ field }) => (
                    <Input
                      {...field}
                      isRequired
                      hideRequiredIndicator
                      name='email'
                      type='email'
                      label='Email'
                      placeholder='Enter your email'
                      size='md'
                      isInvalid={!!form.formState.errors.email}
                    />
                  )}
                </FormField>
              </div>

              <div className='mt-6 flex flex-col gap-4 md:mt-8'>
                <Button
                  type='submit'
                  size='lg'>
                  Get started
                </Button>
                <SocialButton
                  social='google'
                  theme='color'>
                  Sign up with Google
                </SocialButton>
              </div>

              <div className='mt-8 flex justify-center gap-1 md:mt-8'>
                <span className='text-tertiary tt-sm'>
                  Already have an account?
                </span>
                <Button
                  color='link-color'
                  size='md'
                  href='#'>
                  Log in
                </Button>
              </div>
            </HookForm>
          </div>
        </div>
      </section>
    </div>
  );
};
