// ─────────────────────────────────────────────
// Shared types for the Exchange Rate API
// ─────────────────────────────────────────────

/**
 * Raw response shape from open.er-api.com
 * Docs: https://open.er-api.com/v6/latest/USD
 */
export interface ExternalRatesResponse {
  result: 'success' | 'error';
  base_code: string;
  time_last_update_utc: string;
  rates: Record<string, number>;
}

/**
 * TODO (candidate): Define the shape your API returns for exchange rates.
 * The frontend will depend on this type — design it thoughtfully.
 */
export interface RatesResponse {
  result: 'success' | 'error';
  base_code: string;
  time_last_update_utc: string;
  rates: Record<string, number>;
}

/**
 * TODO (candidate): Define the shape your API returns for a conversion result.
 */
export interface ConversionResult {
  // TODO
}

/**
 * TODO (candidate): Define the request body shape for POST /api/watchlist
 */
export interface WatchlistRequest {
  // TODO
}
