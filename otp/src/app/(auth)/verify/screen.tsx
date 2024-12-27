'use client';

import Button from '@/components/shared/buttons/button';
import { cx } from '@/components/utils';
import { useTheme } from 'next-themes';
import { toast } from 'sonner';
import { signIn } from 'next-auth/react';

import { FeaturedIconBase } from '@/components/foundations/featured-icon/featured-icons';
import { AlertCircle, ArrowLeft, Mail01 } from '@a-peak-works/untitledui-icons';
import { CloseButton } from '@/components/shared/buttons/close-button';
import { useEffect, useState } from 'react';
import { BackgroundPattern } from '@/components/shared-assets/background-elements/patterns';
import { PinInput } from '@/components/shared/inputs/pin-input/pin-input';
import { notFound } from 'next/navigation';

export const VerifyScreen = ({ email }: { email: string }) => {
  const { systemTheme } = useTheme();
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');
  const formattedCallback = process.env.NEXT_PUBLIC_URL + '/';
  const formattedEmail = encodeURIComponent(email);
  const otpRequestUrl = `/api/auth/callback/email?email=${formattedEmail}&token=${value}&callbackUrl=${formattedCallback}`;

  const handleVerify = async () => {
    if (!value || value.length < 4) return;
    setLoading(true);

    try {
      window.location.href = otpRequestUrl;
    } catch (err) {
      toast.custom((t) => (
        <div
          key={t}
          className={cx(
            'relative light-mode z-[var(--z-index)] flex max-w-full flex-col gap-4 rounded-xl border border-primary bg-primary_alt p-4 shadow-lg xs:w-[var(--width)] xs:flex-row',
            systemTheme === 'dark' && 'dark-mode'
          )}>
          <FeaturedIconBase
            icon={AlertCircle}
            color='error'
            theme='outline'
            size='md'
          />

          <div className='flex flex-1 flex-col gap-3 md:pr-8'>
            <div className='flex flex-col gap-1'>
              <p className='text-fg-primary tt-sm-semi'>
                Something is happened
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
    }

    setLoading(false);
  };

  const handleResend = async () => {
    await signIn('email', {
      email,
      redirect: false, // Prevent immediate redirect to handle feedback
    });
  };

  useEffect(() => {
    if (!email) notFound();
  }, [email]);

  return (
    <section className='min-h-screen overflow-hidden bg-primary px-xl py-6xl md:px-4xl md:pt-9xl'>
      <div className='mx-auto flex w-full max-w-[360px] flex-col gap-4xl'>
        <div className='flex flex-col items-center gap-3xl text-center'>
          <div className='relative'>
            <FeaturedIconBase
              color='gray'
              theme='modern'
              size='xl'
              className='relative z-10'
              icon={Mail01}
            />
            <BackgroundPattern
              pattern='grid'
              size='lg'
              className='absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block'
            />
            <BackgroundPattern
              pattern='grid'
              size='md'
              className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:hidden'
            />
          </div>

          <div className='z-10 flex flex-col gap-md md:gap-lg'>
            <h1 className='text-primary td-xs-semi md:td-sm-semi'>
              Check your email
            </h1>
            <p className='text-tertiary tt-md'>
              We sent a verification link to{' '}
              <span className='font-medium'>olivia@untitledui.com</span>
            </p>
          </div>
        </div>

        <div className='flex flex-col items-center gap-3xl md:gap-4xl'>
          <div className='md:hidden'>
            <PinInput
              digits={4}
              size='sm'>
              <PinInput.Group
                value={value}
                onChange={(value) => setValue(value)}>
                <PinInput.Slot index={0} />
                <PinInput.Slot index={1} />
                <PinInput.Slot index={2} />
                <PinInput.Slot index={3} />
              </PinInput.Group>
            </PinInput>
          </div>
          <div className='hidden md:block'>
            <PinInput
              digits={4}
              size='md'>
              <PinInput.Group
                value={value}
                onChange={(value) => setValue(value)}>
                <PinInput.Slot index={0} />
                <PinInput.Slot index={1} />
                <PinInput.Slot index={2} />
                <PinInput.Slot index={3} />
              </PinInput.Group>
            </PinInput>
          </div>

          <div className='w-full'>
            <Button
              size='lg'
              className='w-full'
              onClick={handleVerify}>
              Verify email
            </Button>
          </div>
        </div>

        <div className='flex flex-col items-center gap-4xl text-center'>
          <p className='flex gap-xs'>
            <span className='text-tertiary tt-sm'>
              Didn't receive the email?
            </span>
            <Button
              onClick={handleResend}
              color='link-color'
              size='md'>
              Click to resend
            </Button>
          </p>
          <Button
            color='link-gray'
            size='md'
            href='/login'
            className='mx-auto'
            iconLeading={ArrowLeft}>
            Back to log in
          </Button>
        </div>
      </div>
    </section>
  );
};
