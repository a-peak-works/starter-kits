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
import { useTranslations } from 'next-intl';

export const SignupScreen = () => {
  const t = useTranslations('sign_up');
  const btn = useTranslations('buttons');
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

    toast.custom((m) => (
      <div
        key={m}
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
            <p className='text-fg-secondary tt-sm'>
              {res.ok ? t('toasts.success') : t('toasts.error')}
            </p>
          </div>

          <div className='flex gap-3'>
            <Button
              onClick={() => toast.dismiss(m)}
              size='sm'
              color='link-gray'>
              {btn('dismiss')}
            </Button>
          </div>
        </div>

        <div className='absolute right-2 top-2 flex items-center justify-center'>
          <CloseButton
            onClick={() => toast.dismiss(m)}
            size='sm'
            label={btn('dismiss')}
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
            <h1 className='text-primary td-xs-semi'>{t('title')}</h1>
            <p className='text-tertiary tt-md'>{t('desc')}</p>
          </div>
        </div>

        <Form
          onSubmit={onSubmit}
          className='flex flex-col gap-3xl'>
          <div className='flex flex-col gap-2xl'>
            <Input
              isRequired
              name='name'
              placeholder={t('placeholders.name')}
              size='md'
            />
            <Input
              isRequired
              type='email'
              name='email'
              placeholder={t('placeholders.email')}
              size='md'
            />
            <Input
              isRequired
              type='password'
              name='password'
              size='md'
              placeholder={t('placeholders.password')}
              hint={t('hints.password')}
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
              {!loading && btn('get_started')}
            </Button>
            <SocialButton
              social='google'
              theme='color'>
              {btn('sign_up_with_google')}
            </SocialButton>
          </div>
        </Form>

        <div className='flex justify-center gap-xs text-center'>
          <span className='text-tertiary tt-sm'>
            {t('already_have_account')}
          </span>
          <Button
            href='/login'
            color='link-color'
            size='md'>
            {btn('log_in')}
          </Button>
        </div>
      </div>
    </section>
  );
};
