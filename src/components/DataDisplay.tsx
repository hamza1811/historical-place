import { memo } from 'react';

type Props = {
  label: string;
  value: string;
  customClass?: string;
};

export const DataDisplay = memo(
  ({ label, value, customClass = 'mb-2' }: Props) => {
    return (
      <li className={customClass}>
        <strong>{label}:</strong> {value}
      </li>
    );
  }
);
