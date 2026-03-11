import { RatesResponse } from '../types';

interface RatesTableProps {
  data: RatesResponse;
}

/**
 * TODO (candidate): Implement this component.
 *
 * It receives rates data and should render a table showing
 * each currency code and its exchange rate.
 *
 * Think about:
 *  - How to format numbers (too many decimal places looks noisy)
 *  - Sorting (alphabetical? by rate?)
 *  - What to highlight or call out in the UI
 */
export function RatesTable({ data }: RatesTableProps) {
  // TODO
  return (
    <div>
      <p style={{ color: '#888' }}>[RatesTable] Not implemented yet</p>
      <pre style={{ fontSize: 12 }}>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
