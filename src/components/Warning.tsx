import { useTranslation } from 'react-i18next';

export function Warning() {
  const { t } = useTranslation();

  return (
    <div className="space-y-1">
      <div className="w-full h-1 bg-violet-200" />
      <span className="text-violet-300 block text-center">
        {t('withoutTask')}
      </span>
    </div>
  );
}
