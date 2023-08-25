interface DateDisplayProps {
  date: Date;
}

export function DateDisplay({ date }: DateDisplayProps) {
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();

  return (
    <div className="flex items-center gap-1 text-sm text-violet-700">
      <p>{day}</p>
      <p>{month}</p>
      <p>{year}</p>
    </div>
  );
}
