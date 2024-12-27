'use client';

import { ReactNode } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

const options: StripeElementsOptions = {
  clientSecret: process.env.STRIPE_SECRET_KEY as string,
};

export const ElementsProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Elements
      stripe={stripePromise}
      options={options}>
      {children}
    </Elements>
  );
};
