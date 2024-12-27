'use client';

import Button from '@/components/shared/buttons/button';
import { Input } from '@/components/shared/inputs/input';
import { BackgroundPattern } from '@/components/shared-assets/background-elements/patterns';
import { LogoMark } from '@/components/shared-assets/auth/logomark';
import SocialButton from '@/components/shared/buttons/social-button';
import { cx } from '@/components/utils';
import { useTheme } from 'next-themes';
import { toast } from 'sonner';

import { signIn } from 'next-auth/react';
import { ContentDivider } from '@/components/application/content-dividers/content-dividers';
import { FeaturedIconBase } from '@/components/foundations/featured-icon/featured-icons';
import {
  AlertCircle,
  CheckCircle,
  Loading03,
} from '@a-peak-works/untitledui-icons';
import { CloseButton } from '@/components/shared/buttons/close-button';
import { FormEvent, useState } from 'react';
import { Form } from '@/components/shared/inputs/form/form';

export const LoginScreen = () => {
  const { systemTheme } = useTheme();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = form.get('email') as string;
    setLoading(true);
    const res = await signIn('email', {
      email,
      redirect: false, // Prevent immediate redirect to handle feedback
      callbackUrl: '/dashboard', // Change to your desired post-login route
    });

    toast.custom((t) => (
      <div
        key={t}
        className={cx(
          'relative light-mode z-[var(--z-index)] flex max-w-full flex-col gap-4 rounded-xl border border-primary bg-primary_alt p-4 shadow-lg xs:w-[var(--width)] xs:flex-row',
          systemTheme === 'dark' && 'dark-mode'
        )}>
        <FeaturedIconBase
          icon={res?.error ? AlertCircle : CheckCircle}
          color={res?.error ? 'error' : 'success'}
          theme='outline'
          size='md'
        />

        <div className='flex flex-1 flex-col gap-3 md:pr-8'>
          <div className='flex flex-col gap-1'>
            <p className='text-fg-primary tt-sm-semi'>
              {res?.error ? 'Something is happened' : 'Success!'}
            </p>
            <p className='text-fg-secondary tt-sm'>
              {res?.error
                ? res?.error || "We couldn't log you in. Please try again."
                : 'Check your email for a link to log in.'}
            </p>
          </div>

          <div className='flex gap-3'>
            <Button
              onClick={() => toast.dismiss(t)}
              size='sm'
              color='link-gray'>
              Dismiss
            </Button>
          </div>
        </div>

        <div className='absolute right-2 top-2 flex items-center justify-center'>
          <CloseButton
            onClick={() => toast.dismiss(t)}
            size='sm'
            label='Dismiss'
          />
        </div>
      </div>
    ));
    setLoading(false);
  };

  return (
    <section className='relative min-h-screen overflow-hidden bg-primary px-xl py-6xl md:px-4xl md:pt-9xl'>
      <div className='relative z-10 mx-auto flex w-full flex-col gap-4xl sm:max-w-[360px]'>
        <div className='flex flex-col items-center gap-3xl text-center'>
          <div className='relative'>
            <LogoMark
              size='lg'
              className='hidden md:block'
            />
            <LogoMark
              size='md'
              className='md:hidden'
            />
            <BackgroundPattern
              pattern='circle'
              className='absolute left-1/2 top-1/2 z-0 hidden -translate-x-1/2 -translate-y-1/2 md:block'
            />
            <BackgroundPattern
              pattern='circle'
              size='md'
              className='absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 md:hidden'
            />
          </div>
          <div className='z-10 flex flex-col gap-md md:gap-lg'>
            <h1 className='text-primary td-xs-semi md:td-sm-semi'>
              Log in to your account
            </h1>
            <p className='text-tertiary tt-md'>
              Welcome back! Please enter your details.
            </p>
          </div>
        </div>

        <Form
          onSubmit={onSubmit}
          className='z-10 flex flex-col gap-3xl'>
          <div className='flex flex-col gap-xl'>
            <Input
              isRequired
              type='email'
              name='email'
              placeholder='Enter your email'
              size='md'
            />
            <Button
              iconLeading={
                loading ? <Loading03 className='animate-spin' /> : undefined
              }
              type='submit'
              size='lg'>
              {!loading && 'Continue with email'}
            </Button>
          </div>

          <ContentDivider type='single-line'>
            <span className='text-tertiary tt-sm-md'>OR</span>
          </ContentDivider>

          <div className='flex flex-col gap-lg'>
            <SocialButton
              social='google'
              theme='color'
              onClick={() =>
                signIn('google', {
                  callbackUrl: '/dashboard',
                })
              }>
              Continue with Google
            </SocialButton>
            <SocialButton
              social='facebook'
              theme='color'
              onClick={() =>
                signIn('facebook', {
                  callbackUrl: '/dashboard',
                })
              }>
              Continue with Facebook
            </SocialButton>
            <SocialButton
              social='apple'
              theme='color'
              onClick={() =>
                signIn('apple', {
                  callbackUrl: '/dashboard',
                })
              }>
              Continue with Apple
            </SocialButton>
          </div>
        </Form>

        <div className='z-10 flex justify-center gap-xs text-center'>
          <span className='text-tertiary tt-sm'>Don't have an account?</span>
          <Button
            color='link-color'
            size='md'
            href='/signup'>
            Sign up
          </Button>
        </div>
      </div>
    </section>
  );
};
