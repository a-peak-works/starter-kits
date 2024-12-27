import Button from '@/components/shared/buttons/button';

import { DialogTrigger, Heading } from 'react-aria-components';
import { Input } from '@/components/shared/inputs/input';
import { PaymentInput } from '@/components/shared/inputs/input/input-payment';
import { useEffect, useState } from 'react';
import CreditCardComponent from '@/components/shared-assets/credit-card/credit-card';

import { Dialog, Modal, ModalOverlay } from './modal';
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
} from '@stripe/react-stripe-js';
import { CardCVC } from '@/components/shared/inputs/stripe/input-cvv';
import { CardExpiry } from '@/components/shared/inputs/stripe/input-expiry';
import { CardNumber } from '@/components/shared/inputs/stripe/input-number';
import { FeaturedIconBase } from '@/components/foundations/featured-icon/featured-icons';
import { CloseButton } from '@/components/shared/buttons/close-button';
import { BackgroundPattern } from '@/components/shared-assets/background-elements/patterns';
import { CreditCardShield } from '@a-peak-works/untitledui-icons';

export const PaymentDetails = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) => {
  return (
    <DialogTrigger
      isOpen={isOpen}
      onOpenChange={setIsOpen}>
      <ModalOverlay isDismissable>
        <Modal>
          <Dialog>
            <div className='relative w-full overflow-hidden rounded-xl bg-primary shadow-xl transition-all sm:max-w-[480px]'>
              <div className='absolute right-4 top-4'>
                <CloseButton
                  onClick={() => setIsOpen(false)}
                  theme='light'
                  size='lg'
                />
              </div>
              <div className='flex flex-col gap-xl px-xl pt-2xl sm:px-3xl sm:pt-3xl'>
                <div className='relative w-max'>
                  <FeaturedIconBase
                    color='gray'
                    size='lg'
                    theme='modern'
                    icon={CreditCardShield}
                  />

                  <BackgroundPattern
                    pattern='circle'
                    size='sm'
                    className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
                  />
                </div>
                <div className='z-10 flex flex-col gap-xs'>
                  <Heading
                    slot='title'
                    className='text-primary tt-lg-semi'>
                    Update payment method
                  </Heading>
                  <p className='text-tertiary tt-sm'>
                    Update your card details.
                  </p>
                </div>
              </div>
              <div className='h-5 w-full' />
              <div className='grid grid-flow-row grid-cols-2 gap-xl px-xl sm:grid-cols-[1fr_112px] sm:px-3xl'>
                <Input
                  size='md'
                  label='Name on card'
                  className='order-first max-sm:col-span-2'
                />
                <CardExpiry
                  size='md'
                  label='Expiry'
                  wrapperClassName='order-3 col-span-1 sm:order-2'
                />
                <CardNumber
                  size='md'
                  label='Card number'
                  wrapperClassName='order-2 col-span-1 max-sm:col-span-2 sm:order-3'
                />
                <CardCVC
                  size='md'
                  label='CVV'
                  wrapperClassName='order-last col-span-1'
                  placeholder='•••'
                />
              </div>
              <div className='z-10 flex flex-1 flex-col-reverse gap-lg p-xl pt-3xl sm:grid sm:grid-cols-2 sm:px-3xl sm:pb-3xl sm:pt-4xl [&>*]:grow'>
                <Button
                  color='secondary-gray'
                  size='lg'
                  onClick={() => setIsOpen(false)}>
                  Cancel
                </Button>
                <Button
                  color='primary'
                  size='lg'
                  onClick={() => setIsOpen(false)}>
                  Update
                </Button>
              </div>
            </div>
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
};
