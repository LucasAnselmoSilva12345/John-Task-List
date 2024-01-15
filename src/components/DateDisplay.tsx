interface DateDisplayProps {
  date: Date;
}

export function DateDisplay({ date }: DateDisplayProps) {
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();
  const currentDate = `${month} ${day}, ${year}`;

  return (
    <div
      aria-label={`task-date-${date.toISOString()}`}
      className="flex items-center text-sm text-violet-700 dark:text-violet-50"
    >
      <p>{currentDate}</p>
    </div>
  );
}
