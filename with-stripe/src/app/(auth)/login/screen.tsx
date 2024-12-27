'use client';

import Button from '@/components/shared/buttons/button';
import { Input } from '@/components/shared/inputs/input';
import SocialButton from '@/components/shared/buttons/social-button';
import { cx } from '@/components/utils';
import { useTheme } from 'next-themes';
import { toast } from 'sonner';

import { signIn } from 'next-auth/react';

import { FeaturedIconBase } from '@/components/foundations/featured-icon/featured-icons';
import {
  AlertCircle,
  CheckCircle,
  Loading03,
} from '@a-peak-works/untitledui-icons';
import { CloseButton } from '@/components/shared/buttons/close-button';
import { FormEvent, useState } from 'react';
import { Form } from '@/components/shared/inputs/form/form';
import { Checkbox } from '@/components/shared/checkbox/checkbox';
import { LogoMark } from '@/components/shared-assets/auth/logomark';

export const LoginScreen = () => {
  const { systemTheme } = useTheme();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email') as string;
    const password = data.get('password') as string;
    setLoading(true);
    const res = await signIn('credentials', {
      email,
      password,
      redirect: false, // Prevent immediate redirect to handle feedback
      callbackUrl: '/dashboard',
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
                : 'You have successfully logged in.'}
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
    <section className='min-h-screen bg-primary px-xl py-6xl sm:bg-secondary md:px-4xl md:pt-9xl'>
      <div className='flex w-full flex-col gap-3xl bg-primary sm:mx-auto sm:max-w-[440px] sm:rounded-xl sm:px-5xl sm:py-4xl sm:shadow-sm'>
        <div className='flex flex-col items-center gap-3xl text-center'>
          <LogoMark
            size='lg'
            className='hidden md:block'
          />
          <LogoMark
            size='md'
            className='md:hidden'
          />
          <div className='flex flex-col gap-md'>
            <h1 className='text-primary td-xs-semi'>Welcome back</h1>
            <p className='text-tertiary tt-md'>Please enter your details.</p>
          </div>
        </div>

        <Form
          onSubmit={onSubmit}
          className='flex flex-col gap-3xl'>
          <div className='flex flex-col gap-2xl'>
            <Input
              isRequired
              type='email'
              name='email'
              placeholder='Enter your email'
              size='md'
            />
            <Input
              isRequired
              type='password'
              name='password'
              size='md'
              placeholder='••••••••'
            />
          </div>

          <div className='flex items-center'>
            <Checkbox
              label='Remember for 30 days'
              name='remember'
            />

            <Button
              color='link-color'
              size='md'
              href='#'
              className='ml-auto'>
              Forgot password
            </Button>
          </div>

          <div className='flex flex-col gap-xl'>
            <Button
              iconLeading={
                loading ? (
                  <Loading03 className='animate-spin size-5' />
                ) : undefined
              }
              type='submit'
              size='lg'>
              {!loading && 'Sign in'}
            </Button>
            <SocialButton
              social='google'
              theme='color'>
              Sign in with Google
            </SocialButton>
          </div>
        </Form>

        <div className='flex justify-center gap-xs text-center'>
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
