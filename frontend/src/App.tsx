import { useState } from 'react';
import { BaseCurrencySelector } from './components/BaseCurrencySelector';
import { RatesTable } from './components/RatesTable';
import { CurrencyConverter } from './components/CurrencyConverter';
import { Watchlist } from './components/Watchlist';
import { useRates } from './hooks/useRates';
import { SupportedBase } from './types';
import './styles/App.css';

/**
 * Root component — the overall layout is provided.
 * Wire up the useRates hook and pass data down to RatesTable.
 *
 * TODO (candidate):
 *  1. Connect `base` state to useRates()
 *  2. Handle loading and error states from useRates
 *  3. Pass data to <RatesTable /> when status === 'success'
 */
export default function App() {
  const [base, setBase] = useState<SupportedBase>('USD');

  // TODO: replace this with useRates(base) and handle all states
  const ratesState = useRates(base);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Exchange Rate Dashboard</h1>
        <BaseCurrencySelector value={base} onChange={setBase} />
      </header>

      <main className="app-main">
        <section className="section">
          <h2>Live Rates</h2>
          {/* TODO: render based on ratesState.status */}
          {ratesState && ratesState.status === 'idle' && (
            <p className="hint">Select a base currency above to load rates.</p>
          )}
          {ratesState.status === 'loading' && (
            <p className="hint">Loading...</p>
          )}

          {ratesState.status === 'error' && (
            <p className="hint">Error: {ratesState.message}</p>
          )}
          
          {ratesState.status === 'success' && (
            <pre className="hint">
              {JSON.stringify(ratesState.data, null, 2)}
            </pre>
          )}
        </section>

        <section className="section">
          <h2>Currency Converter</h2>
          <CurrencyConverter />
        </section>

        <section className="section">
          <h2>My Watchlist</h2>
          <Watchlist />
        </section>
      </main>
    </div>
  );
}
