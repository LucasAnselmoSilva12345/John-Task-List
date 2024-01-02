import { useTranslation } from 'react-i18next';

export function Warning() {
  const { t } = useTranslation();

  return (
    <div className="space-y-1">
      <div className="w-full h-1 bg-muted" />
      <span className="text-muted-foreground block text-center">
        {t('withoutTask')}
      </span>
    </div>
  );
}
