import { useConverter } from '../hooks/useConverter';

/**
 * TODO (candidate): Implement this component.
 *
 * It should render:
 *  - An amount input (number)
 *  - A "from" currency selector
 *  - A "to" currency selector
 *  - A button or auto-trigger to perform conversion
 *  - The converted result (or loading/error state)
 *
 * Use the useConverter hook — don't call the API directly from here.
 */
export function CurrencyConverter() {
  const { state, convert } = useConverter();

  // TODO
  return (
    <div>
      <p style={{ color: '#888' }}>[CurrencyConverter] Not implemented yet</p>
    </div>
  );
}
