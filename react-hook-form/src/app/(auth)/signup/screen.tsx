'use client';

import Button from '@/components/shared/buttons/button';
import { Input } from '@/components/shared/inputs/input';
import { BackgroundPattern } from '@/components/shared-assets/background-elements/patterns';
import { LogoMark } from '@/components/shared-assets/auth/logomark';
import SocialButton from '@/components/shared/buttons/social-button';
import { FormField, HookForm } from '@/components/shared/inputs/form/hook-form';
import { cx } from '@/components/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTheme } from 'next-themes';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import {
  LoginScreenValidationType,
  loginValidation,
} from '@/schemes/login-screen';
import { useState } from 'react';
import { FeaturedIconBase } from '@/components/foundations/featured-icon/featured-icons';
import { CloseButton } from '@/components/shared/buttons/close-button';
import {
  CheckCircle,
  AlertCircle,
  Loading03,
} from '@a-peak-works/untitledui-icons';

export const SignupScreen = () => {
  const { systemTheme } = useTheme();
  const [loading, setLoading] = useState(false);

  const form = useForm<LoginScreenValidationType>({
    resolver: zodResolver(loginValidation),
  });

  const onSubmit = async (form: LoginScreenValidationType) => {
    setLoading(true);
    const res = await fetch('/api/sign-up', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
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
    <section className='min-h-screen overflow-hidden bg-secondary px-xl py-6xl md:px-4xl md:pt-9xl'>
      <div className='mx-auto flex w-full flex-col gap-4xl sm:max-w-[440px]'>
        <div className='flex flex-col items-center gap-3xl text-center'>
          <div className='relative'>
            <BackgroundPattern
              pattern='grid'
              className='absolute left-1/2 top-1/2 z-0 hidden -translate-x-1/2 -translate-y-1/2 md:block'
            />
            <BackgroundPattern
              pattern='grid'
              size='md'
              className='absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 md:hidden'
            />
            <LogoMark
              size='lg'
              className='relative z-10 hidden md:block'
            />
            <LogoMark
              size='md'
              className='relative z-10 md:hidden'
            />
          </div>
          <div className='z-10 flex flex-col gap-md md:gap-lg'>
            <h1 className='text-primary td-xs-semi md:td-sm-semi'>
              Create an account
            </h1>
            <p className='text-tertiary tt-md'>Start your 30-day free trial.</p>
          </div>
        </div>

        <HookForm
          form={form}
          onSubmit={form.handleSubmit(onSubmit)}
          className='relative z-10 -mx-4 flex flex-col gap-3xl bg-primary px-xl py-4xl sm:mx-0 sm:rounded-xl sm:px-5xl sm:shadow-md'>
          <div className='flex flex-col gap-2xl'>
            <FormField
              name='name'
              control={form.control}>
              {({ field, formState }) => (
                <Input
                  {...field}
                  isInvalid={!!formState.errors.email}
                  isRequired
                  hideRequiredIndicator
                  label='Name'
                  name='name'
                  placeholder='Enter your name'
                  size='md'
                />
              )}
            </FormField>
            <FormField
              name='email'
              control={form.control}>
              {({ field, formState }) => (
                <Input
                  {...field}
                  isInvalid={!!formState.errors.email}
                  isRequired
                  hideRequiredIndicator
                  label='Email'
                  type='email'
                  name='email'
                  placeholder='Enter your email'
                  size='md'
                />
              )}
            </FormField>
            <FormField
              name='password'
              control={form.control}>
              {({ field, formState }) => (
                <Input
                  {...field}
                  isInvalid={!!formState.errors.password}
                  isRequired
                  hideRequiredIndicator
                  label='Password'
                  type='password'
                  name='password'
                  size='md'
                  placeholder='Create a password'
                  hint='Must be at least 8 characters.'
                  minLength={8}
                />
              )}
            </FormField>
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
        </HookForm>

        <div className='z-10 flex justify-center gap-xs text-center'>
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
