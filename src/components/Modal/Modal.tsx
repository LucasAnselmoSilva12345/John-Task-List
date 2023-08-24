import { X } from '@phosphor-icons/react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Modal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="z-10 bg-white p-6 rounded-lg shadow-xl">
        <h2 className="text-lg font-semibold mb-4">Modal Content</h2>
        <p>This is the content of the modal</p>

        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
