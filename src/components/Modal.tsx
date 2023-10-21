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
      <div className="p-4 bg-white rounded shadow-lg">
        <button
          className="absolute top-2 right-2 text-purple-200 transition-all duration-200 hover:opacity-50 cursor-pointer"
          onClick={onClose}
        >
          <X weight="bold" fontSize={32} />
        </button>
        {children}
      </div>
    </div>
  );
}
