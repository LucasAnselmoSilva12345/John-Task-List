import { ComponentPropsWithRef } from 'react';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';

export function Label({ htmlFor, className }: ComponentPropsWithRef<'label'>) {
  const { t } = useTranslation();

  return (
    <label
      className={twMerge(
        'text-base font-medium text-neutral-700 dark:text-neutral-300 ',
        className
      )}
      htmlFor={htmlFor}
    >
      {t('whatNeedsToBe')}
    </label>
  );
}
