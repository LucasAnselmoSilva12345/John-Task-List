import { useState } from 'react';
import { LanguageSwitcher } from './LanguageSwitcher/LanguageSwitcher';
import { List, X } from '@phosphor-icons/react';

export function Header() {
  const [openMenuMobile, setOpenMenuMobile] = useState<boolean>(false);

  const handleOpenMenuMobile = () => {
    setOpenMenuMobile((prev) => !prev);
  };

  return (
    <header className="bg-violet-500 shadow dark:bg-neutral-900 ">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-violet-100">
              John Task List
            </h1>
          </div>

          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <LanguageSwitcher />
            </div>
          </nav>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              onClick={handleOpenMenuMobile}
              className="inline-flex items-center justify-center p-2 text-violet-200"
            >
              <span className="sr-only">Abrir menu</span>
              {openMenuMobile == true ? (
                <X size={25} weight="regular" />
              ) : (
                <List size={25} weight="regular" />
              )}
            </button>
          </div>
        </div>
      </div>
      {openMenuMobile ? (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <LanguageSwitcher className="flex-col items-start px-1 gap-4" />
          </div>
        </div>
      ) : null}
    </header>
  );
}
