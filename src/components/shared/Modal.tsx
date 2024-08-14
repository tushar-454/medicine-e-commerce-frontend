import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { RxCross2 } from 'react-icons/rx';

type ModalType = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title: string;
};

const Modal = ({ children, isOpen, onClose, title }: ModalType) => {
  const modalRoot = document.getElementById('modal-root');

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === 'Escape' ? onClose() : null;
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [isOpen, onClose]);

  return isOpen
    ? ReactDOM.createPortal(
        <div className='absolute inset-0 top-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='relative w-full rounded bg-white p-4 shadow-lg md:w-[768px]'>
            <div className='flex items-center justify-between'>
              <h2 className='text-xl font-semibold text-surfie-green-500'>
                {title}
              </h2>
              <button onClick={onClose}>
                <RxCross2 className='cursor-pointer text-2xl' />
              </button>
            </div>
            {children}
          </div>
        </div>,
        modalRoot as Element,
      )
    : null;
};

export default Modal;
