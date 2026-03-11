import { SUPPORTED_BASES, SupportedBase } from '../types';

interface BaseCurrencySelectorProps {
  value: SupportedBase;
  onChange: (base: SupportedBase) => void;
}

/**
 * TODO (candidate): Implement this component.
 *
 * Render a <select> dropdown that lets the user pick from SUPPORTED_BASES.
 * Call onChange when the selection changes.
 *
 * This is the simplest component — good one to start with to get moving.
 */
export function BaseCurrencySelector({ value, onChange }: BaseCurrencySelectorProps) {
  // TODO
  return (
    <select value={value} onChange={e => onChange(e.target.value as SupportedBase)}>
      {SUPPORTED_BASES.map(base => (
        <option key={base} value={base}>{base}</option>
      ))}
    </select>
  );
}
