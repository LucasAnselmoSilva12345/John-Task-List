import { useState } from 'react';
import { LanguageSwitcher } from './LanguageSwitcher/LanguageSwitcher';
import { Modal } from './Modal';
import { Wrench } from '@phosphor-icons/react';
import { ThemeToggle } from './ThemeToggle/ThemeToggle';

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="bg-violet-500 shadow dark:bg-neutral-900 ">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-violet-100">
              John Task List
            </h1>
          </div>

          <button
            className="text-purple-200 transition-all duration-200 hover:opacity-50 cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <Wrench size={26} weight="bold" />
          </button>
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <h1>Model aberto</h1>
            <LanguageSwitcher />
            <ThemeToggle />
          </Modal>
        </div>
      </div>
    </header>
  );
}
