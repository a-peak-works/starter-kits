import { cx } from '@/components/utils';
import { TextField } from 'react-aria-components';
import Label from '@/components/shared/inputs/label';
import HintText from '@/components/shared/inputs/hint-text';
import React, { ElementRef, forwardRef, useState } from 'react';
import { InputBase, InputBaseProps } from '@/components/shared/inputs/input';
import {
  VisaIcon,
  MastercardIcon,
  AmexIcon,
  DiscoverIcon,
  UnionPayIcon,
} from '@/components/foundations/payment-icons';

const cardTypes = [
  {
    name: 'Visa',
    pattern: /^4[0-9]{3,}$/, // Visa card numbers start with 4 and are 13 or 16 digits long
    card: 'visa',
    icon: VisaIcon,
  },
  {
    name: 'MasterCard',
    pattern: /^5[1-5][0-9]{2,}$/, // MasterCard numbers start with 51-55 and are 16 digits long
    card: 'mastercard',
    icon: MastercardIcon,
  },
  {
    name: 'American Express',
    pattern: /^3[47][0-9]{2,}$/, // American Express numbers start with 34 or 37 and are 15 digits long
    card: 'amex',
    icon: AmexIcon,
  },
  {
    name: 'Discover',
    pattern: /^6(?:011|5[0-9]{2}|4[4-9][0-9])[0-9]{12}$/, // Discover card numbers start with 6011 or 65 and are 16 digits long
    card: 'discover',
    icon: DiscoverIcon,
  },
  {
    name: 'UnionPay',
    pattern: /^(62|88)[0-9]{14,17}$/, // UnionPay card numbers start with 62 or 88 and are between 15-19 digits long
    card: 'unionpay',
    icon: UnionPayIcon,
  },
  {
    name: 'Unknown',
    pattern: /.*/, // Fallback pattern for unknown cards
    card: 'unknown',
    icon: MastercardIcon,
  },
];

const detectCardType = (number: string) => {
  // Remove all spaces
  const sanitizedNumber = number.replace(/\D/g, '');

  // Find the matching card type
  const card = cardTypes.find((cardType) =>
    cardType.pattern.test(sanitizedNumber)
  );

  return card || cardTypes[cardTypes.length - 1];
};

export const formatCardNumber = (number: string) => {
  // Remove non-numeric characters
  const cleaned = number.replace(/\D/g, '');
  // Format the card number in groups of 4 digits
  const match = cleaned.match(/\d{1,4}/g);

  if (match) {
    return match.join(' ');
  }

  return cleaned;
};

interface PaymentInputProps extends Omit<InputBaseProps, 'icon'> {}

export const PaymentInput = forwardRef<
  ElementRef<typeof TextField>,
  PaymentInputProps
>(({ onChange, className, maxLength = 19, label, hint, ...props }, ref) => {
  const [cardNumber, setCardNumber] = useState(
    formatCardNumber(props.value || props.defaultValue || '')
  );

  // for card number change, to make XXXX XXXX XXXX XXXX format in input
  const handleCardNumberChange = (value: string) => {
    // Remove all non-numeric characters
    value = value.replace(/\D/g, '');

    // Return if the value is empty
    if (!value) {
      setCardNumber('');
      onChange?.('');
      return '';
    }

    // Format the card number in groups of 4 digits
    const formatted = formatCardNumber(value);

    setCardNumber(formatted);
    onChange?.(value);
    return value;
  };

  const card = detectCardType(cardNumber);

  return (
    <TextField
      ref={ref}
      aria-label={!label ? props?.placeholder : undefined}
      {...props}
      value={cardNumber}
      inputMode='numeric'
      maxLength={maxLength}
      onChange={handleCardNumberChange}
      className={(state) =>
        cx(
          'flex h-max w-full flex-col items-start justify-start gap-sm',
          typeof className === 'function' ? className(state) : className
        )
      }>
      {({ isDisabled, isInvalid, isRequired }) => (
        <>
          {label && <Label {...{ isRequired }}>{label}</Label>}

          <InputBase
            {...props}
            {...{ isDisabled, isInvalid }}
            icon={card.icon}
            inputClassName='pl-13'
            iconClassName='left-2.5 size-max'
          />

          {hint && <HintText {...{ isInvalid }}>{hint}</HintText>}
        </>
      )}
    </TextField>
  );
});

PaymentInput.displayName = 'PaymentInput';
