import { X } from '@phosphor-icons/react';
import { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black opacity-70 flex items-center justify-center">
      <div className="p-4 text-center bg-white rounded shadow-lg space-y-4">
        {children}
        <button
          className=" text-purple-800 transition-all duration-200 hover:opacity-50 cursor-pointer"
          onClick={onClose}
          aria-label="Close modal settings"
          aria-hidden={!isOpen}
          aria-controls="open-modal-settings"
        >
          <X weight="bold" fontSize={20} />
        </button>
      </div>
    </div>
  );
}
