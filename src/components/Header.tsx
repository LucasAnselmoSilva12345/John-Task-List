import { ModeToggle } from './mode-toggle';

export function Header() {
  return (
    <header className="bg-violet-500 shadow dark:bg-neutral-900 ">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-violet-100">
              John Task List
            </h1>
          </div>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
