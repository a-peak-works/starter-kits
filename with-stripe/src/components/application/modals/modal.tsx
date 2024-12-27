import { cx } from '@/components/utils';
import {
  Modal as AriaModal,
  DialogTrigger as AriaDialogTrigger,
  Dialog as AriaDialog,
  ModalOverlay as AriaModelOverlay,
  DialogProps,
  ModalOverlayProps,
} from 'react-aria-components';

export default {
  title: 'Application/Modals',
};

export const DialogTrigger = AriaDialogTrigger;

export const ModalOverlay = (props: ModalOverlayProps) => (
  <AriaModelOverlay
    {...props}
    className={(classes) =>
      cx(
        'fixed inset-0 z-50 flex min-h-dvh w-full items-end justify-center overflow-y-auto bg-overlay bg-opacity-70 px-4 pb-[clamp(16px,8vh,64px)] pt-4 outline-none backdrop-blur-[6px] sm:items-center sm:justify-center sm:p-8',
        classes.isEntering && 'duration-300 ease-out animate-in fade-in',
        classes.isExiting && 'duration-200 ease-in animate-out fade-out',
        typeof props.className === 'function'
          ? props.className(classes)
          : props.className
      )
    }
  />
);

export const Modal = (props: ModalOverlayProps) => (
  <AriaModal
    {...props}
    className={(classes) =>
      cx(
        classes.isEntering && 'duration-300 ease-out animate-in zoom-in-95',
        classes.isExiting && 'duration-200 ease-in animate-out zoom-out-95',
        'max-h-full w-full align-middle outline-none max-sm:overflow-y-auto max-sm:rounded-xl',
        typeof props.className === 'function'
          ? props.className(classes)
          : props.className
      )
    }
  />
);

export const Dialog = (props: DialogProps) => (
  <AriaDialog
    role='dialog'
    {...props}
    className='flex w-full items-center justify-center outline-none'
  />
);
