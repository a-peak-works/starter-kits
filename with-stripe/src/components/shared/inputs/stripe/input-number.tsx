import { cx, sortCx } from '@/components/utils';
import Label from '@/components/shared/inputs/label';
import HintText from '@/components/shared/inputs/hint-text';
import { Tooltip, TooltipTrigger } from '@/components/tooltips/tooltips';
import { HelpCircle, InfoCircle } from '@a-peak-works/untitledui-icons';
import {
  ComponentType,
  forwardRef,
  HTMLAttributes,
  ReactNode,
  useId,
  useState,
} from 'react';
import { CardNumberElement, useElements } from '@stripe/react-stripe-js';
import { variables as themes } from './styles';
import { useColorMode } from '@/hooks/use-color-mode';
import { StripeCardNumberElementChangeEvent } from '@stripe/stripe-js';

export interface InputBaseProps {
  id?: string;
  label?: string;
  hint?: ReactNode;
  tooltip?: string;
  size?: 'sm' | 'md';
  isDisabled?: boolean;
  placeholder?: string;
  iconClassName?: string;
  inputClassName?: string;
  wrapperClassName?: string;
  tooltipClassName?: string;
  icon?: ComponentType<HTMLAttributes<HTMLOrSVGElement>>;
}

export const InputBase = forwardRef<HTMLElement, InputBaseProps>(
  (
    { size = 'sm', placeholder, icon: Icon, isDisabled, tooltip, ...props },
    ref
  ) => {
    const [isInvalid, setIsInvalid] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [isBlur, setIsBlur] = useState(false);

    // Check if the input has a leading icon or tooltip
    const hasTrailingIcon = tooltip || isInvalid;
    const hasLeadingIcon = Icon;
    const colorMode = useColorMode();
    const variables = themes[colorMode];

    const inputProps: Record<string, unknown> = { placeholder };

    const _id = 'cardCVV-' + useId();
    const inputId = props.id || _id;
    inputProps['id'] = inputId;

    const sizes = sortCx({
      sm: {
        root: cx(
          'px-lg py-md',
          hasTrailingIcon && 'pr-9',
          hasLeadingIcon && 'pl-10'
        ),
        iconLeading: 'left-3',
        iconTrailing: 'right-3',
      },
      md: {
        root: cx(
          'px-3.5 py-2.5',
          hasTrailingIcon && 'pr-9.5',
          hasLeadingIcon && 'pl-10.5'
        ),
        iconLeading: 'left-3.5',
        iconTrailing: 'right-3.5',
      },
    });

    const handleOnChange = (event: StripeCardNumberElementChangeEvent) => {
      setIsInvalid(!!event.error);
    };

    const handleFocus = () => {
      setIsFocused(true);
      setIsBlur(false);
    };

    const handleBlur = () => {
      setIsBlur(true);
      setIsFocused(false);
    };

    return (
      <section
        ref={ref}
        className='relative w-full flex items-center'>
        {/* for leading icon or payment icon */}
        {Icon && (
          <Icon
            className={cx(
              'pointer-events-none absolute size-5 text-fg-quaternary',
              sizes[size].iconLeading,
              props.iconClassName
            )}
          />
        )}
        {/* input field, where all padding styles are applied */}
        <CardNumberElement
          {...inputProps}
          className={cx(
            'shadow-xs w-full ring-1 ring-inset ring-border-primary transition-all duration-100 ease-linear rounded-lg bg-primary enabled:hover:cursor-text',
            isDisabled && 'bg-disabled_subtle ring-border-disabled',
            isFocused && 'ring-2 ring-border-brand',
            isInvalid && 'ring-1 !ring-border-error',
            isInvalid && isFocused && 'ring-2',
            sizes[size].root,
            props.inputClassName
          )}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onChange={handleOnChange}
          options={{
            disabled: isDisabled,
            placeholder: placeholder,
            style: {
              base: {
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '24px',
                color: variables['text-primary'],
                '::placeholder': {
                  color: variables['text-placeholder'],
                },
                ':disabled': {
                  color: variables['text-disabled'],
                },
              },
              invalid: {
                color: variables['text-primary'],
              },
            },
          }}
        />

        {/* for tooltip and helping icon */}
        {tooltip && !isInvalid && (
          <Tooltip
            title={tooltip}
            placement='top'>
            <TooltipTrigger
              className={cx(
                'absolute cursor-pointer text-fg-quinary',
                sizes[size].iconTrailing,
                props.tooltipClassName
              )}>
              <HelpCircle className='size-4' />
            </TooltipTrigger>
          </Tooltip>
        )}

        {/* for invalid icon */}
        {isInvalid && (
          <InfoCircle
            className={cx(
              'pointer-events-none absolute size-4 text-fg-error-secondary',
              sizes[size].iconTrailing
            )}
          />
        )}
      </section>
    );
  }
);

InputBase.displayName = 'InputBase';

interface InputProps extends InputBaseProps {
  hideRequiredIndicator?: boolean;
}

export const CardNumber = forwardRef<HTMLDivElement, InputProps>(
  (
    {
      size = 'sm',
      placeholder,
      icon: Icon,
      label,
      hint,
      hideRequiredIndicator,
      wrapperClassName,
      ...props
    },
    ref
  ) => {
    const id = useId();
    const element = useElements();
    const labelId = id + '-label';

    const handleClick = () => {
      element?.getElement(CardNumberElement)?.focus();
    };

    return (
      <div
        ref={ref}
        aria-label={!label ? placeholder : undefined}
        {...props}
        className={cx(
          'group flex h-max w-full flex-col items-start justify-start gap-1.5',
          wrapperClassName
        )}>
        {label && (
          <Label
            htmlFor={labelId}
            onClick={handleClick}
            isRequired={
              hideRequiredIndicator ? !hideRequiredIndicator : undefined
            }>
            {label}
          </Label>
        )}

        <InputBase
          {...props}
          id={labelId}
          {...{ size, placeholder, icon: Icon }}
        />

        {hint && <HintText>{hint}</HintText>}
      </div>
    );
  }
);

CardNumber.displayName = 'CardNumber';
