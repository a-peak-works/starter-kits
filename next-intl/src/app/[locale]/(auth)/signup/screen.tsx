'use client';

import Button from '@/components/shared/buttons/button';
import { Input } from '@/components/shared/inputs/input';
import { LogoMark } from '@/components/shared-assets/auth/logomark';
import SocialButton from '@/components/shared/buttons/social-button';
import { cx } from '@/components/utils';
import { useTheme } from 'next-themes';
import { toast } from 'sonner';

import { FeaturedIconBase } from '@/components/foundations/featured-icon/featured-icons';
import { CloseButton } from '@/components/shared/buttons/close-button';
import {
  AlertCircle,
  CheckCircle,
  Loading03,
} from '@a-peak-works/untitledui-icons';
import { FormEvent, useState } from 'react';
import { Form } from '@/components/shared/inputs/form/form';

export const SignupScreen = () => {
  const { systemTheme } = useTheme();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get('name') as string;
    const email = form.get('email') as string;
    const password = form.get('password') as string;

    setLoading(true);
    const res = await fetch('/api/sign-up', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, name }),
    });

    const data = await res.json();

    toast.custom((t) => (
      <div
        key={t}
        className={cx(
          'relative light-mode z-[var(--z-index)] flex max-w-full flex-col gap-4 rounded-xl border border-primary bg-primary_alt p-4 shadow-lg xs:w-[var(--width)] xs:flex-row',
          systemTheme === 'dark' && 'dark-mode'
        )}>
        <FeaturedIconBase
          icon={res.ok ? CheckCircle : AlertCircle}
          color={res.ok ? 'success' : 'error'}
          theme='outline'
          size='md'
        />

        <div className='flex flex-1 flex-col gap-3 md:pr-8'>
          <div className='flex flex-col gap-1'>
            <p className='text-fg-primary tt-sm-semi'>
              {res.ok ? 'Success!' : 'Signup failed'}
            </p>
            <p className='text-fg-secondary tt-sm'>
              {res.ok
                ? "You've successfully signed up. Check your email for verification."
                : data?.error || 'Something went wrong. Please try again.'}
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
    <section className='min-h-dvh bg-primary px-xl py-6xl sm:bg-secondary md:px-4xl md:pb-[270px] md:pt-9xl'>
      <div className='flex w-full flex-col gap-3xl bg-primary sm:mx-auto sm:max-w-[440px] sm:rounded-xl sm:px-10 sm:py-8 sm:shadow-sm'>
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
            <h1 className='text-primary td-xs-semi'>Start your free trial</h1>
            <p className='text-tertiary tt-md'>
              Sign up in less than 2 minutes.
            </p>
          </div>
        </div>

        <Form
          onSubmit={onSubmit}
          className='flex flex-col gap-3xl'>
          <div className='flex flex-col gap-2xl'>
            <Input
              isRequired
              name='name'
              placeholder='Enter your name'
              size='md'
            />
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
              placeholder='Create a password'
              hint='Must be at least 8 characters.'
              minLength={8}
            />
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
              {!loading && 'Get started'}
            </Button>
            <SocialButton
              social='google'
              theme='color'>
              Sign up with Google
            </SocialButton>
          </div>
        </Form>

        <div className='flex justify-center gap-xs text-center'>
          <span className='text-tertiary tt-sm'>Already have an account?</span>
          <Button
            href='/login'
            color='link-color'
            size='md'>
            Log in
          </Button>
        </div>
      </div>
    </section>
  );
};
