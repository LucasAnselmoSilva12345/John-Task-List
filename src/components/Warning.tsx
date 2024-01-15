export function Warning() {
  return (
    <div className="space-y-1">
      <div className="w-full h-1 bg-muted" />
      <span className="text-muted-foreground block text-center">
        No tasks created
      </span>
    </div>
  );
}
