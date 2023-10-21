import { useState } from 'react';
import { LanguageSwitcher } from './LanguageSwitcher/LanguageSwitcher';
import { Modal } from './Modal';
import { Wrench } from '@phosphor-icons/react';
import { ThemeToggle } from './ThemeToggle/ThemeToggle';
import { useTranslation } from 'react-i18next';

export function Header() {
  const { t } = useTranslation();

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
            id="open-modal-settings"
            className="text-purple-200 transition-all duration-200 hover:opacity-50 cursor-pointer"
            onClick={() => setIsModalOpen(true)}
            aria-label="Open modal settings"
          >
            <Wrench size={26} weight="bold" />
          </button>
          <Modal
            title={t('jhlSetting')}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          >
            <div className="w-full px-1 flex items-center justify-between">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </Modal>
        </div>
      </div>
    </header>
  );
}
