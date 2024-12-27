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
import { signIn } from 'next-auth/react';
import { Checkbox } from '@/components/shared/checkbox/checkbox';
import {
  AlertCircle,
  CheckCircle,
  Loading03,
} from '@a-peak-works/untitledui-icons';
import { useState } from 'react';
import { CloseButton } from '@/components/shared/buttons/close-button';
import { FeaturedIconBase } from '@/components/foundations/featured-icon/featured-icons';

export const LoginScreen = () => {
  const { systemTheme } = useTheme();
  const [loading, setLoading] = useState(false);

  const form = useForm<LoginScreenValidationType>({
    resolver: zodResolver(loginValidation),
  });

  const onSubmit = async (data: LoginScreenValidationType) => {
    setLoading(true);
    const res = await signIn('credentials', {
      ...data,
      redirect: false, // Prevent immediate redirect to handle feedback
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
              Log in to your account
            </h1>
            <p className='text-tertiary tt-md'>
              Welcome back! Please enter your details.
            </p>
          </div>
        </div>

        <div className='flex justify-center gap-xs text-center md:hidden'>
          <span className='text-tertiary tt-sm'>Don't have an account?</span>
          <Button
            color='link-color'
            size='md'
            href='#'>
            Sign up
          </Button>
        </div>

        <HookForm
          form={form}
          onSubmit={form.handleSubmit(onSubmit)}
          className='z-10 -mx-4 flex flex-col gap-3xl bg-primary px-xl pb-5xl pt-4xl sm:mx-0 sm:rounded-xl sm:px-4xl sm:shadow-md'>
          <div className='flex flex-col gap-2xl'>
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
                  placeholder='••••••••'
                />
              )}
            </FormField>
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
        </HookForm>

        <div className='hidden justify-center gap-xs text-center md:flex'>
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
