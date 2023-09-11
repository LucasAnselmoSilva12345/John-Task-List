import { LanguageSwitcher } from './LanguageSwitcher/LanguageSwitcher';

export function Header() {
  return (
    <header className="bg-violet-500 dark:bg-neutral-900 w-full mx-0 mt-auto py-5 flex flex-col items-center justify-center gap-2 md:flex-row md:justify-around md:gap-0">
      <h1 className="text-4xl font-bold text-violet-100">John Task list</h1>
      <LanguageSwitcher />
    </header>
  );
}
