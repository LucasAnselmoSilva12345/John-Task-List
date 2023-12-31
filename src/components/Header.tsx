import { ModeToggle } from './mode-toggle';

export function Header() {
  return (
    <header className="bg-primary shadow">
      <div className="mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <h1 className="text-3xl font-bold text-violet-100">John Task List</h1>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
