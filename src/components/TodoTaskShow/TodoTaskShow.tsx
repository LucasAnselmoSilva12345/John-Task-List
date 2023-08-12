import { CheckCircle, Trash } from '@phosphor-icons/react';

export function TodoTaskShow() {
  return (
    <div className="bg-blue-200 mt-4 py-4 px-2 flex items-center justify-between">
      <div>
        <p className="text-base font-medium text-blue-900">Make a homework</p>
      </div>

      <div className="flex items-center gap-1">
        <span className="cursor-pointer text-center text-sm">
          <Trash size={16} />
        </span>
        <span className="cursor-pointer text-center text-sm">
          <CheckCircle size={16} />
        </span>
      </div>
    </div>
  );
}
